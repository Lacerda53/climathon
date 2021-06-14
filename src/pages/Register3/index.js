import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";

export function Register3() {
  return (
    <Container>
      <div>
        <h2>Complemento de informações</h2>
        <form>
          <label>
            QUANTIDADE DE FUNCIONÁRIOS
            <br />
            <input type="text" name="name" placeholder="50 - 100" />
          </label>

          <label>
            POSSUI OUTRAS CERTIFICAÇÕES
            <br />
            <input type="text" name="cidade" placeholder="Não" />
          </label>

          <label>
            ÁREA PLANTADA PARA CANA E SEMENTE (UNIDADE DE CERTIFICAÇÃO)
            <br />
            <input type="text" name="estado" placeholder="5000" />
          </label>
          <label>
            ÁREA TOTAL DE SUPRIMENTO PARA O MOINHO
            <br />
            <input type="text" name="estado" placeholder="5000" />
          </label>
          <label>
            CANA-DE-AÇÚCAR PROCESSADA
            <br />
            <input type="text" name="estado" placeholder="5000" />
          </label>
          <label>
            PRODUÇÃO DE AÇÚCAR
            <br />
            <input type="text" name="estado" placeholder="5000" />
          </label>
          <label>
            PRODUÇÃO DE ETANOL
            <br />
            <input type="text" name="estado" placeholder="5000" />
          </label>
        </form>
        <div>
          <Link to="/dashboard">Próximo</Link>
        </div>
      </div>

      <p>
        Passo <b>3</b> de 3
      </p>
    </Container>
  );
}
