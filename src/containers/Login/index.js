import React, { useState } from 'react'
import {
  MainContainer,
  LoginIllustration,
  LoginBlock,
  Welcome,
  Noma,
  LoginInput,
  Forgot,
  LoginSubmit,
  Text,
  SignUp
} from './styles'

const Login = () => {
  const [username, updateUsername] = useState('')
  const [password, updatePassword] = useState('')
  return (
    <MainContainer>
      <LoginIllustration />
      <LoginBlock>
        <Welcome>Welcome to</Welcome>
        <Noma />
        <LoginInput
          type="text"
          value={username}
          onChange={e => updateUsername(e.target.value)}
          placeholder="Username"
        />
        <LoginInput
          type="text"
          value={password}
          onChange={e => updatePassword(e.target.value)}
          placeholder="Password"
        />
        <Forgot to="/forgot">Forgot Password?</Forgot>
        <LoginSubmit type="submit" value="Log In" />
        <Text>
          Don't have an account? <SignUp to="/register">Sign up.</SignUp>
        </Text>
      </LoginBlock>
    </MainContainer>
  )
}

export default Login
