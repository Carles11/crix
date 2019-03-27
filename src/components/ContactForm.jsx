import React from 'react';
import styled from 'styled-components';
import { timingSafeEqual } from 'crypto';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    padding-top: 40px;
`;
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 40px;
    padding-top: 40px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: center;

    }
`; 
const ButtonReset = styled.button`
  background-color: white;
  border-radius: 8px;
  color: #696969;
  height: 60px;
  width: 100px;
  margin-right: 1em;
  font-size: 20px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    height: 40px;
    width: 90px;
    margin: auto;
  }
  @media screen and (min-width: 801px) {
  font-size: 18px;
  }
`;
const ButtonSubmit = styled.button`
  background: #0a6284;
  border-radius: 8px;
  color: white;
  height: 60px;
  width: 100px;
  margin-left: 1em;
  font-size: 16px;
  @media screen and (max-width: 600px) {
    font-size: 14px;
    height: 40px;
    width: 90px;
    margin: auto;
  }
  @media screen and (min-width: 801px) {
  font-size: 18px;
  }
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email : '',
      subject : '',
      message : '',
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubjectChange = this.handleSubjectChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)

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
  handleResetClick(e){
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  };
    render(){
        return (
        <Form>
            <input 
              name="name"
              type="text" 
              value={this.state.name}
              onChange={this.handleNameChange} />
            {this.state.name}
            <input 
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleEmailChange} />
            {this.state.email}
            <input
              name="subject"
              type="text"
              value={this.state.subject}
              onChange={this.handleSubjectChange} />
            {this.state.subject}
            <textarea 
              name="message"
              type="text"
              value={this.state.message}
              onChange={this.handleMessageChange} />
            {this.state.message}
            <Buttons>
                <ButtonReset 
                  type="reset" 
                  value="Clear"
                  onClick={this.handleResetClick}>Clear</ButtonReset>
                <ButtonSubmit type="submit" value="Submit">Send</ButtonSubmit>
            </Buttons>

        </Form>
        ); 
    }
}

export default ContactForm;