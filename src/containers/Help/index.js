import React, { useState } from 'react'
import FAQ from './components/FAQ'
import FAQSelectors from './components/FAQSelectors'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Container, HeaderContainer, BoldHeader, Subheader } from './styles'

const muiBaseTheme = createMuiTheme()

const Help = () => {
  const [currentTab, setTab] = useState(0)
  return (
    <Container>
      <HeaderContainer>
        <BoldHeader>How can we help you?</BoldHeader>
        <Subheader>Choose a category.</Subheader>
      </HeaderContainer>
      <MuiThemeProvider
        theme={createMuiTheme({
          typography: {
            useNextVariants: true
          },
          overrides: FAQSelectors.getTheme(muiBaseTheme)
        })}
      >
        <FAQSelectors currentTab={currentTab} setTab={setTab} />
      </MuiThemeProvider>
      <FAQ currentTab={currentTab} />
    </Container>
  )
}

export default Help
