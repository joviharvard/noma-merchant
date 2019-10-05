import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { NavLink } from 'react-router-dom'

const standardPadding = '6px'

export const MainContainer = styled(Flex)`
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
`

export const SubContainer = styled(Flex)`
  flex-direction: column;
`

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.font.accent};
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-size: 14px;
  font-weight: bold;
  padding: 15px ${standardPadding};
`

export const SingleLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.font.primary};
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 12px;
  text-decoration: none;
  padding: ${standardPadding};
`
