import React from 'react'
import { Route, Switch } from 'wouter'
import { Header } from './Header'
import { Footer } from './Footer'
import { LandingPage } from '../pages/LandingPage'
import { Projects } from '../pages/Projects'
import { NotFound } from '../pages/NotFound'
import { SiteContext } from '../context/SiteContext'

const App = () => {
  return (
    <>
      <SiteContext.Provider value={{ language: 'en' }}>
        <Header />
        <Switch>
          <Route path='/' component={LandingPage} />
          <Route path='/projects' component={Projects} />
          <Route path='/:rest*' component={NotFound} />
        </Switch>
        <Footer />
      </SiteContext.Provider>
    </>
  )
}

export { App }