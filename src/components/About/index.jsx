import { useContext } from 'react'
import { Interests } from './Interests'
import { SectionTitle } from '../SectionTitle'
import { CtaButton } from '../CtaButton'
import { SiteContext } from '../../context/SiteContext'
import '../../styles/About.component.css'

const personalDetails = [
  {
    phone: "tel:+52 2292509350",
    email: "mailto:agonzalezf87@gmail.com",
    address: "Juarez, NL, Mexico",
    jobStatus: "freelance"
  }
]

const About = () => {
  const {language} = useContext(SiteContext)

  return (
    <section className="About" id="About">
      <SectionTitle 
        text={language === "en" ? "About Me" : "Acerca de Mí"}
        icon='info'
        variant={false}
      />
      <div className="section__row">
        <p className="description"><span>{language === "en" ? "Hello! I'm Antonio" : "Hola! Me llamo Antonio"}.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ornare purus. Morbi luctus tortor nunc, vitae posuere nibh malesuada sed. In nec tortor eu nibh tristique vehicula sed in lectus. Phasellus vitae accumsan tortor. Fusce ac vestibulum ante.</p>
      </div>
      <div className="wrapper">
        <div className="section__row">
          <h2 className="section__row__title">{language === 'en' ? 'Personal Details' : 'Datos Personales'}</h2>
          <div className="details">
            <div className="details__column">
              <div>{language === 'en' ? 'Phone' : 'Teléfono'}</div>
              <div>{language === 'en' ? 'E-Mail' : 'Correo-e'}</div>
              <div>{language === 'en' ? 'Address' : 'Dirección'}</div>
              <div>{language === 'en' ? 'Job Satus' : 'Dis. Laboral'}</div>
            </div>
              {personalDetails.map(key => (
                <div key="details__column" className="details__column">
                  <div key={key.phone}>
                    <a alt={language === 'en' ? "Phone number" : 'Número de teléfono'}>{key.phone.split(':')[1]}</a>
                  </div>
                  <div key={key.email}>
                    <a href={key.email} alt={language === 'en' ? "E-mail" : 'Correo Electrónico'}>{key.email.split(':')[1]}</a>
                  </div>
                  <div key={key.address}>{key.address}</div>
                  <div key={key.jobStatus}><span>{key.jobStatus}</span></div>
                </div>
              ))}
          </div>
        </div>
        <div className="section__row">
          <h2 className="section__row__title">{language === 'en' ? 'My Interests' : 'Mis Gustos'}</h2>
          <Interests />
        </div>
      </div>
      <div className="section__row center">
        <CtaButton ctaType='file'/>
      </div>
    </section>
  )
}

export { About }