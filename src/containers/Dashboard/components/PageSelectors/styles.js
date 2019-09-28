import styled from 'styled-components'
import { Flex } from 'grid-styled'
import avatar from '../../../../assets/icons/blankAvatar.png'

export const Container = styled(Flex)`
  width: 18%;
  background-color: white;
  flex-direction: column;
  align-items: center;
`
export const ProfileContainer = styled(Flex)`
  padding: 20px;
  flex-direction: column;
`
export const Avatar = styled.img.attrs({
  src: avatar
})`
  border-radius: 15px;
  width: 60%;
  align-self: center;
  margin: 15px;
`
export const NameLabel = styled.h1`
  margin: 10px 0px 0px 0px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  color: ${({ theme }) => theme.colors.font.header};
  align-self: center;
`

export const VenueLabel = styled.h1`
  margin: 0px;
  margin-bottom: 40px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  color: ${({ theme }) => theme.colors.font.darkAccent};
  align-self: center;
`

export const Icon = styled.img.attrs(({ src }) => ({
  src
}))`
  width: 20px;
`

export const SelectorContainer = styled(Flex)`
  padding-bottom: 100px;
  width: 100%;
  align-self: center;
  align-content: center;
  justify-content: center;
`
