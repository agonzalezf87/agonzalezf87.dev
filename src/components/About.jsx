import { useContext } from 'react'
import { SectionTitle } from './SectionTitle'
import { SiteContext } from '../context/SiteContext'

const About = () => {
  const {language} = useContext(SiteContext)

  return (
    <section className="About" id="About">
      <div className="About__item">
        <div className='About__item__title'>
          <SectionTitle 
            text={language === "en" ? "About Me" : "Acerca de Mí"}
            icon='fa-circle-info'
          />
        </div>
        <div className="About__item__description">
          <p><span>{language === "en" ? "Hello! I'm Antonio" : "Hola! Me llamo Antonio"}</span>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ornare purus. Morbi luctus tortor nunc, vitae posuere nibh malesuada sed. In nec tortor eu nibh tristique vehicula sed in lectus. Phasellus vitae accumsan tortor. Fusce ac vestibulum ante.</p>
        </div>
      </div>
    </section>
  )
}

export { About }