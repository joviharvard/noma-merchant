import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'
import googleIcon from '../../../../assets/icons/googlePlayIcon.png'
import appleIcon from '../../../../assets/icons/appStoreIcon.png'

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  align-items: flex-start;
`

export const GooglePlaystore = styled(Link)`
  display: flex;
  width: 130px;
  height: 50px;
  align-items: center;
`

export const GooglePlayIcon = styled.img.attrs({
  src: googleIcon
})`
  width: 120px;
`

export const AppStore = styled(Link)`
  display: flex;
  width: 130px;
  height: 50px;
  margin-left: 8px;
  align-items: center;
`

export const AppStoreIcon = styled.img.attrs({
  src: appleIcon
})`
  width: 105px;
  height: 40px;
`
