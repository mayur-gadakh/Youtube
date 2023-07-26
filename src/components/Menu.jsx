import React from 'react'

import styled  from 'styled-components';
import ylogo from  '../img/youlogo.png';








const Container=styled.div`
flex:1;
background-color:${({theme}) =>theme.bg};
height :100vh;
color:${({theme}) =>theme.text};
position:sticky;
top:0;

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
  margin-bottom:10px;

`

const Hr=styled.div`
  margin:10px 0px;
  border:0.5px solid ${({theme})=>theme.soft};
`

const Login=styled.div`
`
const Button=styled.div`
  padding:5px 15px;
  background-color:transparent;
  border:1px solid #87cefa;
  color:#87cefa;
  border-radius:3px;
  font-weight:500;
  margin-top:10px;
  cursor:pointer;
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
      <Items>Library</Items>
      <Hr></Hr>
      <Login>
        <Button>SIGN IN</Button>
      </Login>
      <Hr></Hr>
      <Items>Gaming</Items>
      <Items>Sports</Items>
      <Items>Movies</Items>
      <Items>News</Items>
      <Items>Live </Items>
      <Hr></Hr>
      <Items>Setting</Items>
      <Items>Report</Items>
      <Items>Help</Items>
      <Items>Light Mode</Items>
      </Wrapper>
    </Container>
   
  )
}

export default Menu