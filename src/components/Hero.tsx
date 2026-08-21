import type { ReactNode } from 'react'

export interface LinkItem {
  label: string
  href?: string
}

interface HeroProps {
  tagline: string
  availableLabel: string
  followLabel: string
  available: LinkItem[]
  follow: LinkItem[]
  children?: ReactNode
}

/** A chip is a real link when we have the URL, and a held place when we don't. */
function Chip({ item }: { item: LinkItem }) {
  if (!item.href) {
    return (
      <span className="chip chip--pending" aria-disabled="true">
        {item.label}
      </span>
    )
  }
  return (
    <a className="chip" href={item.href} target="_blank" rel="noopener noreferrer">
      {item.label}
    </a>
  )
}

export default function Hero({
  tagline,
  availableLabel,
  followLabel,
  available,
  follow,
}: HeroProps) {
  return (
    <section className="hero" id="top">
      <video
        className="hero__film"
        poster="/world/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/world/hero.webm" type="video/webm" media="(min-width: 861px)" />
        <source src="/world/hero.mp4" type="video/mp4" media="(min-width: 861px)" />
        <source src="/world/hero-mobile.webm" type="video/webm" />
        <source src="/world/hero-mobile.mp4" type="video/mp4" />
      </video>
      <div className="hero__scrim" />

      <div className="hero__inner">
        <img className="hero__logo" src="/cuba-b459-logo.png" alt="Cuba B459" />
        <h1 className="hero__title">El Sol De Cuba</h1>
        <p className="hero__tagline">{tagline}</p>

        <div className="hero__row">
          <p className="hero__rowlabel">{availableLabel}</p>
          <div className="chips chips--center">
            {available.map((item) => (
              <Chip key={item.label} item={item} />
            ))}
          </div>
        </div>

        <div className="hero__row">
          <p className="hero__rowlabel">{followLabel}</p>
          <div className="chips chips--center">
            {follow.map((item) => (
              <Chip key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
