import { useContext } from "react"
import { SiteContext } from "../context/SiteContext"
import { Hero } from "../components/Hero"
import { About } from "../components/About/index"
import { Skills } from "../components/Skills/"
import { Resume } from "../components/Resume/"
import { Contact } from "../components/Contact/"
import { Portfolio } from "../components/Portfolio"
import '../styles/About.component.css'

const LandingPage = () => {
  const { language } = useContext(SiteContext)
  return (
    <>
      <Hero language={language}/>
      <About language={language}/>
      <Skills language={language}/>
      <Resume language={language}/>
      <Portfolio language={language}/>
      <Contact language={language}/>
    </>
  )
}

export { LandingPage }