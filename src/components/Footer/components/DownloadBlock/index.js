import React from 'react'
import {
  Container,
  GooglePlaystore,
  GooglePlayIcon,
  AppStore,
  AppStoreIcon
} from './styles'

const DownloadBlock = () => (
  <Container>
    <GooglePlaystore to="/playstore">
      <GooglePlayIcon />
    </GooglePlaystore>
    <AppStore to="/appstore">
      <AppStoreIcon />
    </AppStore>
  </Container>
)

export default DownloadBlock
