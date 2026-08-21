import { Link } from 'react-router-dom'
import Hero, { type LinkItem } from '../../components/Hero'
import ScrollJourney, { type Chapter } from '../../components/ScrollJourney'

// The journey keeps the song's own Spanish lines: those are the record, not
// page copy, so they are never translated.
const chapters: Chapter[] = [
  {
    id: 'scene-01',
    label: 'Top',
    kicker: 'Tony Calatayud',
    title: 'El Sol De Cuba',
    body: 'Cuba B459 — Cuba as it was before 1959, sung out loud.',
  },
  {
    id: 'scene-02',
    label: 'Malecón',
    kicker: 'First verse',
    title: 'Ya no hay cadenas',
    body: 'Camino por el malecón sin miedo a mirar atrás',
  },
  {
    id: 'scene-03',
    label: 'Alegría',
    kicker: 'The feeling',
    title: 'Ya se cayeron las murallas',
    body: 'No hay miedo, no hay censura, solo sabrosura',
  },
  {
    id: 'scene-04',
    label: 'Tambor',
    kicker: 'The chorus',
    title: 'Que se escuche el tambor',
    body: 'Que se sienta el sabor',
  },
]

// Streaming links land here as the song goes live on each platform.
const available: LinkItem[] = [
  { label: 'Spotify' },
  { label: 'Apple Music' },
  { label: 'Amazon Music' },
  { label: 'YouTube Music' },
  { label: 'Deezer' },
]

const follow: LinkItem[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/cubab459' },
  { label: 'Facebook', href: 'https://www.facebook.com/CubaB459' },
  { label: 'Threads' },
  { label: 'TikTok' },
  { label: 'YouTube', href: 'https://www.youtube.com/@CubaB459' },
  { label: 'X' },
]

