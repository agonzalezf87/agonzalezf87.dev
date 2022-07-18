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
import { MenuModal } from './MenuModal'

const UI = () => {
  const {
    language,
    changeLang,
    openMenu,
    setOpenMenu
  } = useContext(SiteContext)

  return (
    <>
      <Header>
        <aside>
          <Logo />
        </aside>
        <nav>
          <LangButton language={language} changeLang={changeLang} />
          <BurgerButton setOpenMenu={setOpenMenu}/>
        </nav>
      </Header>
      <main className='Main'>
        <Switch>
          <Route path='/' component={LandingPage} />
          <Route path='/projects' component={Projects} />
          <Route path='/:rest*' component={NotFound} />
        </Switch>
        {!!openMenu && (
          <MenuModal setOpenMenu={setOpenMenu}/>
        )}
      </main>
      <Footer />
    </>
  )
}

export { UI }