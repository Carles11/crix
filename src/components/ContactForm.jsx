import React from 'react';
import styled from 'styled-components';

const { useState } = React

// STYLED COMPONENTS ####
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

// USING REACT HOOKS #######
const ContactForm = props => {
    const [username, setUsername] = useState()
    const [useremail, setUseremail] = useState()
    const [usersubject, setUsersubject] = useState()
    const [usermessage, setUsermessage] = useState()

    const handleChangeUsername = e => {
        setUsername(e.target.value)
    }
    const handleChangeUseremail = e => {
        setUseremail(e.target.value)
    }
    const handleChangeUsersubject = e => {
        setUsersubject(e.target.value)
    }
    const handleChangeUsermessage = e => {
        setUsermessage(e.target.value)
    }

    const handleSubmit = event => {
        alert("Cleared data")
        event.preventDefault()
    }
    const handleClick = () => {
        alert("E-mail sent!")
    }

        return (
            <Form onSubmit={handleSubmit}>
                <Input 
                    type="text"
                    value={username}
                    placeholder={"Name:"}
                    onChange={handleChangeUsername} />
                <Input 
                    type="text"
                    value={useremail}
                    placeholder={"E-mail:"}
                    onChange={handleChangeUseremail} />
                <Input 
                    type="text"
                    value={usersubject}
                    placeholder={"Subject:"}
                    onChange={handleChangeUsersubject} />
                <TextArea 
                    rows={10}
                    value={usermessage}
                    handleChange={handleChangeUsermessage}
                    placeholder={"Write us a message"} />
                <Buttons>
                    <ButtonReset type="reset" value="Clear" onClick={handleSubmit}>Clear</ButtonReset>
                    <ButtonSubmit type="submit" value="Submit" onClick={handleClick}>Send</ButtonSubmit>
                </Buttons>
            </Form>
        ); 
    };

export default ContactForm;