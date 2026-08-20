import { Link } from 'react-router-dom'

export default function ES() {
  return (
    <>
      <header>
        <nav className="container">
          <img src="/cuba-b459-logo.png" alt="Cuba B459" className="logo" />
          <ul className="nav-links">
            <li><a href="#mision">Misión</a></li>
            <li><a href="#tony">Tony</a></li>
            <li><a href="#musica">Música</a></li>
            <li>
              <Link to="/en" className="lang-toggle">EN</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <h1>El Sol De Cuba</h1>
          <p>Libertad. Unidad. Esperanza. Cuba.</p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button style={{ background: 'var(--gold)', color: 'var(--midnight)', padding: '12px 30px', fontSize: '1rem', fontWeight: '600', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
              ▶ Escuchar Ahora
            </button>
            <button style={{ background: 'transparent', color: 'var(--white)', padding: '12px 30px', fontSize: '1rem', fontWeight: '600', border: '2px solid var(--gold)', borderRadius: '4px', cursor: 'pointer' }}>
              Unirse al Movimiento
            </button>
          </div>
        </div>
      </section>

      <section className="platforms">
        <div className="container">
          <h2>Escucha en Todas Partes</h2>
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
          <h2>¿Qué es Cuba B459?</h2>
          <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.1rem' }}>
            Cuba B459 es un movimiento de base con el objetivo de educar a una nueva generación sobre la vida en Cuba antes de la Revolución Cubana según los relatos de sobrevivientes del exilio cubano, inspirar a nuevos artistas a avanzar el género de Liberación Cubana usando tecnología de IA, y motivar a jóvenes a buscar cambios políticos, económicos y sociales en Cuba.
          </p>

          <div className="mission-grid">
            <div className="mission-card">
              <h3>Recordar</h3>
              <p>Preservar y compartir las historias de la Cuba pre-revolucionaria a través de los testimonios de quienes vivieron esa era.</p>
            </div>
            <div className="mission-card">
              <h3>Crear</h3>
              <p>Inspirar a artistas a crear en el género de Liberación Cubana utilizando tecnología de IA como herramienta creativa.</p>
            </div>
            <div className="mission-card">
              <h3>Inspirar</h3>
              <p>Impulsar a jóvenes a aprender de la historia y buscar cambios políticos, económicos y sociales en Cuba.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tony" className="bio">
        <div className="container">
          <div className="bio-content">
            <h2>Sobre el Autor</h2>
            <p>
              Tony Calatayud es un artista, productor y músico cubano apasionado por preservar la herencia cultural cubana. A través de su música y creatividad, Tony busca inspirar a una nueva generación sobre la belleza y la importancia de Cuba. Un hijo, un padre, un esposo, un abuelo - alguien profundamente conectado con sus raíces y comprometido con contar las historias que no deben olvidarse.
            </p>
            <p>
              "El Sol De Cuba" es su declaración artística - una canción que captura la nostalgia, la alegría y la determinación del pueblo cubano. A través de cada nota, Tony nos invita a recordar y a soñar con un futuro mejor.
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>El Equipo</h2>
          <div className="team-grid">
            <div className="team-card">
              <h3>Ferron Hartshorn</h3>
              <div className="role">Productor Digital</div>
              <p>Placeholder</p>
            </div>
            <div className="team-card">
              <h3>Pedro Hernández</h3>
              <div className="role">Productor de Redes Sociales</div>
              <p>Placeholder</p>
            </div>
            <div className="team-card">
              <h3>Julio Rodríguez</h3>
              <div className="role">Productor Ejecutivo</div>
              <p>Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>El Movimiento</h2>
          <p className="values-intro">
            El Movimiento representa la visión cultural más amplia detrás de El Sol De Cuba y Cuba B459. A través de la música, las historias, la tecnología y la expresión creativa, el movimiento busca conectar generaciones, preservar la historia cubana, inspirar nuevos artistas y dar voz a quienes creen en un futuro mejor para Cuba.
          </p>
          <div className="values-grid">
            <div className="value-item">
              <h3>Historia</h3>
              <p>Recuerda de dónde venimos.</p>
            </div>
            <div className="value-item">
              <h3>Cultura</h3>
              <p>Preserva la música, historias, tradiciones e identidad del pueblo cubano.</p>
            </div>
            <div className="value-item">
              <h3>Creatividad</h3>
              <p>Dale a una nueva generación de artistas las herramientas para contar sus historias.</p>
            </div>
            <div className="value-item">
              <h3>Tecnología</h3>
              <p>Usa IA y tecnología creativa moderna para ampliar el alcance de las voces cubanas.</p>
            </div>
            <div className="value-item">
              <h3>Libertad</h3>
              <p>Inspira esperanza por el cambio político, económico y social.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="songs">
        <div className="container">
          <h2>Las Canciones</h2>
          <p className="songs-intro">
            La música de El Sol De Cuba trae la historia, cultura, lucha, esperanza y espíritu de Cuba a una nueva generación.
          </p>
          <div className="songs-grid">
            <div className="song-card">
              <h3>El Sol De Cuba</h3>
              <div className="status">Disponible Ahora</div>
              <p>La canción que inspira el movimiento.</p>
            </div>
            <div className="song-card">
              <h3>El Tiempo Ha Llegado</h3>
              <div className="status">Próximamente</div>
              <p>Nueva música en camino.</p>
            </div>
            <div className="song-card">
              <h3>Cuba Baila</h3>
              <div className="status">Próximamente</div>
              <p>La celebración continúa.</p>
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
            <h3 style={{ color: 'var(--gold)', marginBottom: '20px' }}>Escucha en Todas Partes</h3>
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
          <h2>Letra de la Canción</h2>
          <div className="lyrics-grid">
            <div className="lyrics-column">
              <h3>Estrofa 1</h3>
              <div className="lyrics-text">
{`Cuando llega la mañana
Y el sol brilla en el Malecón
Recuerdo tu alegría
La Cuba de mi corazón

Tiempo de gloria y de sueño
En las noches de La Habana
Tu gente, tu luz, tu empeño
Una historia que no se engaña`}
              </div>
            </div>
            <div className="lyrics-column">
              <h3>Coro</h3>
              <div className="lyrics-text">
{`¡Cuba es Alegría!
¡Cuba es Libertad!
¡Cuba es Poesía!
En cada corazón

Que el sol brille de nuevo
Que vuelva la armonía
El sol de Cuba es el sueño
De toda mi vida`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="follow">
        <div className="container">
          <h2>Síguenos</h2>
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
          <p>&copy; 2024 Cuba B459. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}
