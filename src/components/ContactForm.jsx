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
    }
  }
  handleChange = (e) => {
    e.preventDefault()

    const { name, value } = e.target
    console.log('handleChanging-NAME', name)
    console.log('handleChanging-VALUE', value)
    this.setState({ [name]: value })
  }

  formSubmit(e) {
    e.preventDefault()
    this.setState({
      buttonText: this.props.DIC.BTN_SENDING,
    })
    const { name, subject, email, message } = this.state

    const data = { name, subject, email, message }
    console.log('formSubmit...----> ', data)
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
    console.log('handleSubmit...----> ')

    this.formSubmit(e)
    this.resetForm()
  }
  render() {
    const { name, subject, email, message, buttonText } = this.state
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
