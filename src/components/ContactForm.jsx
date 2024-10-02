import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
      const { name, subject, email, message } = this.state
      const formErrors =
        !name ||
        !email ||
        name === 'undefined' ||
        email === 'undefined' ||
        isError.name.length > 0 ||
        isError.email.length > 0
      console.log({ formErrors, name, email, isError })
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
      <form className="contact-form contact-flex">
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
          {buttonText || 'Go!'}
        </Button>
      </form>
    )
  }
}

ContactForm.propTypes = {
  DIC: PropTypes.shape({
    BTN_SEND: PropTypes.string.isRequired,
    ERROR_TEXT: PropTypes.string.isRequired,
    ERROR_EMAIL: PropTypes.string.isRequired,
    TOAST_ERROR_TITLE: PropTypes.string.isRequired,
    TOAST_ERROR_TEXT: PropTypes.string.isRequired,
    TOAST_ERROR_CLOSE: PropTypes.string.isRequired,
    BTN_SENDING: PropTypes.string.isRequired,
    BTN_SENT: PropTypes.string.isRequired,
    CONTACTFORM_NAME: PropTypes.string.isRequired,
    CONTACTFORM_EMAIL: PropTypes.string.isRequired,
    CONTACTFORM_SUBJECT: PropTypes.string.isRequired,
    CONTACTFORM_MESSAGE: PropTypes.string.isRequired,
  }).isRequired,
}

export default ContactForm
