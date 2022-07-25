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
            <h3 className="about-subtitle">Web</h3>
            <p>
              Desarrollo páginas web y software en Javascript al 100%. Eso me
              permite darle total flexibilidad a tu imaginación. O casi. Pero si
              lo has visto, se puede hacer.
              <br />
              Con WordPress desarrollo páginas más sencillas y de menor costo.
            </p>
            <p>Manejo gestores de portales y softwares de Instituciones.</p>

            <h3 className="about-subtitle">Diseño gráfico</h3>
            <p>
              Edito folletos y PDFs multipágina, pósters y ediciones de
              cualquier tipo. Tras tu aprovación, envío directamente el diseño a
              una imprenta digital y lo recibes en tu puerta.{' '}
              <a href="/hovear-con-list-de-países">Envíos a toda Europa</a>.
            </p>
          </div>
        </section>
      </div>
      <Divider />

      <section className="about-content_bottom">
        <div className="about-content_section">
          "<h1 className="subtitle-bottom">Quién es el equipo CriX</h1>
          <div className="about-content_article">
            <h3 className="about-subtitle subtitle-bottom">El "Colectivo"</h3>

            <p>
              El "Colectivo" es un grupo de desarrolladores que trabajan juntos
              si uno de nosotros se atasca en un tema en particular. Somos un
              grupo diverso de personas que tienen fortalezas en muchas áreas
              diferentes. Algunos de nosotros se centran más en el diseño,
              mientras que otros son muy fuertes en el trabajo con las
              tecnologías de backend.
            </p>

            <p>
              Por lo general, esto no afectará a lo que estoy construyendo para
              ti, pero asegura que tu sitio será revisado por varios
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
