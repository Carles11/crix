import React from 'react';
import styled from 'styled-components';

import avatarC from "../assets/images/avatar_carles.png";
import avatarX from "../assets/images/avatar_xavi.png";

const Pics = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rebeccapurple;
  width: 100%;
  font-family: Montserrat;
  color: white;
  font-size: 1.4em;
  height: 500px;


  @media only screen and (max-width: 800px) {
  
  }

  @media only screen and (max-width: 600px) {
   
  }
`;

const PicLeft = styled.div`
  align-items: center;
  justify-content: center;
`;

const PicRight = styled.div`
  align-items: center;
  justify-content: center;
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