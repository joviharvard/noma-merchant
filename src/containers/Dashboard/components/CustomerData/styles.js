import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  width: 75%;
  align-content: center;
  justify-content: space-between;
  background-color: white;
  text-align: left;
`

export const Label = styled.h1`
  margin: 0px;
  padding: 30px;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  color: ${({ theme }) => theme.colors.font.black};
`
