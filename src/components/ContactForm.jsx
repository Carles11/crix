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
      buttonText: 'Send message',
    }
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  formSubmit(e) {
    e.preventDefault()
    this.setState({
      buttonText: '...sending',
    })
    const { name, subject, email, message } = this.state

    const data = { name, subject, email, message }
    axios
      .post('http://localhost:4444/crix-mail-api/index.js', data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm())
      })
      .catch(() => {
        console.log('Message not sent')
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
      <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
        <label className="contact-label">Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={this.handleChange}
        />
        <label className="contact-label">E-mail</label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={this.handleChange}
        />
        <label className="contact-label">Subject</label>
        <input
          name="subject"
          type="text"
          value={subject}
          onChange={this.handleChange}
        />
        <label className="contact-label">Your message</label>
        <textarea
          name="message"
          type="text"
          value={message}
          onChange={this.handleChange}
        />
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
