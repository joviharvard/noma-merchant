import React from 'react'
import { SubContainer, MainContainer, Header, SingleLink } from './styles'

const links = [
  {
    header: 'Learn More',
    routes: [
      { name: 'How It Works', path: '/info' },
      { name: 'Security', path: '/security' },
      { name: 'Contact Us', path: '/contact' }
    ]
  },
  {
    header: 'Company',
    routes: [
      {
        name: 'About Us',
        path: '/about'
      }
    ]
  },
  {
    header: 'Terms',
    routes: [
      {
        name: 'Legal',
        path: '/legal'
      },
      {
        name: 'Privacy',
        path: '/privacy'
      }
    ]
  }
]

const AllLinks = () =>
  links.map(({ header, routes }) => (
    <SubContainer>
      <Header> {header} </Header>
      {routes.map(route => (
        <SingleLink key={route} to={route.path}>
          {route.name}
        </SingleLink>
      ))}
    </SubContainer>
  ))

const SiteMap = () => (
  <MainContainer>
    <AllLinks />
  </MainContainer>
)

export default SiteMap
