import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding-top: 40px;
`;
const Button = styled.div`
    padding-bottom: 40px;
    padding-top: 40px;
    @media screen and (max-width: 600px) {
    padding-bottom: 25px;
    padding-top: 25px;
    }
`; 
const ButtonSubmit = styled.button`
  background: #0a6284;
  border-radius: 8px;
  color: white;
  height: 60px;
  width: 100px;
  font-size: 16px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    height: 40px;
    width: 90px;
    margin: auto;
  }
`;
const Label = styled.label`
  color: #696969;
  align-text: left;
  font-size: 20px;
  mix-blend-mode: difference;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email : '',
      subject : '',
      message : '',
      sent: false,
      buttonText: 'Send message'
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubjectChange = this.handleSubjectChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.formSubmit = this.formSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  handleNameChange (event) {
    this.setState({name: event.target.value})
  };
  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  };
  handleSubjectChange(event) {
    this.setState({ subject: event.target.value })
  };
  handleMessageChange(event) {
    this.setState({ message: event.target.value })
  };
  
  formSubmit (e) {
    e.preventDefault()
    this.setState({
      buttonText: '...sending'
    })
    let data = {
      name: this.state.name,
      subject: this.state.subject,
      email: this.state.email,
      message: this.state.message
    }
    axios.post('http://localhost:4444/crix-mail-api/index.js', data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm())
      })
      .catch(() => {
        console.log('Message not sent, bitch')
      })
  }
    resetForm () {
      this.setState({
        name: '',
        message: '',
        email: '',
        subject: '',
        buttonText: 'Message Sent'
      })
    };
    onClick(e) {
      this.formSubmit(e);
      this.resetForm();
    }
    render(){
        return (
          <Form onSubmit={(e) => this.formSubmit(e)}>
          <Label>Name</Label>
            <input 
              name="name"
              type="text" 
              value={this.state.name}
              onChange={this.handleNameChange} />
            <Label>E-mail</Label>
            <input 
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange} />
            <Label>Subject</Label>
            <input
              name="subject"
              type="text"
              value={this.state.subject}
              onChange={this.handleSubjectChange} />
            <Label>Your message</Label>
            <textarea 
              name="message"
              type="text"
              value={this.state.message}
              onChange={this.handleMessageChange} />
            <Button>
                <ButtonSubmit 
                  type="submit"
                  onClick={this.onClick}>{ this.state.buttonText }</ButtonSubmit>
            </Button>

        </Form>
        ); 
    }
}

export default ContactForm;