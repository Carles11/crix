import React from 'react'
// import PropTypes from 'prop-types';

import Divider from '../components/Divider'
import '../css/whatandwithwho.css'

const Whatandwithwho = () => {
  return (
    <main>
      <div className="what-content">
        <section className="what-content_section">
          <h1>Qué hago</h1>
          <div className="what-content_article">
            <h3 className="what-subtitle">Web</h3>
            <p>
              Desarrollo páginas web y software en Javascript al 100%. Eso me
              permite darle total flexibilidad a tu imaginación. O casi. Pero si
              lo has visto, se puede hacer.
              <br />
              Con WordPress desarrollo páginas más sencillas y de menor costo.
            </p>
            <p>Manejo gestores de portales y softwares de Instituciones.</p>

            <h3 className="what-subtitle">Diseño gráfico</h3>
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

      <section className="what-content_bottom">
        <div className="what-content_section">
          <h1 className="subtitle-bottom">Con quién</h1>
          <div className="what-content_article">
            <h3 className="what-subtitle subtitle-bottom">
              Instituciones culturales y escuelas
            </h3>
            <ul>
              <li>Instituto Cervantes</li>
              <li>Hessenwaldschule</li>
              <li>Kultusministerium Hessen</li>
            </ul>

            <h3 className="what-subtitle subtitle-bottom">Empresas</h3>
            <ul>
              <li>Instituto Cervantes</li>
              <li>Hessenwaldschule</li>
              <li>Kultusministerium Hessen</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

// Services.propTypes = {
//   DIC: PropTypes.shape({
//     SERVICES_TITLE: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Whatandwithwho
