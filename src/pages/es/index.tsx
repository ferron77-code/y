import { Link } from 'react-router-dom'
import ScrollJourney, { type Chapter } from '../../components/ScrollJourney'

// The journey keeps the song's own lines: those are the record, not page copy.
const chapters: Chapter[] = [
  {
    id: 'scene-01',
    label: 'Top',
    kicker: 'Tony Calatayud',
    title: 'El Sol De Cuba',
    body: 'Cuba B459 — la Cuba de antes del 59, cantada en voz alta.',
  },
  {
    id: 'scene-02',
    label: 'Malecón',
    kicker: 'Primera estrofa',
    title: 'Ya no hay cadenas',
    body: 'Camino por el malecón sin miedo a mirar atrás',
  },
  {
    id: 'scene-03',
    label: 'Alegría',
    kicker: 'El sentimiento',
    title: 'Ya se cayeron las murallas',
    body: 'No hay miedo, no hay censura, solo sabrosura',
  },
  {
    id: 'scene-04',
    label: 'Tambor',
    kicker: 'El coro',
    title: 'Que se escuche el tambor',
    body: 'Que se sienta el sabor',
  },
]

export default function ES() {
  return (
    <>
      <header className="nav">
        <a className="nav__mark" href="#top">
          <img src="/cuba-b459-logo.png" alt="" />
          Cuba B459
        </a>
        <ul className="nav__links">
          <li><a className="nav__link" href="#movimiento">Movimiento</a></li>
          <li><a className="nav__link" href="#tony">Tony</a></li>
          <li><a className="nav__link" href="#cancion">Canción</a></li>
          <li><Link to="/en" className="nav__lang">EN</Link></li>
        </ul>
      </header>

      <main id="top">
        <ScrollJourney chapters={chapters} />

        <section className="section" id="movimiento">
          <div className="wrap">
            <p className="eyebrow">El lugar</p>
            <p className="neon">Cuba <span>es</span> Alegría</p>
            <h2 className="h2">No es una pieza de museo</h2>
            <p className="lede">
              Color en cada pared. Música saliendo por las puertas. Una calle que
              nunca termina de callarse. Esto es una fiesta con memoria larga, y
              así mismo la escribió Tony.
            </p>
            <p className="lede">
              Cuba B459 es un movimiento de base con el objetivo de educar a una
              nueva generación sobre la vida en Cuba antes de la Revolución
              Cubana, según los relatos de sobrevivientes del exilio cubano;
              inspirar a nuevos artistas a avanzar el género de Liberación Cubana
              usando tecnología de IA; y motivar a los jóvenes a buscar cambios
              políticos, económicos y sociales en Cuba.
            </p>

            <div className="grid-3">
              <div className="card">
                <h3>Recordar</h3>
                <p>
                  Preservar y compartir las historias y experiencias de primera
                  mano de la vida en Cuba antes de la Revolución.
                </p>
              </div>
              <div className="card card--teal">
                <h3>Crear</h3>
                <p>
                  Inspirar a una nueva generación de artistas a usar la música,
                  la creatividad y la IA para avanzar el género de Liberación
                  Cubana.
                </p>
              </div>
              <div className="card card--red">
                <h3>Inspirar</h3>
                <p>
                  Motivar a los jóvenes a aprender de la historia y buscar
                  cambios políticos, económicos y sociales en Cuba.
                </p>
              </div>
            </div>
            <hr className="rule" />
          </div>
        </section>

        <section className="chorus">
          <p>Yo quiero el sol de Cuba</p>
          <p>brillando pa' mi gente</p>
          <p>Yo quiero libertad</p>
          <p>de oriente a occidente</p>
        </section>

        <section className="section" id="tony">
          <div className="wrap">
            <p className="eyebrow">El autor</p>
            <h2 className="h2">Tony Calatayud escribió esta</h2>
            <p className="pull">Nostalgia que se puede bailar.</p>
            <p className="lede">
              Tony Calatayud es cubano. Un hijo, un padre, un esposo, un abuelo.
              La canción carga lo que ese país significó para su familia, y lo
              carga como cargan las cosas los cubanos: en voz alta, en buena
              compañía, con los metales arriba.
            </p>
            <p className="lede">
              Lo que espera es simple y no es poco: que Cuba llegue a ser una
              democracia. B459 se lee <i>Before 59</i> — la Cuba de antes de 1959.
            </p>
          </div>
        </section>

        <section className="section" id="equipo">
          <div className="wrap">
            <p className="eyebrow">Quiénes somos</p>
            <h2 className="h2">El equipo</h2>
            <div className="grid-3">
              <div className="card">
                <h3>Ferron Hartshorn</h3>
                <p className="card__role">Productor Digital</p>
                <p>Placeholder</p>
              </div>
              <div className="card card--teal">
                <h3>Pedro Hernández</h3>
                <p className="card__role">Productor de Redes Sociales</p>
                <p>Placeholder</p>
              </div>
              <div className="card card--red">
                <h3>Julio Rodríguez</h3>
                <p className="card__role">Productor Ejecutivo</p>
                <p>Placeholder</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="ideas">
          <div className="wrap">
            <p className="eyebrow">El movimiento</p>
            <h2 className="h2">Las ideas centrales</h2>
            <p className="lede">
              A través de la música, las historias, la tecnología y la expresión
              creativa, el movimiento busca conectar generaciones, preservar la
              historia cubana, inspirar nuevos artistas y dar voz a quienes creen
              en un futuro mejor para Cuba.
            </p>
            <div className="grid-3">
              <div className="card"><h3>Historia</h3><p>Recuerda de dónde venimos.</p></div>
              <div className="card card--teal"><h3>Cultura</h3><p>Preserva la música, las historias, las tradiciones y la identidad del pueblo cubano.</p></div>
              <div className="card card--red"><h3>Creatividad</h3><p>Dale a una nueva generación de artistas las herramientas para contar sus historias.</p></div>
              <div className="card card--teal"><h3>Tecnología</h3><p>Usa IA y tecnología creativa moderna para ampliar el alcance de las voces cubanas.</p></div>
              <div className="card"><h3>Libertad</h3><p>Inspira esperanza por el cambio político, económico y social.</p></div>
            </div>
          </div>
        </section>

        <section className="section" id="cancion">
          <div className="wrap">
            <p className="eyebrow">La canción</p>
            <p className="songline">El Sol De Cuba</p>
            <p className="billing">
              CUBA B459 con <b>Tony Calatayud</b>
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
                Ver en YouTube
              </a>
              <a className="btn btn--ghost" href="https://www.youtube.com/@CubaB459" target="_blank" rel="noopener noreferrer">
                Más en el canal
              </a>
            </div>

            <p className="eyebrow" style={{ marginTop: '3rem' }}>Escúchala en</p>
            <div className="chips">
              <span className="btn btn--muted">Spotify</span>
              <span className="btn btn--muted">Apple Music</span>
              <span className="btn btn--muted">Amazon Music</span>
              <span className="btn btn--muted">YouTube Music</span>
              <span className="btn btn--muted">Deezer</span>
            </div>
          </div>
        </section>

        <section className="section" id="canciones">
          <div className="wrap">
            <p className="eyebrow">El catálogo</p>
            <h2 className="h2">Las canciones</h2>
            <p className="lede">
              La música de El Sol De Cuba trae la historia, la cultura, la lucha,
              la esperanza y el espíritu de Cuba a una nueva generación.
            </p>
            <div className="grid-3">
              <div className="card">
                <h3>El Sol De Cuba</h3>
                <p className="card__role">Disponible ahora</p>
                <p>La canción que enciende el movimiento.</p>
              </div>
              <div className="card card--teal">
                <h3>El Tiempo Ha Llegado</h3>
                <p className="card__role">Próximamente</p>
                <p>Nueva música en camino.</p>
              </div>
              <div className="card card--red">
                <h3>Cuba Baila</h3>
                <p className="card__role">Próximamente</p>
                <p>La celebración continúa.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="letra">
          <div className="wrap">
            <p className="eyebrow">La letra</p>
            <h2 className="h2">Lo que dice la canción</h2>
            <div className="lyrics-grid">
              <div className="verse">
                <h3>Primera estrofa</h3>
                <p>{`Camino por el malecón
sin miedo a mirar atrás
Ya no hay cadenas,
se acabó la soledad
Las palmas están bailando,
el viento trae la verdad`}</p>
              </div>
              <div className="verse">
                <h3>Coro</h3>
                <p>{`Yo quiero el sol de Cuba
brillando pa' mi gente
Yo quiero libertad
de oriente a occidente
Que se escuche el tambor,
que se sienta el sabor`}</p>
              </div>
              <div className="verse">
                <h3>Segunda estrofa</h3>
                <p>{`Ya se cayeron las murallas,
ya se abrió el portón
No hay miedo, no hay censura,
solo sabrosura
Cuba es alegría,
Cuba es corazón`}</p>
              </div>
            </div>
            <hr className="rule" />
          </div>
        </section>

        <section className="section" id="seguir">
          <div className="wrap">
            <p className="eyebrow">El movimiento</p>
            <h2 className="h2">Síguenos</h2>
            <div className="chips">
              <a className="btn" href="https://www.instagram.com/cubab459" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a className="btn" href="https://www.facebook.com/CubaB459" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a className="btn" href="https://www.youtube.com/@CubaB459" target="_blank" rel="noopener noreferrer">YouTube</a>
              <span className="btn btn--muted">Threads</span>
              <span className="btn btn--muted">TikTok</span>
              <span className="btn btn--muted">X</span>
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
