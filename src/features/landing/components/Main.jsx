import React from 'react'

// Respeta el "base" de vite.config.js (/ReactT1/ en GitHub Pages, / en local)
const BASE = import.meta.env.BASE_URL

export const Main = () => {
  // Datos para generar las secciones dinámicamente
  const columns = [
    {
      img: `${BASE}PC1.jpg`,
      text: 'Una excelente opción para comenzar en el mundo del gaming. Ideal para juegos populares, tareas diarias y estudiantes que buscan buen rendimiento a un precio accesible.',
    },
    {
      img: `${BASE}PC2.jpg`,
      text: 'Disfruta tus videojuegos favoritos con gráficos detallados, alta fluidez y potencia para realizar varias tareas al mismo tiempo.',
    },
    {
      img: `${BASE}PC3.jpg`,
      text: 'Configura tu equipo con los componentes que prefieras, desde el procesador y la tarjeta gráfica hasta la memoria RAM y el almacenamiento.',
    },
  ]

  const featurettes = [
    {
      title: 'Potencia extrema para tus videojuegos.',
      text: 'Las PC gamer de alto rendimiento combinan procesadores potentes, tarjetas gráficas dedicadas y sistemas de refrigeración eficientes. Son ideales para disfrutar juegos modernos, transmitir partidas y crear contenido digital.',
      img: `${BASE}PCC1.webp`,
    },
    {
      title: 'Componentes que marcan la diferencia',
      text: 'Cada componente cumple una función importante. El procesador gestiona las operaciones, la tarjeta gráfica genera los escenarios del juego, la memoria RAM facilita la multitarea y el SSD permite cargar programas y videojuegos rápidamente.',
      img: `${BASE}PCC2.webp`,
      reverse: true,
    },
    {
      title: 'Arma tu setup gamer ideal',
      text: 'Crea un espacio de juego adaptado a tus necesidades. Combina tu PC gamer con un monitor de alta frecuencia de actualización, teclado mecánico, ratón preciso y audífonos para conseguir una experiencia más completa.',
      img: `${BASE}PCC3.webp`,
    },
  ]

  return (
    <main>
      {/* Marketing messaging and featurettes */}
      <div className="container marketing">

        {/* Three columns of text */}
        <div className="row">
          {columns.map((item, index) => (
            <div key={index} className="lg:col-4">
              <img
                src={item.img}
                alt={`PC ${index + 1}`}
                className="rounded-circle"
                width="140"
                height="140"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'auto'}
                style={{ objectFit: 'cover' }}
              />
              <h2 className="fw-normal"></h2>
              <p>{item.text}</p>
              <p>
                <a className="btn-solid theme-secondary" href="#">Ver mas »</a>
              </p>
            </div>
          ))}
        </div>

        {/* Featurettes */}
        {featurettes.map((item, index) => (
          <React.Fragment key={index}>
            <hr className="featurette-divider" />
            <div className="row featurette">
              <div className={`md:col-7 ${item.reverse ? 'md:order-2' : ''}`}>
                <h2 className="featurette-heading fw-normal lh-1">
                  {item.title}
                </h2>
                <p className="fs-lg fw-light">{item.text}</p>
              </div>
              <div className={`md:col-5 ${item.reverse ? 'md:order-1' : ''}`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="featurette-image img-fluid mx-auto"
                  width="500"
                  height="500"
                  loading="lazy"
                  decoding="async"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </React.Fragment>
        ))}

        <hr className="featurette-divider" />
      </div>
    </main>
  )
}