import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import LoginHeader from './components/LoginHeader'
import Help from './containers/Help'
import DashboardHeader from './components/DashboardHeader'
import Footer from './components/Footer'
import Login from './containers/Login'
import ContactUs from './containers/ContactUs'
import Dashboard from './containers/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <DashboardHeader />
            <div className="App">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/help" component={Help} />
                <Route path="/contact" component={ContactUs} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
            <Footer />
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
