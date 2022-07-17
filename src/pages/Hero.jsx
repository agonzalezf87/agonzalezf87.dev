import { useContext } from "react"
import { SiteContext } from "../context/SiteContext"
import '../styles/Hero.component.css'

const Hero = () => {
    const { language } = useContext(SiteContext)
    return (
        <section className="Hero">
            {language === 'es' ? 'Heroe...' : 'Hero' }
        </section>
    )
}

export { Hero }