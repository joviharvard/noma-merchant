import styled from 'styled-components'
import { Flex } from 'grid-styled'
import contact from '../../assets/images/contactIllustration.png'

export const Container = styled(Flex)`
  width: 80%;
  flex-direction: row;
  justify-content: center;
  margin: 60px;
  align-items: center;
`

export const ContactIllustration = styled.img.attrs({
  src: contact
})`
  width: 35%;
  margin-right: 40px;
`

export const FormContainer = styled(Flex)`
  width: 35%;
  flex-direction: column;
  height: 400px;
  justify-content: center;
  margin-left: 40px;
`

export const Header = styled.h1`
  margin: 0px;
  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.font.header};
  align-self: center;
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const FormInput = styled.input`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 18px;
  margin: 6px;
  border-radius: 5px;
  padding: 6px 12px;
  border: 0px solid ${({ theme }) => theme.colors.accent.tertiary};
  ::placeholder {
    color: ${({ theme }) => theme.colors.font.tertiary};
  }
  :focus {
    outline: none;
  }
  box-shadow: none;
`

export const MultiLineInput = styled.textarea`
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 18px;
  margin: 6px;
  resize: none;
  border-radius: 5px;
  border: 0px solid ${({ theme }) => theme.colors.accent.tertiary};
  padding: 6px 12px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.font.tertiary};
  }
  :focus {
    outline: none;
  }
`

export const FormSubmit = styled.input`
  width: 50%;
  align-self: flex-end;
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 18px;
  background: ${({ theme }) => theme.colors.accent.tertiary};
  color: white;
  border-radius: 5px;
  margin: 20px 6px;
  padding: 6px;
  border-width: 0px;
`
