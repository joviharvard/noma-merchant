import React from 'react'
import {
  IconContainer,
  MainContainer,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  LinkWrapper,
  Logo
} from './styles'

const SocialMediaBlock = () => (
  <MainContainer>
    <IconContainer>
      <LinkWrapper to="/facebook">
        <FacebookIcon />
      </LinkWrapper>
      <LinkWrapper to="/instagram">
        <InstagramIcon />
      </LinkWrapper>
      <LinkWrapper to="/twitter">
        <TwitterIcon />
      </LinkWrapper>
    </IconContainer>
    <Logo />
  </MainContainer>
)

export default SocialMediaBlock
