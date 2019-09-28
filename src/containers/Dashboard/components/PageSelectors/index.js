import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {
  Container,
  ProfileContainer,
  Avatar,
  VenueLabel,
  SelectorContainer,
  NameLabel,
  Icon
} from './styles'
import analytics from '../../../../assets/icons/analytics.png'
import customerData from '../../../../assets/icons/customerData.png'
import sessions from '../../../../assets/icons/sessions.png'
import theme from '../../../../theme'

const PageSelectors = ({ currentTab, setTab }) => (
  <Container>
    <ProfileContainer>
      <Avatar />
      <NameLabel>Caitlin Ugh Lam</NameLabel>
      <VenueLabel>Throne's Brewery</VenueLabel>
    </ProfileContainer>
    <SelectorContainer>
      <Tabs
        orientation="vertical"
        value={currentTab}
        onChange={(e, val) => setTab(val)}
      >
        <Tab icon={<Icon src={analytics} />} label="My Analytics" />
        <Tab icon={<Icon src={customerData} />} label="Customer Data" />
        <Tab icon={<Icon src={sessions} />} label="Past Sessions" />
      </Tabs>
    </SelectorContainer>
  </Container>
)

PageSelectors.getTheme = () => ({
  MuiTabs: {
    root: {
      width: '100%'
    },
    indicator: {
      width: 6,
      backgroundColor: theme.colors.accent.tertiary
    },
    centered: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  },
  MuiTab: {
    root: {
      width: '100%',
      backgroundColor: 'white',
      position: 'relative',
      textAlign: 'center',
      transition: 'all .5s',
      opacity: '1',
      fontFamily: 'Nunito Sans',
      '&$selected': {
        '&, &:hover': {
          color: theme.colors.font.black,
          backgroundColor: theme.colors.accent.quinary
        }
      }
    },
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    }
  }
})

export default PageSelectors
