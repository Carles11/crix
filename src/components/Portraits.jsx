import React from 'react';
import styled from 'styled-components';

import avatarC from "../assets/images/avatar_carles.png";
import avatarX from "../assets/images/avatar_xavi.png";

const Pics = styled.ul`
  margin: 0px;
  display: flex;
  flex-flow: row nowrap;
  background-color: transparent;
  width: 100%;
  justify-content: space-evenly;
  padding-bottom: 100px;
`;

const PicLeft = styled.li`
  order: 1;
  padding-top: 5%;
  height: 400px;
  text-align: center;
  align-self: center;

  @media only screen and (max-width: 800px) {
    height: 300px;
    padding-top: 10%;

  }
  @media only screen and (max-width: 600px) {
    height: 200px;
    margin-bottom: 23%;
  }
`;

const PicRight = styled.li`
  order: 2;
  padding-top: 5%;
  height: 400px;
  text-align: center;
  align-self: center;

  @media only screen and (max-width: 800px) {
    height: 300px;
    padding-top: 10%;
  }
  @media only screen and (max-width: 600px) {
    height: 200px;
    margin-bottom: 23%;

  }
`;
const PicFootText = styled.p`
  font-family: Montserrat;
  font-size: 1.4em;
  color: white;
  align-self: center;
`;

const Portraits = () => {
  return (
    <Pics>
      <PicLeft>
        <img
          src={avatarC}
          alt="Portrait of Carles del Río Francés"
          height="100%"
        />
        <PicFootText>Carles</PicFootText>
      </PicLeft>
      <PicRight>
        <img
          src={avatarX}
          alt="Portrait of Xavi Vilà Albiol"
          height="100%"
        />
        <PicFootText>Xavi</PicFootText>
      </PicRight>
    </Pics>
  );
}


export default Portraits;