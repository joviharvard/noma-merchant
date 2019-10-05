import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import logo from '../../assets/icons/noma.png'

export const Container = styled(Flex)`
  margin-top: 4px;
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img.attrs({
  src: logo
})`
  width: 180px;
`
