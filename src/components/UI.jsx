import React, { useContext } from 'react'
import { Route, Switch, Link } from 'wouter'
import { Header } from './Header'
import { Footer } from './Footer'
import { LandingPage } from '../pages/LandingPage'
import { Projects } from '../pages/Projects'
import { NotFound } from '../pages/NotFound'
import { SiteContext } from '../context/SiteContext'
import { LangButton } from './LangButton'
import { BurgerButton } from './BurgerButton'
import { Logo } from './Logo'

const UI = () => {
  const {
    language,
    changeLang
  } = useContext(SiteContext)

  return (
    <>
      <Header>
        <aside>
          <Link href='/'>
            <Logo />
          </Link>
        </aside>
        <nav>
          <LangButton language={language} changeLang={changeLang} />
          <BurgerButton />
        </nav>
      </Header>
      <main className='Main'>
        <Switch>
          <Route path='/' component={LandingPage} />
          <Route path='/projects' component={Projects} />
          <Route path='/:rest*' component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export { UI }