import React from 'react'

import Portraits from '../components/Portraits'
import Divider from '../components/Divider'
import '../css/aboutUs.css'

const AboutUs = () => {
  return (
    <main>
      <div className="about-content">
        <section className="about-content_section">
          <h1>Quién es Carles</h1>
          <div className="about-content_article">
            <h3 className="about-subtitle">Los orígenes</h3>
            <p>
              Después de algo más de once años trabajando como ingeniero de
              sonido y de eventos para el Instituto Cervantes de Frankfurt en
              Alemania, decidí emprender el camino de la programación. A finales
              del 2017 profesionalicé mis conocimientos en la Barcelona Code
              School, donde consumé los estudios como "Javascript Fullstack
              Developer".
            </p>

            <h3 className="about-subtitle">Actualmente</h3>
            <p>
              Desde entonces me he dedicado al 100% a la programación trabajando
              para clientes privados y como programador para start-ups. Durante
              mi etapa del Instituto Cervantes adquirí además conocimientos
              sobre el manejo de gestores de portales y softwares propios
              institucionales. Habiendo recibido previo acceso al software,
              ofrezco un mantenimiento 100% de los mismos.
            </p>
            <p>
              Ayudo a crear páginas web increíbles y en general cualquier tipo
              de soportets gráficos para promoción como folletos, pósters o programas.
            </p>
          </div>
        </section>
      </div>
      <Divider />

      <section className="about-content_bottom">
        <div className="about-content_section">
          "<h1 className="subtitle-bottom">Quién es el equipo CriX</h1>
          <div className="about-content_article">
            <h3 className="about-subtitle subtitle-bottom">El «Colectivo»</h3>

            <p>
              Somos un grupo diverso de personas que tienen fortalezas en muchas
              áreas diferentes. Algunos de nosotros se centran más en el diseño,
              mientras que otros son muy fuertes en el trabajo con las
              tecnologías de backend. El «Colectivo» es un grupo de
              desarrolladores que trabajan juntos, si uno de nosotros se atasca
              en un tema en particular, el otro lo desatasca.
            </p>

            <p>
              Por lo general, esto no afectará a lo que estoy construyendo para
              ti, pero sí asegura que tu sitio será revisado por varios
              desarrolladores diferentes antes de que se ponga en marcha. Esto
              nos da la oportunidad de detectar cualquier error o problema que
              pueda afectar a la experiencia del usuario antes de que sus
              usuarios tengan la oportunidad de utilizar el sitio.
            </p>
          </div>
        </div>
        <Portraits />
      </section>
    </main>
  )
}

export default AboutUs
