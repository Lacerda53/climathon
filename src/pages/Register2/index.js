import React from 'react'
import { Container } from './style'
import Cert1 from '../../assets/cert1.png'
import Cert2 from '../../assets/cert2.png'
import Cert3 from '../../assets/cert3.png'
import { Link } from 'react-router-dom'

export function Register2() {
    return (
        <Container>
            <div>
                <h2>Qual certificação você busca tirar?</h2>

                <div id="content-img">
                    <div className="Img">
                        <img src={Cert1} alt="" />
                        <p>Bonsucro</p>
                    </div>
                    <div className="Img">
                        <img src={Cert2} alt="" />
                        <p>Etanol Verde</p>
                        <spam>Em breve</spam>
                    </div>
                    <div className="Img">
                        <img src={Cert3} alt="" />
                        <p>ISO 14001</p>
                        <spam>Em breve</spam>
                    </div>

                </div>
                <div>
                    <Link to="/register3">Próximo</Link>
                </div>
            </div>

            <p>Passo <b>2</b> de 3</p>
        </Container>
    )
}
