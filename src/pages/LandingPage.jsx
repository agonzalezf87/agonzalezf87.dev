import { Hero } from "../components/Hero"
import { About } from "../components/About/index"
import { Skills } from "../components/Skills/"
import { Resume } from "../components/Resume/"
import '../styles/About.component.css'

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Resume />
    </>
  )
}

export { LandingPage }