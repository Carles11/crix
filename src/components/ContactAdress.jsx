import React from 'react'

import '../css/contactAddress.css'

const ContactAdress = () => {
  return (
    <div className="address-content">
      <h4 className="address-highlight">
        Carles del Río Francés
        <br />
        Whatsapp:{' '}
        <a href="tel:+4901782871785" className="address">
          +49-01782871785
        </a>
        <br />
        E-Mail:{' '}
        <a href="mailto:carles@crix.design" className="address">
          carles@crix.design
        </a>
      </h4>
    </div>
  )
}

export default ContactAdress