export default function EN() {
  return (
    <>
      <header className="nav">
        <a className="nav__mark" href="#top">
          <img src="/cuba-b459-logo.png" alt="" />
          Cuba B459
        </a>
        <ul className="nav__links">
          <li><a className="nav__link" href="#movement">Movement</a></li>
          <li><a className="nav__link" href="#team">Team</a></li>
          <li><a className="nav__link" href="#song">Song</a></li>
          <li><Link to="/" className="nav__lang">ES</Link></li>
        </ul>
      </header>

      <main>
        <Hero
          tagline="Freedom. Unity. Hope. Cuba."
          availableLabel="Available on"
          followLabel="Follow the movement"
          available={available}
          follow={follow}
        />

        <section className="section section--lead" id="support">
          <div className="wrap">
            <h2 className="h1">Support the movement</h2>
            <p className="lede lede--wide">
              El Sol De Cuba is more than a song. It is part of a growing
              cultural movement using music, storytelling, creativity, and
              technology to preserve history, inspire artists, and encourage a
              new generation to think about Cuba's future.
            </p>
          </div>
        </section>

        <section className="section" id="movement">
          <div className="wrap">
            <p className="eyebrow">About Cuba B4 59</p>
            <h2 className="h2">What is Cuba B459?</h2>
            <p className="lede">
              Cuba B459 is a grassroots movement with the goal of educating a new
              generation on life in Cuba before the Cuban Revolution as told by
              survivors of the Cuban exile, inspire new artists to advance the
              Cuban Liberation genre using AI technology, and motivate young
              people to seek political, economic, and social change in Cuba.
            </p>

            <div className="grid-3">
              <div className="card">
                <h3>Remember</h3>
                <p>
                  Preserve and share firsthand stories and experiences of life in
                  Cuba before the Revolution.
                </p>
              </div>
              <div className="card card--teal">
                <h3>Create</h3>
                <p>
                  Inspire a new generation of artists to use music, creativity,
                  and AI technology to advance the Cuban Liberation genre.
                </p>
              </div>
              <div className="card card--red">
                <h3>Inspire</h3>
                <p>
                  Motivate young people to learn from history and seek political,
                  economic, and social change in Cuba.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="tony">
          <div className="wrap">
            <p className="eyebrow">About the author</p>
            <h2 className="h2">Tony Calatayud</h2>
            <p className="pull">Nostalgia you can dance to.</p>
            <p className="lede">
              Tony Calatayud is Cuban. A son, a father, a husband, a grandfather.
              The song carries what that country meant to his family, and it
              carries it the way Cubans carry things: loudly, in good company,
              with the horns up.
            </p>
            <p className="lede">
              What it hopes for is simple and not small: that Cuba becomes a
              democracy. B459 reads as <i>Before 59</i> — Cuba as it was before
              1959.
            </p>
          </div>
        </section>

        <section className="section" id="team">
          <div className="wrap">
            <p className="eyebrow">About the team</p>
            <h2 className="h2">The team</h2>
            <div className="grid-3">
              <div className="card">
                <h3>Ferron Hartshorn</h3>
                <p className="card__role">Digital Producer</p>
                <p>
                  Responsible for the digital production, creative technology,
                  and development of the project's digital media.
                </p>
              </div>
              <div className="card card--teal">
                <h3>Pedro Hernández</h3>
                <p className="card__role">Social Media Producer</p>
                <p>
                  Pedro Hernández is a music producer, songwriter, broadcast
                  producer, and entrepreneur with experience working alongside
                  major artists. As a creative and advertising executive, he
                  brings together music, media, marketing, and entertainment to
                  develop impactful projects across multiple platforms.
                </p>
              </div>
              <div className="card card--red">
                <h3>Julio Rodríguez</h3>
                <p className="card__role">Managing Producer</p>
                <p>
                  Responsible for project management, production coordination,
                  and helping bring the creative vision of the project together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="songs">
          <div className="wrap">
            <p className="eyebrow">The catalogue</p>
            <h2 className="h2">Las Canciones</h2>
            <p className="lede">
              The music of El Sol De Cuba brings the history, culture, struggle,
              hope, and spirit of Cuba into a new generation.
            </p>
            <div className="grid-3">
              <a className="card card--link" href="#song">
                <h3>El Sol De Cuba</h3>
                <p className="card__role">Available now</p>
                <p>The song that lights the movement.</p>
              </a>
              <div className="card card--teal">
                <h3>El Tiempo Ha Llegado</h3>
                <p className="card__role">Coming soon</p>
                <p>New music on the way.</p>
              </div>
              <div className="card card--red">
                <h3>Cuba Baila</h3>
                <p className="card__role">Coming soon</p>
                <p>The celebration continues.</p>
              </div>
            </div>
            <hr className="rule" />
          </div>
        </section>

        <ScrollJourney chapters={chapters} />

        <section className="section" id="place">
          <div className="wrap">
            <p className="eyebrow">The place</p>
            <p className="neon">Cuba <span>es</span> Alegría</p>
            <h2 className="h2">Not a museum piece</h2>
            <p className="lede">
              Colour on every wall. Music coming out of doorways. A street that
              never quite goes quiet. This is a party with a long memory, and
              that is exactly how Tony wrote it.
            </p>
          </div>
        </section>

        <section className="chorus">
          <p>I want the sun of Cuba</p>
          <p>shining for my people</p>
          <p>I want freedom from</p>
          <p>East to West</p>
        </section>

        <section className="section" id="ideas">
          <div className="wrap">
            <p className="eyebrow">El Movimiento</p>
            <h2 className="h2">The core ideas</h2>
            <p className="lede">
              Through music, storytelling, technology, and creative expression,
              the movement seeks to connect generations, preserve Cuban history,
              inspire new artists, and give a voice to those who believe in a
              better future for Cuba.
            </p>
            <div className="grid-3">
              <div className="card"><h3>History</h3><p>Remember where we came from.</p></div>
              <div className="card card--teal"><h3>Culture</h3><p>Preserve the music, stories, traditions, and identity of the Cuban people.</p></div>
              <div className="card card--red"><h3>Creativity</h3><p>Give a new generation of artists the tools to tell their stories.</p></div>
              <div className="card card--teal"><h3>Technology</h3><p>Use AI and modern creative technology to expand the reach of Cuban voices.</p></div>
              <div className="card"><h3>Freedom</h3><p>Inspire hope for political, economic, and social change.</p></div>
            </div>
          </div>
        </section>

        <section className="section" id="song">
          <div className="wrap">
            <p className="eyebrow">The song</p>
            <p className="songline">El Sol De Cuba</p>
            <p className="billing">
              CUBA B459 featuring <b>Tony Calatayud</b>
            </p>
            <div className="player">
              <iframe
                src="https://www.youtube-nocookie.com/embed/xE6l2sSSAyw"
                title="El Sol De Cuba"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="actions">
              <a className="btn" href="https://youtu.be/xE6l2sSSAyw" target="_blank" rel="noopener noreferrer">
                Play on YouTube
              </a>
              <a className="btn btn--ghost" href="https://www.youtube.com/@CubaB459" target="_blank" rel="noopener noreferrer">
                More on the channel
              </a>
            </div>

            <p className="eyebrow" style={{ marginTop: '3rem' }}>Available on</p>
            <div className="chips">
              {available.map((item) => (
                <span key={item.label} className="chip chip--pending">{item.label}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="lyrics">
          <div className="wrap">
            <p className="eyebrow">The lyrics</p>
            <h2 className="h2">What the song says</h2>
            <p className="lede">
              A plain English translation, for meaning rather than for singing.
              The Spanish is the real thing and lives on{' '}
              <Link to="/">the main page</Link>.
            </p>
            <div className="lyrics-grid">
              <div className="verse">
                <h3>First verse</h3>
                <p>{`He walks the malecón
with no fear of looking back
There are no chains now,
the loneliness is over
The palms are dancing,
the wind carries the truth`}</p>
              </div>
              <div className="verse">
                <h3>Chorus</h3>
                <p>{`I want the sun of Cuba
shining for my people
I want freedom
from East to West
Let the drum be heard,
let the flavour be felt`}</p>
              </div>
              <div className="verse">
                <h3>Second verse</h3>
                <p>{`The walls have fallen,
the gate is open
No fear, no censorship,
only sabrosura
Cuba is joy,
Cuba is heart`}</p>
              </div>
            </div>
            <hr className="rule" />
          </div>
        </section>

        <section className="section" id="follow">
          <div className="wrap">
            <p className="eyebrow">The movement</p>
            <h2 className="h2">Follow the movement</h2>
            <div className="chips">
              {follow.map((item) =>
                item.href ? (
                  <a key={item.label} className="chip" href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <span key={item.label} className="chip chip--pending">{item.label}</span>
                ),
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">CUBA B459 — El Sol De Cuba</div>
      </footer>
    </>
  )
}
