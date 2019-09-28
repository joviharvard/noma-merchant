import React from 'react'
import Analytics from '../Analytics'
import CustomerData from '../CustomerData'
import Sessions from '../Sessions'

const CurrentPage = ({ currentTab }) => {
  const currentScreen = tab => {
    switch (tab) {
      case 0:
        return <Analytics />
      case 1:
        return <CustomerData />
      default:
        return <Sessions />
    }
  }
  return currentScreen(currentTab)
}

export default CurrentPage
