import styled from 'styled-components'
import { Flex } from 'grid-styled'
import expandMoreIcon from '../../../../../../assets/icons/expandMoreIcon.png'

export const SingleQuestionContainer = styled(Flex)`
  align-content: center;
  margin: 8px;
  justify-content: center;
`

export const ExpandMoreIcon = styled.img.attrs({
  src: expandMoreIcon
})`
  width: 20px;
`
