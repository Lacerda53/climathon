import React from 'react'
import { Container } from './styles'
import dashboard from '../../assets/dashboard.svg'

export function Dashboard() {
    return (
        <Container>
            <img src={dashboard} alt="" />
        </Container>
    )
}
