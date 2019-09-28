import React, { useState } from 'react'
import PageSelectors from './components/PageSelectors'
import CurrentPage from './components/CurrentPage'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {
  Container,
  HeaderContainer,
  BoldHeader,
  ContentContainer
} from './styles'

const muiBaseTheme = createMuiTheme()

const Dashboard = () => {
  const [currentTab, setTab] = useState(0)
  return (
    <Container>
      <HeaderContainer>
        <BoldHeader>My Dashboard</BoldHeader>
      </HeaderContainer>
      <ContentContainer>
        <MuiThemeProvider
          theme={createMuiTheme({
            typography: {
              useNextVariants: true
            },
            overrides: PageSelectors.getTheme(muiBaseTheme)
          })}
        >
          <PageSelectors currentTab={currentTab} setTab={setTab} />
        </MuiThemeProvider>
        <CurrentPage currentTab={currentTab} />
      </ContentContainer>
    </Container>
  )
}

export default Dashboard
