import React, { Component } from 'react'

import Button from '../components/Button'
import emailSend from '../utils/email.js'

import Swal from 'sweetalert2'

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

  componentDidMount() {
    const { DIC } = this.props
    this.setState({
      buttonText: DIC.BTN_SEND,
    })
  }

  render() {
    const { name, subject, email, message, buttonText, isError } = this.state
    const { DIC } = this.props

    const handleChange = (e) => {
      const regExp =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      const { name, value } = e.target
      const isError = { ...this.state.isError }
      switch (name) {
        case 'name':
          isError.name = !value || value.length < 6 ? DIC.ERROR_TEXT : ''
          break
        case 'email':
          isError.email = !value || regExp.test(value) ? '' : DIC.ERROR_EMAIL
          break
        default:
          break
      }
      this.setState({
        isError,
        [name]: value,
      })
    }

    const formSubmit = (e) => {
      e.preventDefault()
      const isError = { ...this.state.isError }
      const formErrors = isError.name.length > 0 || isError.email.length > 0

      if (formErrors) {
        Swal.fire({
          title: DIC.TOAST_ERROR_TITLE,
          text: DIC.TOAST_ERROR_TEXT,
          icon: 'error',
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: DIC.TOAST_ERROR_CLOSE,
        })
        return
      }

      this.setState({
        buttonText: DIC.BTN_SENDING,
      })
      const { name, subject, email, message } = this.state

      const data = { name, subject, email, message }

      emailSend(data, DIC, resetForm)

      this.setState({
        buttonText: DIC.BTN_SEND,
      })
    }

    const resetForm = () => {
      this.setState({
        name: '',
        message: '',
        email: '',
        subject: '',
        buttonText: DIC.BTN_SENT,
      })
    }

    const handleSubmit = (e) => {
      formSubmit(e)
    }

    return (
      <form
        className="contact-form contact-flex"
        onSubmit={(e) => formSubmit(e)}
      >
        <div className="contact-input-group">
          <label className="contact-label">{DIC.CONTACTFORM_NAME}</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              handleChange(e)
            }}
            className="simple-input"
          />{' '}
          {isError.name.length > 0 && (
            <div className="invalid-feedback">{isError.name}</div>
          )}
        </div>{' '}
        <div className="contact-input-group">
          <label className="contact-label">{DIC.CONTACTFORM_EMAIL}</label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
            className="simple-input"
          />{' '}
          {isError.email.length > 0 && (
            <div className="invalid-feedback">{isError.email}</div>
          )}
        </div>{' '}
        <div className="contact-input-group">
          <label className="contact-label">{DIC.CONTACTFORM_SUBJECT}</label>
          <input
            name="subject"
            type="text"
            value={subject}
            onChange={handleChange}
            className="simple-input"
          />{' '}
        </div>
        <div className="contact-input-group">
          <label className="contact-label">{DIC.CONTACTFORM_MESSAGE}</label>
          <textarea
            name="message"
            type="text"
            value={message}
            onChange={handleChange}
            className="simple-input"
          />
        </div>
        <Button
          elementType="Link"
          type="submit"
          pathLink="/"
          variant="primary"
          size="lg"
          onClick={handleSubmit}
          className="dont-underline"
        >
          {buttonText}
        </Button>
      </form>
    )
  }
}

export default ContactForm
