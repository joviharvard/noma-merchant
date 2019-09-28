import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  width: 100%;
  padding: 30px 0px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.merchant};
`

export const HeaderContainer = styled(Flex)`
  width: 80%;
  align-self: center;
  flex-direction: column;
  align-items: left;
  margin-bottom: 20px;
`

export const BoldHeader = styled.h1`
  margin: 0px;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  color: ${({ theme }) => theme.colors.font.header};
  align-self: left;
`

export const ContentContainer = styled(Flex)`
  width: 80%;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
`
