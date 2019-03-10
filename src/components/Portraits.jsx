import React from 'react';
import styled from 'styled-components';

import avatarC from "../assets/images/avatar_carles.png";
import avatarX from "../assets/images/avatar_xavi.png";

const Pics = styled.ul`
  flex-direction: row;
  background-color: transparent;
  width: 100%;
  justify-content: space-evenly;

  @media only screen and (max-width: 800px) {
  }

  @media only screen and (max-width: 600px) {
  }
`;

const PicLeft = styled.li`
  padding-top: 5%;
`;

const PicRight = styled.li`
  padding-top: 5%;
`;
const PicFootText = styled.p`
  font-family: Montserrat;
  font-size: 1.4em;
  color: white;
  text-align: center;
`;

const Portraits = () =>{
    return (
      <Pics>
        <PicLeft>
          <img
            src={avatarC}
            alt="Portrait of Carles del Río Francés"
            height="350px"
          />
          <PicFootText>Carles</PicFootText>
        </PicLeft>
        <PicRight>
          <img
            src={avatarX}
            alt="Portrait of Xavi Vilà Albiol"
            height="350px"
          />
          <PicFootText>Xavi</PicFootText>
        </PicRight>
      </Pics>
    );
}


export default Portraits;