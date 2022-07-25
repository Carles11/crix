import React from 'react'

import Divider from '../components/Divider'
import ContactAdress from '../components/ContactAdress'
import ContactForm from '../components/ContactForm'
import '../css/contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <section className="contact-content_section">
          <h1 className="contact-title"> Contacta</h1>
          <div className="contact-content_article">
            <h3 className="contact-subtitle">Hablemos</h3>
            <p>
              Deja tu mensaje a través del formulario más abajo o pincha{' '}
              <a href="mailto:carles@crix.design" target="_blank">
                en este enlace{' '}
              </a>
              para enviarme un email. De cualquier forma me pondré en contacto
              contigo lo antes posible.
            </p>

            <ContactAdress />
          </div>
        </section>
        <Divider />
      </div>{' '}
      <ContactForm />
    </div>
  )
}

export default Contact
