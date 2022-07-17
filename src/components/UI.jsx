import React, { useContext } from 'react'
import { Route, Switch } from 'wouter'
import { Header } from './Header'
import { Footer } from './Footer'
import { LandingPage } from '../pages/LandingPage'
import { Projects } from '../pages/Projects'
import { NotFound } from '../pages/NotFound'
import { SiteContext } from '../context/SiteContext'
import { LangButton } from './LangButton'

const UI = () => {
  const {
    language,
    changeLang
  } = useContext(SiteContext)

  return (
    <>
      <Header>
        <LangButton language={language} changeLang={changeLang} />
      </Header>
      <Switch>
        <Route path='/' component={LandingPage} />
        <Route path='/projects' component={Projects} />
        <Route path='/:rest*' component={NotFound} />
      </Switch>
      <Footer />
    </>
  )
}

export { UI }