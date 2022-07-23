import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types';

import QuotationForm from '../components/QuotationForm'
import '../css/whatandwithwho.css'

const Subtitle = styled.h2`
  font-size: 2.2em;
  text-align: center;
  margin: auto;
  padding-top: 4%;
  padding-bottom: 2%;
`

const White_block = styled.section`
  background-color: white;
  color: #696969;
  min-height: auto;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 600px) {
    min-height: auto;
  }
  @media only screen and (max-width: 800px) {
    min-height: auto;
  }
`
const Article = styled.article`
  font-size: 1.4em;
  text-align: justify;
  margin: auto;
  padding: 20px;
  color: #696969;
  max-width: 80%;
  text-align: justify;
  letter-spacing: 3px;
  line-height: 1.8em;

  @media only screen and (max-width: 800px) {
    font-size: 1.2em;
    max-width: 75%;
    letter-spacing: 2px;
    line-height: 1.8em;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1em;
    max-width: 90%;
    letter-spacing: 1px;
    line-height: 1.6em;
  }
`

const Whatandwithwho = () => {
  return (
    <div className="what-content">
      <h1>Qué hago</h1>
      <White_block>
        <Subtitle>Web</Subtitle>
        <Article>
          Desarrollo páginas web y software en Javascript al 100%. Eso me
          permite darle total flexibilidad a tu imaginación. O casi. Pero si lo
          has visto, se puede hacer.
          <ul>
            <li>Concurso de Lectura </li>
            <li>Abluelemon </li>
          </ul>
        </Article>
        <Article>
          Con WordPress desarrollo páginas más sencillas y de menor costo.
          <ul>
            <li>TheCirculArt</li>
            <li>Jordi Arjó, psicólogo</li>
          </ul>
        </Article>
        <Article>
          Manejo gestores de portales y softwares de Instituciones.
          <ul>
            <li>
              gestordeportales instituto Cervantes de Berlín, Frankfurt, Bremem
              y Nápoles.
            </li>
            <li>Software de Newsletters del Instituto Cervantes</li>
          </ul>
        </Article>

        <Subtitle>Diseño gráfico</Subtitle>
        <Article>
          Edito folletos y PDFs multipágina, pósters y ediciones de cualquier
          tipo. Tras tu aprovación, envío directamente el diseño a una imprenta
          digital y lo recibes en tu puerta.{' '}
          <a href="/hovear-con-list-de-países">Envíos a toda Europa</a>.
          <ul>
            <li>Programa cultural 2022</li>
            <li>Folleto Leo, Leo</li>
            <li>PDF AVE 2021</li>
          </ul>
        </Article>
      </White_block>
      <h1>Con quién</h1>

      <White_block>
        <Subtitle>Instituciones culturales y escuelas</Subtitle>
        <ul>
          <li>Instituto Cervantes</li>
          <li>Hessenwaldschule</li>
          <li>Kultusministerium Hessen</li>
        </ul>
        <Article>Tr</Article>
      </White_block>
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
