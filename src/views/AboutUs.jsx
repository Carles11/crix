import React from 'react'

import DividerFire from '../components/DividerFire'
import Portraits from '../components/Portraits'
import '../css/aboutUs.css'

const AboutUs = (props) => {
  const { DIC } = props
  return (
    <main>
      <div className="about-content">
        <section className="about-content_section">
          <h1>{DIC.ABOUT_SEC_ONE_TITLE}</h1>
          <div className="about-content_article">
            <h3 className="about-subtitle">{DIC.ABOUT_SEC_ONE_SUB_ONE}</h3>
            <p>{DIC.ABOUT_SEC_ONE_DESC_ONE}</p>

            <h3 className="about-subtitle">{DIC.ABOUT_SEC_ONE_SUB_TWO}</h3>
            <p>{DIC.ABOUT_SEC_ONE_DESC_TWO}</p>
            <p>{DIC.ABOUT_SEC_ONE_DESC_TWO_bis}</p>
          </div>
        </section>
      </div>
      <div className="about-content_fire-bottom">
        <DividerFire />
        <section className="about-content_bottom">
          <div className="about-content_section orange-bg">
            "<h1 className="subtitle-bottom">{DIC.ABOUT_SEC_TWO_TITLE}</h1>
            <div className="about-content_article">
              <h3 className="about-subtitle subtitle-bottom">
                {DIC.ABOUT_SEC_TWO_SUB_ONE}
              </h3>

              <p>{DIC.ABOUT_SEC_TWO_DESC_ONE}</p>
              <p>{DIC.ABOUT_SEC_TWO_DESC_TWO}</p>
            </div>
          </div>
          <Portraits />
        </section>{' '}
      </div>
    </main>
  )
}

export default AboutUs
