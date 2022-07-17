import React from 'react'
import { Route, Switch } from 'wouter'
import { Header } from './Header'
import { Footer } from './Footer'
import { LandingPage } from '../pages/LandingPage'
import { Projects } from '../pages/Projects'
import { NotFound } from '../pages/NotFound'
import { SiteContext } from '../context/SiteContext'
import { useInitialState } from '../hooks/useInitialState'

const App = () => {
  const initialState = useInitialState()
  return (
    <>
      <SiteContext.Provider value={{ language: 'en', initialState: initialState }}>
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