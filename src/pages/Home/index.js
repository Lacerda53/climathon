import React from "react";
import { Container, Main, CardRow, Section, Row, Card, CardTree } from "./styles";
import farm from "../../assets/farm.svg";
import { CardHome } from "../../components/CardHome";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import certificate from "../../assets/certificate.png";

export function Home() {
  return (
    <Container>
      <Main>
        <div>
          <h1>
            Tire as <span>certificações sustentáveis</span> mais importantes
            para sua indústria
          </h1>
          <p>
            O NOME visa te ajudar na fase de planejamento e treinamento de
            colaboradores para tirar as certificações Bonsucro, Etanol Verde e
            futuramente a ISO 14001
          </p>
        </div>
        <div>
          <img src={farm} alt="" />
        </div>
      </Main>
      <CardRow>
        <CardHome
          icon={icon1}
          title="Direcionamentos aos colaboradores"
          description="Agregue valor a seus colaboradores, oferecendo uma plataforma que planeja todo o passo a passo para que se adequem aos processos."
        />
        <CardHome
          icon={icon2}
          title="Dashboard personalizado"
          description="Dashboard intuitivo e explicativo sobre os processos e passos a serem seguidos."
        />
        <CardHome
          icon={icon3}
          title="Planejamento estratégico"
          description="Obtenha um planejamento estratégico específico para sua área de atuação."
        />
      </CardRow>
      <Section>
        <h1>Como funciona</h1>
        <Row>
          <div>
            <p>
              Cadastre sua indústria na plataforma e tenha acesso a um dashboard
              personalizado que contém explicações práticas dos passos
              necessários para tirar a certificação sustentável escolhida.
            </p>
            <p>
              Contamos com um time especializado, pronto para te atender de
              acordo com suas necessidades específicas.
            </p>
            <button>Acessar</button>
          </div>
          <img src={certificate} alt="" />
        </Row>
      </Section>
      <CardTree>
        <Card>
          <div>
            <h1>R$25</h1>
            <span>/mês</span>
          </div>
          <h3>Básico</h3>
          <p>Para pequenos produtores que utilizam monocultura</p>
          <ul>
            <li>Progresso de Colheita</li>
            <li>Atualizações da plantação</li>
            <li>Controle de desperdício </li>
          </ul>
          <button>Quero esse</button>
        </Card>
        <Card>
          <div>
            <h1>R$25</h1>
            <span>/mês</span>
          </div>
          <h3>Básico</h3>
          <p>Para pequenos produtores que utilizam monocultura</p>
          <ul>
            <li>Progresso de Colheita</li>
            <li>Atualizações da plantação</li>
            <li>Controle de desperdício </li>
          </ul>
          <button>Quero esse</button>
        </Card>
        <Card>
          <div>
            <h1>R$25</h1>
            <span>/mês</span>
          </div>
          <h3>Básico</h3>
          <p>Para pequenos produtores que utilizam monocultura</p>
          <ul>
            <li>Progresso de Colheita</li>
            <li>Atualizações da plantação</li>
            <li>Controle de desperdício </li>
          </ul>
          <button>Quero esse</button>
        </Card>
      </CardTree>
    </Container>
  );
}
