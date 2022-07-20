import { About } from "../components/About"
import { Interests } from "../components/About/Interests"
import { Hero } from "../components/Hero"
import '../styles/About.component.css'

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About>
        <Interests />
      </About>
    </>
  )
}

export { LandingPage }