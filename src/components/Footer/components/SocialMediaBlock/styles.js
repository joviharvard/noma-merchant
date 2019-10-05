import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'
import facebookIcon from '../../../../assets/icons/facebookIcon.png'
import instagramIcon from '../../../../assets/icons/instagramIcon.png'
import twitterIcon from '../../../../assets/icons/twitterIcon.png'
import logo from '../../../../assets/icons/noma.png'

export const MainContainer = styled(Flex)`
  flex-direction: column;
  width: 30%;
  height: 30%
  justify-content: space-between;
  align-items: center;
`

export const IconContainer = styled(Flex)`
  flex-direction: row;
  width: 40%;
  justify-content: space-around;
  align-items: center;
  margin-left: 80px;
`

export const LinkWrapper = styled(Link)`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FacebookIcon = styled.img.attrs({
  src: facebookIcon
})`
  height: 35px;
`

export const InstagramIcon = styled.img.attrs({
  src: instagramIcon
})`
  height: 35px;
`

export const TwitterIcon = styled.img.attrs({
  src: twitterIcon
})`
  height: 35px;
`

export const Logo = styled.img.attrs({
  src: logo
})`
  width: 45px;
  align-self: center;
  margin-left: 160px;
`
