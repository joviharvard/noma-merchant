import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Logo } from './styles'
import RoutesRow from './components/RoutesRow'

const LoginHeader = () => (
  <Container>
    <Link
      style={{
        width: 90,
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 140
      }}
      to="/"
    >
      <Logo />
    </Link>
    <RoutesRow />
  </Container>
)

export default LoginHeader
