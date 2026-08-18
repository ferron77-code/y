import { Link } from 'react-router-dom'

export default function EN() {
  return (
    <>
      <header>
        <nav className="container">
          <img src="/cuba-b459-logo.png" alt="Cuba B459" className="logo" />
          <ul className="nav-links">
            <li><a href="#mision">Mission</a></li>
            <li><a href="#tony">Tony Calatayud</a></li>
            <li><a href="#musica">Music</a></li>
            <li>
              <Link to="/" className="lang-toggle">ES</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Cuba B459</h1>
          <p>A movement for education, inspiration, and change</p>
        </div>
      </section>

      <section id="mision" className="mission">
        <div className="container">
          <h2>What is Cuba B459?</h2>
          <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1rem' }}>
            Cuba B459 is a grassroots movement with the goal of educating a new generation on life in Cuba before the Cuban Revolution as told by survivors of the Cuban exile, inspire new artists to advance the Cuban Liberation genre using AI technology, and motivate young people to seek political, economic, and social change in Cuba.
          </p>

          <div className="mission-grid">
            <div className="mission-card">
              <h3>Educate</h3>
              <p>Preserve and share the stories of pre-revolutionary Cuba through the testimonies of those who lived that era. We educate new generations about the Cuban legacy.</p>
            </div>
            <div className="mission-card">
              <h3>Inspire</h3>
              <p>Motivate artists to create in the Cuban Liberation genre using AI technology as a creative tool. Every piece of art is an act of cultural resistance.</p>
            </div>
            <div className="mission-card">
              <h3>Motivate</h3>
              <p>Drive political, economic, and social change in Cuba. We believe in the power of youth to transform the future of the island.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tony" className="bio">
        <div className="container">
          <div className="bio-content">
            <h2>Tony Calatayud</h2>
            <p>
              Tony Calatayud is a Cuban artist, producer, and musician passionate about preserving Cuban cultural heritage. Through his music and creativity, Tony seeks to inspire a new generation about the beauty and importance of Cuba. A son, a father, a husband, a grandfather - someone deeply connected to his roots and committed to telling the stories that must not be forgotten.
            </p>
            <p>
              "El Sol De Cuba" is his artistic statement - a song that captures the nostalgia, joy, and determination of the Cuban people. Through every note, Tony invites us to remember and to dream of a better future.
            </p>
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

      <footer>
        <div className="container">
          <div className="social-links">
            <a href="https://www.instagram.com/cubab459" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/CubaB459" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com/@CubaB459" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
          <p>&copy; 2024 Cuba B459. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
