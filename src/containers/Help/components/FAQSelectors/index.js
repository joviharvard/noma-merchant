import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Container } from './styles'
import theme from '../../../../theme'

const FAQSelectors = ({ currentTab, setTab }) => (
  <Container>
    <Tabs
      variant="fullWidth"
      value={currentTab}
      onChange={(e, val) => setTab(val)}
    >
      <Tab label="My Analytics" />
      <Tab label="App Sessions" />
      <Tab label="My Account" />
      <Tab label="My Dashboard" />
    </Tabs>
  </Container>
)

FAQSelectors.getTheme = () => ({
  MuiTabs: {
    root: {
      width: '80%',
    },
    indicator: {
      display: 'none'
    },
    flexContainer: {
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  },
  MuiTab: {
    root: {
      backgroundColor: 'white',
      position: 'relative',
      borderRadius: '30px',
      textAlign: 'center',
      transition: 'all .5s',
      opacity: '1',
      margin: '12px 24px',
      fontFamily: 'Nunito Sans',
      height: 'inherit',
      '&$selected': {
        '&, &:hover': {
          color: 'white',
          backgroundColor: theme.colors.accent.tertiary
        }
      }
    }
  }
})

export default FAQSelectors
