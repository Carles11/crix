import React from 'react';
import styled from 'styled-components';

import avatarC from "../assets/images/avatar_carles.png";
import avatarX from "../assets/images/avatar_xavi.png";

const Pics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rebeccapurple;
  width: 100%;
  height: 100%;
  float: right;
  font-family: Montserrat;
  color: white;
  font-size: 1.4em;


  @media only screen and (max-width: 800px) {
  grid-template-columns: 1fr;
  margin-top: 5%;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-top: 5%;
  }
`;

const PicLeft = styled.div`
  justify-self: end;
`;

const PicRight = styled.div`
  justify-self: start;
`;

const Portraits = () =>{
    return (
      <Pics>
        <PicLeft>
          <img
            src={avatarC}
            alt="Portrait of Carles del Río Francés"
          />
        </PicLeft>
        <PicRight>
          <img
            src={avatarX}
            alt="Portrait of Xavi Vilà Albiol"
          />
        </PicRight>
      </Pics>
    );
}


export default Portraits;