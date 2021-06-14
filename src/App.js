import Routes from "./routes/index";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import styled from "styled-components";
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    
  <BrowserRouter>
      <Header />
      <GlobalStyle />
      <Container>
        <Routes />
      </Container>
  </BrowserRouter>
  );
}

const Container = styled.div`
  padding-top: 6.5rem;
  @media (max-width: 1020px) {
    padding-top: 15.5rem;
  }
`;
