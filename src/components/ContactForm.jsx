import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`;
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 40px;
    padding-top: 40px;
`; 
const ButtonReset = styled.button`
  background-color: white;
  border-radius: 8px;
  color: #696969;
  height: 60px;
  width: 100px;
  margin-right: 1em;
  font-size: 20px;

`;
const ButtonSubmit = styled.button`
  background: #0a6284;
  border-radius: 8px;
  color: white;
  height: 60px;
  width: 100px;
  margin-left: 1em;
  font-size: 16px;

`;
const Input = styled.input`
  border-bottom: 1px solid silber;
  width: 40%;
  height: 2em;
  background-color: transparent;
  font-size: 1em;
  color: white;
    mix-blend-mode: difference;

  @media screen and (max-width: 600px) {
  }
  @media screen and (min-width: 601px) {

  @media screen and (min-width: 801px) {
`;
const TextArea = styled.textarea`
    border: 1px solid silber;
    background-color: transparent;
    font-size: 1em;
    width: 40%;
    height: 141px;;
    color: white;
    mix-blend-mode: difference;

  @media screen and (max-width: 600px) {
  }
  @media screen and (min-width: 601px) {

  @media screen and (min-width: 801px) {
`;
class ContactForm extends React.Component {
    render(){
        return (
        <Form>
            <Input type="text" value="Name" />
            <Input type="email" value="E-mail" />
            <Input type="text" value="Subject" />
            <TextArea type="text" value="Your message" />
            <Buttons>
                <ButtonReset type="reset" value="Clear">Clear</ButtonReset>
                <ButtonSubmit type="submit" value="Submit">Send</ButtonSubmit>
            </Buttons>

        </Form>
        ); 
    }
}

export default ContactForm;