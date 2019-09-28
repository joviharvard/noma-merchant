import React from 'react'
import { MainContainer, Container } from './styles'
import SiteMap from './components/SiteMap'
import SocialMediaBlock from './components/SocialMediaBlock'
import DownloadBlock from './components/DownloadBlock'

const Footer = () => (
  <MainContainer>
    <Container>
      <SiteMap />
      <DownloadBlock />
      <SocialMediaBlock />
    </Container>
  </MainContainer>
)

export default Footer
