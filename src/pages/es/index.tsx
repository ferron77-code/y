import { Link } from 'react-router-dom'

import logo from '../../assets/cuba-b459-logo.png'
import Hero, { type LinkItem } from '../../components/Hero'
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

export default function ES() {
  return (
    <>
      <header className="nav">
        <a className="nav__mark" href="#top">
          <img src={logo} alt="" />
          Cuba B459
        </a>
        <ul className="nav__links">
          <li><a className="nav__link" href="#movimiento">Movimiento</a></li>
          <li><a className="nav__link" href="#equipo">Equipo</a></li>
          <li><a className="nav__link" href="#cancion">Canción</a></li>
          <li><Link to="/en" className="nav__lang">EN</Link></li>
        </ul>
      </header>

      <main>
        <Hero
          tagline="Libertad. Unidad. Esperanza. Cuba."
          availableLabel="Disponible en"
          followLabel="Sigue el movimiento"
          available={available}
          follow={follow}
        />

        <section className="section section--lead" id="apoya">
          <div className="wrap">
            <h2 className="h1">Apoya el movimiento</h2>
            <p className="lede lede--wide">
              El Sol De Cuba es más que una canción. Es parte de un movimiento
              cultural en crecimiento que usa la música, las historias, la
              creatividad y la tecnología para preservar la historia, inspirar a
              artistas y hacer que una nueva generación piense en el futuro de
              Cuba.
            </p>
          </div>
        </section>

        <section className="section" id="movimiento">
          <div className="wrap">
            <p className="eyebrow">Sobre Cuba B4 59</p>
            <h2 className="h2">¿Qué es Cuba B459?</h2>
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
          </div>
        </section>

        <section className="section" id="tony">
          <div className="wrap">
            <p className="eyebrow">Sobre el autor</p>
            <h2 className="h2">Tony Calatayud</h2>
            <p className="pull">Nostalgia que se puede bailar.</p>
            <p className="lede">
              Tony Calatayud nació en Miami, de ascendencia cubana, y anhela ver
              una Cuba libre de las ataduras opresivas del comunismo. Sus padres
              emigraron de Cuba en 1960, tras la Revolución Cubana. Creció
              escuchando las historias de su familia sobre la isla antes de 1959
              y su deseo de volver pronto a ella.
            </p>
            <p className="lede">
              La generación de sus padres no llegó a verlo. A través de su
              música, Tony busca inspirar a la próxima generación a continuar la
              lucha por la libertad de Cuba.
            </p>
            <p className="lede">
              Es un ejecutivo de medios con casi treinta años en la radio: ha
              lanzado veinticuatro emisoras y una compañía de capital de riesgo.
              También es compositor y creador de Cuba B459, un grupo de música
              latina con énfasis en el género de Liberación Cubana — el grupo
              detrás de <i>El Tiempo Ha Llegado</i>, <i>El Sol De Cuba</i> y{' '}
              <i>Cuba Baila, Cuba Canta</i>.
            </p>
            <p className="lede">
              B459 se lee <i>Before 59</i> — la Cuba de antes de 1959.
            </p>
          </div>
        </section>

        <section className="section" id="equipo">
          <div className="wrap">
            <p className="eyebrow">Sobre el equipo</p>
            <h2 className="h2">El equipo</h2>
            <div className="grid-3">
              <div className="card">
                <h3>Ferron Hartshorn</h3>
                <p className="card__role">Productor Digital</p>
                <p>
                  Responsable de la producción digital, la tecnología creativa y
                  el desarrollo de los medios digitales del proyecto.
                </p>
              </div>
              <div className="card card--teal">
                <h3>Pedro Hernández</h3>
                <p className="card__role">Productor de Redes Sociales</p>
                <p>
                  Pedro Hernández es productor musical, compositor, productor de
                  radio y televisión, y empresario, con experiencia trabajando
                  junto a grandes artistas. Como ejecutivo creativo y
                  publicitario, une música, medios, mercadeo y entretenimiento
                  para desarrollar proyectos de impacto en múltiples plataformas.
                </p>
              </div>
              <div className="card card--red">
                <h3>Julio Rodríguez</h3>
                <p className="card__role">Productor Ejecutivo</p>
                <p>
                  Responsable de la gestión del proyecto, la coordinación de
                  producción y la unión de la visión creativa del proyecto.
                </p>
              </div>
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
              <a className="card card--link" href="#cancion">
                <h3>El Sol De Cuba</h3>
                <p className="card__role">Disponible ahora</p>
                <p>La canción que enciende el movimiento.</p>
              </a>
              <div className="card card--teal">
                <h3>El Tiempo Ha Llegado</h3>
                <p className="card__role">Próximamente</p>
                <p>Nueva música en camino.</p>
              </div>
              <div className="card card--red">
                <h3>Cuba Baila, Cuba Canta</h3>
                <p className="card__role">Próximamente</p>
                <p>La isla baila y canta.</p>
              </div>
            </div>
            <hr className="rule" />
          </div>
        </section>

        <ScrollJourney chapters={chapters} />

        <section className="section" id="lugar">
          <div className="wrap">
            <p className="eyebrow">El lugar</p>
            <p className="neon">Cuba <span>es</span> Alegría</p>
            <h2 className="h2">No es una pieza de museo</h2>
            <p className="lede">
              Color en cada pared. Música saliendo por las puertas. Una calle que
              nunca termina de callarse. Esto es una fiesta con memoria larga, y
              así mismo la escribió Tony.
            </p>
          </div>
        </section>

        <section className="chorus">
          <p>Yo quiero el sol de Cuba</p>
          <p>brillando pa' mi gente</p>
          <p>Yo quiero libertad</p>
          <p>de oriente a occidente</p>
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
              {available.map((item) => (
                <span key={item.label} className="chip chip--pending">{item.label}</span>
              ))}
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
