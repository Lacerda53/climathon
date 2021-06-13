import React from 'react'
import { Container } from './styles'

export function CardHome({icon, title, description}) {
    return (
        <Container>
            <img src={icon} alt="" />
            <h2>{title}</h2>
            <p>{description}</p>
        </Container>
    )
}
