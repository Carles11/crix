import React from 'react'
// import PropTypes from 'prop-types';

import QuotationForm from '../components/QuotationForm'
import '../css/whatandwithwho.css'

const Whatandwithwho = () => {
  return (
    <div className="what-content">
      <div className="what-content_section">
        <h1>Qué hago</h1>
        <div className="what-article">
          <h3 className="what-subtitle">Web</h3>
          <p>
            Desarrollo páginas web y software en Javascript al 100%. Eso me
            permite darle total flexibilidad a tu imaginación. O casi. Pero si
            lo has visto, se puede hacer.
            <ul>
              <li>Concurso de Lectura </li>
              <li>Abluelemon </li>
            </ul>
          </p>
          <p>
            Con WordPress desarrollo páginas más sencillas y de menor costo.
            <ul>
              <li>TheCirculArt</li>
              <li>Jordi Arjó, psicólogo</li>
            </ul>
          </p>
          <p>
            Manejo gestores de portales y softwares de Instituciones.
            <ul>
              <li>
                gestordeportales instituto Cervantes de Berlín, Frankfurt,
                Bremem y Nápoles.
              </li>
              <li>Software de Newsletters del Instituto Cervantes</li>
            </ul>
          </p>
          <div className="what-article"></div>
        </div>
      </div>
      <div className="what-content_section">
        <div className="what-content_article">
          <h3 className="what-subtitle">Diseño gráfico</h3>
          <p>
            Edito folletos y PDFs multipágina, pósters y ediciones de cualquier
            tipo. Tras tu aprovación, envío directamente el diseño a una
            imprenta digital y lo recibes en tu puerta.{' '}
            <a href="/hovear-con-list-de-países">Envíos a toda Europa</a>.
            <ul>
              <li>Programa cultural 2022</li>
              <li>Folleto Leo, Leo</li>
              <li>PDF AVE 2021</li>
            </ul>
          </p>
        </div>
      </div>
      <h1>Con quién</h1>
      <div className="what-content_article">
        <h3 className="what-subtitle">Instituciones culturales y escuelas</h3>
        <ul>
          <li>Instituto Cervantes</li>
          <li>Hessenwaldschule</li>
          <li>Kultusministerium Hessen</li>
        </ul>
        <p>Tr</p>
      </div>
      <QuotationForm />
    </div>
  )
}

// Services.propTypes = {
//   DIC: PropTypes.shape({
//     SERVICES_TITLE: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Whatandwithwho
