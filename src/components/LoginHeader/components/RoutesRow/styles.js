import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import { NavLink } from 'react-router-dom'

const standardMargin = '25px'

export const Container = styled(Flex)`
  flex-direction: row;
  align-items: center;
  margin-right: 120px;
`

export const HighlightedRoute = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 14px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.font.primary};
  margin-right: ${standardMargin};
  margin-left: ${standardMargin};
  &:hover {
    color: ${({ theme }) => theme.colors.font.primary};
    font-weight: 700;
  }
  &.active {
    border-bottom: ${({ theme, to }) =>
      to === '/' ? '' : `2px solid ${theme.colors.font.primary}`};
  }
`
