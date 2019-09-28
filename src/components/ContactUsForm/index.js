import React, { useState } from 'react'
import {
  Container,
  ContactIllustration,
  FormContainer,
  Header,
  ContactForm,
  FormInput,
  FormSubmit,
  MultiLineInput
} from './styles'

const ContactUsForm = () => {
  const [name, updateName] = useState('')
  const [email, updateEmail] = useState('')
  const [message, updateMessage] = useState('')

  return (
    <Container>
      <ContactIllustration />
      <FormContainer>
        <Header>Contact Us</Header>
        <ContactForm>
          <FormInput
            value={name}
            onChange={e => updateName(e.target.value)}
            type="text"
            placeholder="Name"
          />
          <FormInput
            value={email}
            onChange={e => updateEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <MultiLineInput
            rows={10}
            value={message}
            onChange={e => updateMessage(e.target.value)}
            type="text"
            placeholder="Message"
          />
          <FormSubmit type="submit" value="Send Message" />
        </ContactForm>
      </FormContainer>
    </Container>
  )
}

export default ContactUsForm
