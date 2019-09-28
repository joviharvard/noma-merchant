import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const MainContainer = styled(Flex)`
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
  border-style: solid;
  border-top-width: 1px;
  border-bottom: 0px;
  border-left: 0px;
  border-right: 0px;
  border-color: ${({ theme }) => theme.colors.accent.quarternary};
`

export const Container = styled(Flex)`
  width: 80%;
  height: 200px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
`
