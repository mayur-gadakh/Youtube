import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme ,lightTheme} from "./utils/Themes";



const Container =styled.div`
display:flex;

`;

const Main=styled.div`
flex:7

`;

const Wrapper =styled.div`

`;

function App() {
  return ( 
    <ThemeProvider theme={lightTheme}>
   <Container>
    <Menu></Menu>
    <Main>
      <Navbar></Navbar>
      <Wrapper>Video cards</Wrapper>
    </Main>
   </Container>
   </ThemeProvider>
  );
}

export default App;
