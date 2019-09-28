import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'
import login from '../../assets/images/loginIllustration.png'
import noma from '../../assets/icons/noma.png'

export const MainContainer = styled(Flex)`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  padding: 80px;
  background-color: ${({ theme }) => theme.colors.background.merchant};
`

export const LoginIllustration = styled.img.attrs({
  src: login
})`
  width: 45%;
  height: auto;
`
export const LoginBlock = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`

export const Welcome = styled.h1`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  color: ${({ theme }) => theme.colors.font.accent};
  align-self: center;
  font-weight: lighter;
`

export const Noma = styled.img.attrs({
  src: noma
})`
  width: 80%;
  margin-bottom: 40px;
`

export const LoginInput = styled.input`
  width: 50%;
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 14px;
  margin: 6px;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  background: white;
  ::placeholder {
    color: ${({ theme }) => theme.colors.font.tertiary};
  }
  :focus {
    outline: none;
  }
  box-shadow: none;
`

export const Forgot = styled(Link)`
  display: flex;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.body.family};
  color: ${({ theme }) => theme.colors.font.darkAccent};
  font-weight: bold;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-top: 15px;
`

export const LoginSubmit = styled.input`
  width: 30%;
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 14px;
  background: ${({ theme }) => theme.colors.accent.primary};
  color: white;
  border-radius: 5px;
  margin: 20px 6px;
  padding: 6px;
  border-width: 0px;
`

export const Text = styled.h1`
  font-family: ${({ theme }) => theme.fonts.body.family};
  color: ${({ theme }) => theme.colors.font.darkAccent};
  font-size: 14px;
`
export const SignUp = styled(Link)`
  display: flex;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.body.family};
  color: ${({ theme }) => theme.colors.font.link};
  font-weight: bold;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
`
