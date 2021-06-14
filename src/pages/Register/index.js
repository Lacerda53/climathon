import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style'

export function Register() {
    return (
        <Container>
            <div>
                <h2>Cadastro de Fábrica</h2>
                <form>
                    <label>
                        NOME DA FÁBRICA
                    <br />
                        <input type="text" name="name" placeholder="Stats.in"/>
                    </label>

                    <label>
                        CIDADE
                    <br />
                        <input type="text" name="cidade" placeholder="Sertãozinho"/>
                    </label>
                    <label>
                        ESTADO
                    <br />
                        <input type="text" name="estado" placeholder="São Paulo"/>
                    </label>
                </form>
                <div>
                    <Link to="/register2">Próximo</Link>
                </div>     
            </div>  
            
            <p>Passo <b>1</b> de 3</p>
        </Container>
    )
}
