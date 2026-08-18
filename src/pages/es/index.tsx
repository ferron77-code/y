import { Link } from 'react-router-dom'

export default function ES() {
  return (
    <>
      <header>
        <nav className="container">
          <img src="/cuba-b459-logo.png" alt="Cuba B459" className="logo" />
          <ul className="nav-links">
            <li><a href="#mision">Misión</a></li>
            <li><a href="#tony">Tony Calatayud</a></li>
            <li><a href="#musica">Música</a></li>
            <li>
              <Link to="/en" className="lang-toggle">EN</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Cuba B459</h1>
          <p>Un movimiento por la educación, la inspiración y el cambio</p>
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
              <h3>Educar</h3>
              <p>Preservar y compartir las historias de la Cuba pre-revolucionaria a través de los testimonios de quienes vivieron esa era. Educamos a las nuevas generaciones sobre el legado cubano.</p>
            </div>
            <div className="mission-card">
              <h3>Inspirar</h3>
              <p>Motivar a artistas a crear en el género de Liberación Cubana utilizando tecnología de IA como herramienta creativa. Cada pieza de arte es un acto de resistencia cultural.</p>
            </div>
            <div className="mission-card">
              <h3>Motivar</h3>
              <p>Impulsar el cambio político, económico y social en Cuba. Creemos en el poder de la juventud para transformar el futuro de la isla.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tony" className="bio">
        <div className="container">
          <div className="bio-content">
            <h2>Tony Calatayud</h2>
            <p>
              Tony Calatayud es un artista, productor y músico cubano apasionado por preservar la herencia cultural cubana. A través de su música y creatividad, Tony busca inspirar a una nueva generación sobre la belleza y la importancia de Cuba. Un hijo, un padre, un esposo, un abuelo - alguien profundamente conectado con sus raíces y comprometido con contar las historias que no deben olvidarse.
            </p>
            <p>
              "El Sol De Cuba" es su declaración artística - una canción que captura la nostalgia, la alegría y la determinación del pueblo cubano. A través de cada nota, Tony nos invita a recordar y a soñar con un futuro mejor.
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

      <footer>
        <div className="container">
          <div className="social-links">
            <a href="https://www.instagram.com/cubab459" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/CubaB459" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.youtube.com/@CubaB459" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
          <p>&copy; 2024 Cuba B459. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}
