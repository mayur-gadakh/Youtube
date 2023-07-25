import React from 'react'

import styled from 'styled-components';
import ylogo from  '../img/youlogo.png';
import { faHouse } from '@fortawesome/free-solid-svg-icons'







const Container=styled.div`
flex:1;
background-color:black;
height :100vh;
color:white;

`;

const Wrapper=styled.div`
padding:18px 26px;

`;

const Logo=styled.div`
display:flex;
align-items:center;
gap:5px;
font-weight:bold;
margin-bottom:50px;
`;

const Img=styled.img`
    height:25px;
`

const Items=styled.div`
  display:flex;
  align-items:center;
  gap:5px;
  cursor:pointer;
  margin-bottom:30px;

`

const Menu = () => {
  return (
    <Container>
      <Wrapper>
      <Logo>
     <Img src={ylogo}/>
      YouTube 
      </Logo>
      <Items > 
        Home
      </Items>
      <Items>Subscription</Items>
      <Items>History</Items>
      <Items>Shorts</Items>
      </Wrapper>
    </Container>
  )
}

export default Menu