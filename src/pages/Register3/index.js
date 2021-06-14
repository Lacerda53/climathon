import React from 'react'
import { Container } from './style'
import Cert1 from '../../assets/cert1.png'
import Cert2 from '../../assets/cert2.png'
import Cert3 from '../../assets/cert3.png'

export function Register3() {
    return (
        <Container>
            <div>
                <h2>Complemento de informações</h2>
                <form>
                    <label>
                        QUANTIDADE DE FUNCIONÁRIOS
                    <br />
                        <input type="text" name="name" placeholder="50 - 100"/>
                    </label>

                    <label>
                        POSSUI OUTRAS CERTIFICAÇÕES
                    <br />
                        <input type="text" name="cidade" placeholder="Não"/>
                    </label>

                    <label>
                        ÁREA PLANTADA PARA CANA E SEMENTE (UNIDADE DE CERTIFICAÇÃO)
                    <br />
                        <input type="text" name="estado" placeholder="5000"/>
                    </label>
                    <label>
                        ÁREA TOTAL DE SUPRIMENTO PARA O MOINHO
                    <br />
                        <input type="text" name="estado" placeholder="5000"/>
                    </label>
                    <label>
                        CANA-DE-AÇÚCAR PROCESSADA
                    <br />
                        <input type="text" name="estado" placeholder="5000"/>
                    </label>
                    <label>
                        PRODUÇÃO DE AÇÚCAR 
                    <br />
                        <input type="text" name="estado" placeholder="5000"/>
                    </label>
                    <label>
                        PRODUÇÃO DE ETANOL
                    <br />
                        <input type="text" name="estado" placeholder="5000"/>
                    </label>
                </form>
                <div>
                <a src="/">Próximo</a>
                </div>
            </div>

            <p>Passo <b>3</b> de 3</p>
        </Container>
    )
}
