import React from 'react';
import styled from 'styled-components';

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
const Input = styled.input`
  display: block;
  width: 20%;
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 3px;
  border: 1px solid #888;
  font-size: 16px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
    width: 50%;
  }
`;
const TextArea = styled.textarea`
    display: block;
  width: 20%;
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 3px;
  border: 1px solid #888;
  font-size: 16px;

  @media screen and (max-width: 600px) {
          font-size: 14px;
          width: 50%;
  }
`;
class ContactForm extends React.Component {
    render(){
        return (
        <Form for="inp" class="inp">
            <input type="text" value="Name" />
            <input type="text" value="E-mail" />
            <input type="text" value="Subject" />
            <textarea type="text" value="Your message" />
            <Buttons>
                <ButtonReset type="reset" value="Clear">Clear</ButtonReset>
                <ButtonSubmit type="submit" value="Submit">Send</ButtonSubmit>
            </Buttons>

        </Form>
        ); 
    }
}

export default ContactForm;