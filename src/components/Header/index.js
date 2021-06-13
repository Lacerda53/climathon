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

export function Header() {

  return (
    <Container>
      <Right>
        <Logo src={logo} />
        <ul>
          <li>Home</li>
          <li>Como funciona</li>
          <li>Planos</li>
        </ul>
      </Right>
      <Left>
        <ButtonLogin>Login</ButtonLogin>
        <ButtonConta to="/register">Criar Conta</ButtonConta>
      </Left>
    </Container>
  );
}
