import { useContext } from 'react'
import { Route, Switch } from 'wouter'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { LandingPage } from './pages/LandingPage'
import { Projects } from './pages/Projects'
import { NotFound } from './pages/NotFound'
import { SiteContext } from './context/SiteContext'
import { LangButton } from './components/Header/LangButton'
import { BurgerButton } from './components/Header/BurgerButton'
import { Logo } from './components/Header/Logo'
import { MenuModal } from './components/MenuModal'
import { LogoContainer } from './components/Header/LogoContainer'
import { MenuContainer } from './components/Header/MenuContainer'
import { MainContainer } from './components/MainContainer'

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
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <MenuContainer>
          <LangButton language={language} changeLang={changeLang} />
          <BurgerButton setOpenMenu={setOpenMenu}/>
        </MenuContainer>
      </Header>
      <MainContainer>
        <Switch>
          <Route path='/' component={LandingPage} />
          <Route path='/projects' component={Projects} />
          <Route path='/:rest*' component={NotFound} />
        </Switch>
        {!!openMenu && (
          <MenuModal setOpenMenu={setOpenMenu}/>
        )}
      </MainContainer>
      <Footer language={language}/>
    </>
  )
}

export { UI }