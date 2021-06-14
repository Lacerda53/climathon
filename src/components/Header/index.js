import React from "react";
import {
  Container,
  Right,
  Logo,
  Left,
  ButtonLogin,
  ButtonConta,
} from "./styles";
import logo from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";

export function Header() {
  const history = useHistory()
  return (
    <Container>
      <Right>
        <Logo src={logo} />
        <ul>
          <li><Link to="/#">Home</Link></li>
          <li><Link to="/#work">Como funciona</Link></li>
          <li><Link to="/#plan">Planos</Link></li>
        </ul>
      </Right>
      <Left>
        <ButtonLogin>Login</ButtonLogin>
        <ButtonConta onClick={()=> history.push('/register')}>Criar Conta</ButtonConta>
      </Left>
    </Container>
  );
}
