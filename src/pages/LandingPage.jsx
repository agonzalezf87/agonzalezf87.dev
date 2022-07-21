import { Hero } from "../components/Hero"
import { About } from "../components/About/index"
import { Skills } from "../components/Skills/index.jsx"
import '../styles/About.component.css'

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  )
}

export { LandingPage }