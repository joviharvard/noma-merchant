import React from 'react'
import { Container, HighlightedRoute } from './styles'

const routeInfo = [
  { name: 'Sign Up', path: '/register' },
  { name: 'Log In', path: '/login' }
]

const Routes = routeInfo.map(route => (
  <HighlightedRoute key={route} to={route.path}>
    {route.name}
  </HighlightedRoute>
))

const RoutesRow = () => <Container>{Routes}</Container>

export default RoutesRow
