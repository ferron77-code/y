import { Link } from 'react-router-dom'

export default function EN() {
  return (
    <>
      <header>
        <nav className="container">
          <img src="/cuba-b459-logo.png" alt="Cuba B459" className="logo" />
          <ul className="nav-links">
            <li><a href="#mision">Mission</a></li>
            <li><a href="#tony">Tony</a></li>
            <li><a href="#musica">Music</a></li>
            <li>
              <Link to="/" className="lang-toggle">ES</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <h1>El Sol De Cuba</h1>
          <p>Freedom. Unity. Hope. Cuba.</p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button style={{ background: 'var(--gold)', color: 'var(--midnight)', padding: '12px 30px', fontSize: '1rem', fontWeight: '600', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              ▶ Listen Now
            </button>
            <button style={{ background: 'transparent', color: 'var(--white)', padding: '12px 30px', fontSize: '1rem', fontWeight: '600', border: '2px solid var(--gold)', borderRadius: '4px', cursor: 'pointer' }}>
              Join the Movement
            </button>
          </div>
        </div>
      </section>

      <section className="platforms">
        <div className="container">
          <h2>Listen Everywhere</h2>
          <div className="platforms-grid">
            <div className="platform-link">Spotify</div>
            <div className="platform-link">Apple Music</div>
            <div className="platform-link">Amazon Music</div>
            <div className="platform-link">YouTube Music</div>
            <div className="platform-link">Deezer</div>
          </div>
        </div>
      </section>

      <section id="mision" className="mission">
        <div className="container">
          <h2>About Cuba B459</h2>
          <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1rem' }}>
            Cuba B459 is a grassroots movement with the goal of educating a new generation on life in Cuba before the Cuban Revolution as told by survivors of the Cuban exile, inspiring new artists to advance the Cuban Liberation genre using AI technology, and motivating young people to seek political, economic, and social change in Cuba.
          </p>

          <div className="mission-grid">
            <div className="mission-card">
              <h3>Remember</h3>
              <p>Preserve and share the stories of pre-revolutionary Cuba through the testimonies of those who lived that era.</p>
            </div>
            <div className="mission-card">
              <h3>Create</h3>
              <p>Inspire artists to create in the Cuban Liberation genre using AI technology as a creative tool.</p>
            </div>
            <div className="mission-card">
              <h3>Inspire</h3>
              <p>Motivate young people to learn from history and seek political, economic, and social change in Cuba.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tony" className="bio">
        <div className="container">
          <div className="bio-content">
            <h2>About the Author</h2>
            <p>
              Tony Calatayud is a Cuban artist, producer, and musician passionate about preserving Cuban cultural heritage. Through his music and creativity, Tony seeks to inspire a new generation about the beauty and importance of Cuba. A son, a father, a husband, a grandfather - someone deeply connected to his roots and committed to telling the stories that must not be forgotten.
            </p>
            <p>
              "El Sol De Cuba" is his artistic statement - a song that captures the nostalgia, joy, and determination of the Cuban people. Through every note, Tony invites us to remember and to dream of a better future.
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>The Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <h3>Ferron Hartshorn</h3>
              <div className="role">Digital Producer</div>
              <p>Placeholder</p>
            </div>
            <div className="team-card">
              <h3>Pedro Hernández</h3>
              <div className="role">Social Media Producer</div>
              <p>Placeholder</p>
            </div>
            <div className="team-card">
              <h3>Julio Rodríguez</h3>
              <div className="role">Managing Producer</div>
              <p>Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>The Movement</h2>
          <p className="values-intro">
            The Movement represents the larger cultural vision behind El Sol De Cuba and Cuba B459. Through music, storytelling, technology, and creative expression, the movement seeks to connect generations, preserve Cuban history, inspire new artists, and give a voice to those who believe in a better future for Cuba.
          </p>
          <div className="values-grid">
            <div className="value-item">
              <h3>History</h3>
              <p>Remember where we came from.</p>
            </div>
            <div className="value-item">
              <h3>Culture</h3>
              <p>Preserve the music, stories, traditions, and identity of the Cuban people.</p>
            </div>
            <div className="value-item">
              <h3>Creativity</h3>
              <p>Give a new generation of artists the tools to tell their stories.</p>
            </div>
            <div className="value-item">
              <h3>Technology</h3>
              <p>Use AI and modern creative technology to expand the reach of Cuban voices.</p>
            </div>
            <div className="value-item">
              <h3>Freedom</h3>
              <p>Inspire hope for political, economic, and social change.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="songs">
        <div className="container">
          <h2>The Songs</h2>
          <p className="songs-intro">
            The music of El Sol De Cuba brings the history, culture, struggle, hope, and spirit of Cuba into a new generation.
          </p>
          <div className="songs-grid">
            <div className="song-card">
              <h3>El Sol De Cuba</h3>
              <div className="status">Available Now</div>
              <p>The song that inspires the movement.</p>
            </div>
            <div className="song-card">
              <h3>El Tiempo Ha Llegado</h3>
              <div className="status">Coming Soon</div>
              <p>New music on the way.</p>
            </div>
            <div className="song-card">
              <h3>Cuba Baila</h3>
              <div className="status">Coming Soon</div>
              <p>The celebration continues.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="musica" className="player">
        <div className="container">
          <h2>El Sol De Cuba</h2>
          <div className="player-container">
            <div className="youtube-player">
              <iframe
                src="https://www.youtube.com/embed/xE6l2sSSAyw"
                title="El Sol De Cuba - Tony Calatayud"
                allowFullScreen
              />
            </div>
          </div>
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--gold)', marginBottom: '20px' }}>Listen Everywhere</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <div className="social-link-placeholder">Spotify</div>
              <div className="social-link-placeholder">Apple Music</div>
              <div className="social-link-placeholder">Amazon Music</div>
              <div className="social-link-placeholder">YouTube Music</div>
              <div className="social-link-placeholder">Deezer</div>
            </div>
          </div>
        </div>
      </section>

      <section className="lyrics">
        <div className="container">
          <h2>Song Lyrics</h2>
          <div className="lyrics-grid">
            <div className="lyrics-column">
              <h3>Verse 1</h3>
              <div className="lyrics-text">
{`When morning arrives
And the sun shines on the Malecón
I remember your joy
The Cuba of my heart

Time of glory and dreams
In the nights of Havana
Your people, your light, your effort
A story that never lies`}
              </div>
            </div>
            <div className="lyrics-column">
              <h3>Chorus</h3>
              <div className="lyrics-text">
{`Cuba is Joy!
Cuba is Freedom!
Cuba is Poetry!
In every heart

Let the sun shine again
Let harmony return
The sun of Cuba is the dream
Of all my life`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="follow">
        <div className="container">
          <h2>Follow the Movement</h2>
          <div className="social-links">
            <a href="https://www.instagram.com/cubab459" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/CubaB459" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com/@CubaB459" target="_blank" rel="noopener noreferrer">YouTube</a>
            <span className="social-link-placeholder">Threads</span>
            <span className="social-link-placeholder">TikTok</span>
            <span className="social-link-placeholder">X</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 Cuba B459. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
