import React from 'react'
import QuestionsList from './components/QuestionsList'
import { Container } from './styles'

const FAQ = ({ currentTab }) => (
  <Container>
    <QuestionsList currentTab={currentTab} />
  </Container>
)

export default FAQ
