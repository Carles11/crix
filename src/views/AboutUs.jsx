import React from 'react'

import Portraits from '../components/Portraits'
import Divider from '../components/Divider'
import '../css/aboutUs.css'

const AboutUs = (props) => {
  const { DIC } = props
  return (
    <main>
      <div className="about-content">
        <section className="about-content_section">
          <h1>{DIC.ABOUT_TITLE}</h1>
          <div className="about-content_article">
            <h3 className="about-subtitle">{DIC.ABOUT_SUB_ONE}</h3>
            <p>{DIC.ABOUT_DESC_ONE}</p>

            <h3 className="about-subtitle">{DIC.ABOUT_SUB_TWO}</h3>
            <p>{DIC.ABOUT_DESC_TWO}</p>
            <p>{DIC.ABOUT_DESC_TWO_bis}</p>
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
