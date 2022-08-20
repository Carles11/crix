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
    console.log('handleChanging', e.target)
    const {
      target: { name, value },
    } = e
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
    const { DIC } = this.props

    return (
      <form
        className="contact-form contact-flex"
        onSubmit={(e) => this.formSubmit(e)}
      >
        <div className="contact-input-group">
          <label className="contact-label">Nombre</label>
          <input
            name={DIC.CONTACTFORM_NAME}
            type="text"
            value={name}
            onChange={this.handleChange}
            className="simple-input"
          />{' '}
        </div>{' '}
        <div className="contact-input-group">
          <label className="contact-label">E-mail</label>
          <input
            name={DIC.CONTACTFORM_EMAIL}
            type="text"
            value={email}
            onChange={this.handleChange}
            className="simple-input"
          />{' '}
        </div>{' '}
        <div className="contact-input-group">
          <label className="contact-label">Tema</label>
          <input
            name={DIC.CONTACTFORM_SUBJECT}
            type="text"
            value={subject}
            onChange={this.handleChange}
            className="simple-input"
          />{' '}
        </div>
        <div className="contact-input-group">
          <label className="contact-label">Tu mensaje</label>
          <textarea
            name={DIC.CONTACTFORM_MESSAGE}
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
