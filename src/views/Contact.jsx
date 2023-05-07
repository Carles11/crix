import React from 'react'

import ContactAdress from '../components/ContactAdress'
import ContactForm from '../components/ContactForm'
import '../css/contact.css'

const Contact = (props) => {
  const { DIC } = props

  return (
    <div className="contact">
      <div className="contact-content">
        <section className="contact-content_section">
          <h1 className="contact-title">{DIC.CONTACT_TITLE}</h1>
          <div className="contact-content_article">
            <h3 className="contact-subtitle">{DIC.CONTACT_SUB}</h3>
            <p>
              {DIC.CONTACT_TEXT_ONE}{' '}
              <a
                href="mailto:carles@crix.design"
                target="_blank"
                className="dont-underline"
              >
                {DIC.CONTACT_TEXT_TWO}{' '}
              </a>
              {DIC.CONTACT_TEXT_THREE}
            </p>
          </div>
        </section>
      </div>{' '}
      <div className="contact-form-container">
        <ContactAdress />
        <div className="horizontal-divider">
          <hr className="brace" />
        </div>
        <div className="vertical-divider">
          <div className="center-element">CriX</div>
        </div>
        <ContactForm DIC={DIC} />
      </div>
    </div>
  )
}

export default Contact
