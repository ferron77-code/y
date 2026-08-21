import { useEffect, useRef, useState } from 'react'

export interface Chapter {
  id: string
  label: string
  kicker?: string
  title: string
  body: string
}

const DESKTOP_POSTER = '/world/journey-poster.jpg'
const MOBILE_POSTER = '/world/journey-mobile-poster.jpg'

/**
 * VP9 is smaller at equal quality and every Chromium/Firefox build takes it;
 * Safari and iOS fall back to the H.264 encode. Both are keyframed every 5
 * frames so a seek lands on a real frame instead of crawling to the next GOP.
 */
function pickClip(mobile: boolean) {
  const probe = document.createElement('video')
  const webm = probe.canPlayType('video/webm; codecs="vp9"')
  const stem = mobile ? '/world/journey-mobile' : '/world/journey'
  return webm === 'probably' || webm === 'maybe' ? `${stem}.webm` : `${stem}.mp4`
}

/** Scroll position drives video time. Higher = the film lags further behind. */
const EASE = 0.12

/**
 * Scroll-scrubbed film. The visitor's scroll IS the transport: the clip is
 * fetched once as a Blob so every seek is local (no range requests), and the
 * playhead chases the scroll position through a rAF loop. Scroll back and the
 * film runs backwards. The poster is held until a real frame has painted.
 */
export default function ScrollJourney({ chapters }: { chapters: Chapter[] }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef(0)
  const [progress, setProgress] = useState(0)
  const [painted, setPainted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // --- scroll position -> progress -------------------------------------
  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let queued = 0
    const measure = () => {
      queued = 0
      const rect = host.getBoundingClientRect()
      const travel = rect.height - window.innerHeight
      if (travel <= 0) return
      const p = Math.min(1, Math.max(0, -rect.top / travel))
      progressRef.current = p
      setProgress(p)
    }
    const onScroll = () => {
      if (queued) return
      queued = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (queued) cancelAnimationFrame(queued)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // --- load the film as a Blob, then scrub it ---------------------------
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const mobile = window.matchMedia('(max-width: 860px)').matches
    setIsMobile(mobile)

    const abort = new AbortController()
    let objectUrl = ''
    let raf = 0
    let seeking = false
    let cancelled = false

    const pump = () => {
      raf = requestAnimationFrame(pump)
      const duration = video.duration
      if (!duration || !Number.isFinite(duration) || seeking) return

      // Chase the scroll target rather than snapping to it — the lag is what
      // makes a scrubbed clip read as a camera move instead of a slider.
      const target = progressRef.current * (duration - 0.05)
      const current = video.currentTime
      const delta = target - current
      if (Math.abs(delta) < 0.01) return

      seeking = true
      video.currentTime = current + delta * EASE
    }

    const onSeeked = () => {
      seeking = false
      if (!cancelled) setPainted(true)
    }
    const onError = () => {
      seeking = false
    }

    video.addEventListener('seeked', onSeeked)
    video.addEventListener('error', onError)

    fetch(pickClip(mobile), { signal: abort.signal })
      .then((r) => (r.ok ? r.blob() : Promise.reject(new Error(String(r.status)))))
      .then((blob) => {
        if (cancelled) return
        objectUrl = URL.createObjectURL(blob)
        video.src = objectUrl
        video.load()
        return video.play().catch(() => undefined)
      })
      .then(() => {
        if (cancelled) return
        // iOS only honours programmatic seeks after a play gesture has been
        // primed; play-then-pause satisfies it without ever showing motion.
        video.pause()
        video.currentTime = 0
        raf = requestAnimationFrame(pump)
      })
      .catch(() => undefined)

    return () => {
      cancelled = true
      abort.abort()
      if (raf) cancelAnimationFrame(raf)
      video.removeEventListener('seeked', onSeeked)
      video.removeEventListener('error', onError)
      video.removeAttribute('src')
      video.load()
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [])

  const active = Math.min(
    chapters.length - 1,
    Math.floor(progress * chapters.length + 0.0001),
  )

  return (
    <div
      className="journey"
      ref={hostRef}
      style={{ height: `${chapters.length * 100}vh` }}
    >
      <div className="journey__stage">
        <img
          className="journey__poster"
          src={isMobile ? MOBILE_POSTER : DESKTOP_POSTER}
          alt=""
          aria-hidden="true"
          style={{ opacity: painted ? 0 : 1 }}
        />
        <video
          className="journey__film"
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          style={{ opacity: painted ? 1 : 0 }}
        />
        <div className="journey__grain" />
        <div className="journey__scrim" />

        <div className="journey__copy">
          {chapters.map((chapter, i) => {
            // Each chapter owns a band of scroll: it rises in, HOLDS while the
            // film runs under it, then sinks out. The first chapter is already
            // at rest on landing and the last one holds to the end, so the
            // journey never opens or closes on empty frame.
            const band = 1 / chapters.length
            const local = (progress - i * band) / band
            const first = i === 0
            const last = i === chapters.length - 1
            const IN = 0.2
            const OUT = 0.8

            let opacity = 1
            if (local < 0) opacity = first ? 1 : 0
            else if (local > 1) opacity = last ? 1 : 0
            else if (local < IN && !first) opacity = local / IN
            else if (local > OUT && !last) opacity = (1 - local) / (1 - OUT)

            const shift = (1 - opacity) * (local < 0.5 ? 26 : -26)

            return (
              <article
                key={chapter.id}
                className="journey__chapter"
                style={{
                  opacity,
                  transform: `translate3d(0, ${shift}px, 0)`,
                  pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                }}
              >
                {chapter.kicker && <p className="journey__kicker">{chapter.kicker}</p>}
                <h2 className="journey__title">{chapter.title}</h2>
                <p className="journey__body">{chapter.body}</p>
              </article>
            )
          })}
        </div>

        <ol className="journey__rail" aria-hidden="true">
          {chapters.map((chapter, i) => (
            <li key={chapter.id} className={i === active ? 'is-active' : ''}>
              <span />
              {chapter.label}
            </li>
          ))}
        </ol>

        <div className="journey__progress">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </div>
  )
}
