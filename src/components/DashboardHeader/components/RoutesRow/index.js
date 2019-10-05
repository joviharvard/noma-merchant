import React from 'react'
import { Container, HighlightedRoute } from './styles'

const routeInfo = [
  { name: 'Help', path: '/help' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'My Account', path: '/account' }
]

const Routes = routeInfo.map(route => (
  <HighlightedRoute key={route} to={route.path}>
    {route.name}
  </HighlightedRoute>
))

const RoutesRow = () => <Container>{Routes}</Container>

export default RoutesRow
