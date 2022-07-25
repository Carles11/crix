import React, { Component } from 'react'

import Button from '../components/Button'

import axios from 'axios'
import '../css/contactForm.css'

class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      sent: false,
      buttonText: 'Envía',
    }
  }
  handleChange(e) {
    const {
      target: { name, value },
    } = e
    console.log('addintotostate...----> ', name, value)
    this.setState({ [name]: value })
  }

  formSubmit(e) {
    e.preventDefault()
    this.setState({
      buttonText: '...enviando',
    })
    const { name, subject, email, message } = this.state

    const data = { name, subject, email, message }
    axios
      .post('http://localhost:4444/crix-mail-api/index.js', data)
      .then((res) => {
        this.setState({ buttonText: 'Enviado!', sent: true }, this.resetForm())
      })
      .catch(() => {
        console.log('Mensaje no enviado.')
      })
  }
  resetForm() {
    this.setState({
      name: '',
      message: '',
      email: '',
      subject: '',
      buttonText: 'Message Sent',
    })
  }
  handleSubmit(e) {
    this.formSubmit(e)
    this.resetForm()
  }
  render() {
    const { name, subject, email, message, buttonText } = this.state

    return (
      <form
        className="contact-form contact-flex"
        onSubmit={(e) => this.formSubmit(e)}
      >
        <div className="contact-input-group">
          <label className="contact-label">Name</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
            className="simple-input"
          />{' '}
        </div>{' '}
        <div className="contact-input-group">
          <label className="contact-label">E-mail</label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={this.handleChange}
            className="simple-input"
          />{' '}
        </div>{' '}
        <div className="contact-input-group">
          <label className="contact-label">Subject</label>
          <input
            name="subject"
            type="text"
            value={subject}
            onChange={this.handleChange}
            className="simple-input"
          />{' '}
        </div>
        <div className="contact-input-group">
          <label className="contact-label">Your message</label>
          <textarea
            name="message"
            type="text"
            value={message}
            onChange={this.handleChange}
            className="simple-input"
          />
        </div>
        <Button
          elementType="Link"
          type="submit"
          pathLink="/"
          variant="primary"
          size="lg"
          onClick={this.handleSubmit}
        >
          {buttonText}
        </Button>
      </form>
    )
  }
}

export default ContactForm
