import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import styled from 'styled-components'

export function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Container>
        <Router>
          <Routes />
        </Router>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 6.5rem;
  @media(max-width: 1020px){
    padding-top: 15.5rem;
  }
`;