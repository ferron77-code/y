import { useEffect, useRef, useState } from 'react'

export interface Chapter {
  id: string
  label: string
  kicker?: string
  title: string
  body: string
}

/**
 * Scroll-driven cinematic journey. Each chapter owns a band of scroll; the
 * backdrop is a single continuous "camera move" — the warm stage light grows
 * and the room drifts closer as the visitor scrolls, and reverses on scroll up.
 */
export default function ScrollJourney({ chapters }: { chapters: Chapter[] }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = host.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) return
      const p = Math.min(1, Math.max(0, -rect.top / total))
      setProgress(p)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // The camera move: light grows, world drifts forward, horizon lifts.
  const glow = 0.28 + progress * 0.72
  const drift = progress * 100
  const zoom = 1 + progress * 0.35

  const active = Math.min(
    chapters.length - 1,
    Math.floor(progress * chapters.length + 0.0001),
  )

  return (
    <div className="journey" ref={hostRef} style={{ height: `${chapters.length * 100}vh` }}>
      <div className="journey__stage">
        <div
          className="journey__world"
          style={{
            transform: `scale(${zoom}) translate3d(0, ${-drift * 0.12}px, 0)`,
          }}
        >
          <div
            className="journey__sun"
            style={{
              opacity: glow,
              transform: `translate3d(-50%, ${28 - progress * 34}vh, 0) scale(${
                0.6 + progress * 1.1
              })`,
            }}
          />
          <div className="journey__sea" style={{ opacity: 0.35 + progress * 0.4 }} />
          <div className="journey__grain" />
        </div>
        <div className="journey__scrim" style={{ opacity: 0.82 - progress * 0.18 }} />

        <div className="journey__copy">
          {chapters.map((chapter, i) => {
            // Each chapter fades up through its own band of scroll.
            const band = 1 / chapters.length
            const local = (progress - i * band) / band
            const opacity =
              local < -0.35 || local > 1.25
                ? 0
                : Math.min(1, Math.max(0, 1 - Math.abs(local - 0.42) * 2.4))
            return (
              <article
                key={chapter.id}
                className="journey__chapter"
                style={{
                  opacity,
                  transform: `translate3d(0, ${(0.42 - local) * 60}px, 0)`,
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
