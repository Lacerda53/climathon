import { BrowserRouter } from "react-router-dom";
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
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 6.5rem;
`;