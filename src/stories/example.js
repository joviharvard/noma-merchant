import React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

storiesOf('Button', module).add('Button', () => (
  <ThemeProvider theme={theme}>
    <button> text </button>
  </ThemeProvider>
))
