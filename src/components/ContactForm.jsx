import React, { Component } from 'react'

import Button from '../components/Button'
import emailSend from '../views/utils/email.js'
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
      buttonText: props.DIC.BTN_SEND,
      isError: {
        name: '',
        email: '',
      },
    }
  }
  handleChange = (e) => {
    e.preventDefault()
    const regExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const { name, value } = e.target
    const isError = { ...this.state.isError }
    switch (name) {
      case 'name':
        isError.name = value.length < 4 ? 'Escribe al menos 4 caracteres.' : ''
        break
      case 'email':
        isError.email = regExp.test(value)
          ? ''
          : 'El formato del email no parece válido.'
        break
      default:
        break
    }
    this.setState({
      isError,
      [name]: value,
    })
  }

  formSubmit(e) {
    e.preventDefault()
    this.setState({
      buttonText: this.props.DIC.BTN_SENDING,
    })
    const { name, subject, email, message } = this.state

    const data = { name, subject, email, message }

    emailSend(data)
  }

  resetForm() {
    this.setState({
      name: '',
      message: '',
      email: '',
      subject: '',
      buttonText: this.props.DIC.BTN_SENT,
    })
  }
  handleSubmit = (e) => {
    this.formSubmit(e)
    this.resetForm()
  }
  render() {
    const { name, subject, email, message, buttonText, isError } = this.state
    // const { DIC } = this.props

    return (
      <form
        className="contact-form contact-flex"
        onSubmit={(e) => this.formSubmit(e)}
      >
        <div className="contact-input-group">
          <label className="contact-label">Nombre</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              this.handleChange(e)
            }}
            className="simple-input"
          />{' '}
          {isError.name.length > 0 && (
            <div className="invalid-feedback">{isError.name}</div>
          )}
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
          {isError.email.length > 0 && (
            <div className="invalid-feedback">{isError.email}</div>
          )}
        </div>{' '}
        <div className="contact-input-group">
          <label className="contact-label">Tema</label>
          <input
            name="subject"
            type="text"
            value={subject}
            onChange={this.handleChange}
            className="simple-input"
          />{' '}
        </div>
        <div className="contact-input-group">
          <label className="contact-label">Tu mensaje</label>
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
