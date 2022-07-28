import { Interests } from './Interests'
import { SectionTitle } from '../SectionTitle'
import { Link } from 'wouter'
import { FaFilePdf } from 'react-icons/fa'
import siteContent from '../../siteContent'
import '../../styles/About.component.css'

const personalDetails = [
  {
    phone: "tel:+52 1234567890",
    email: "mailto:my@email.com",
    address: "Juarez, NL, Mexico",
    jobStatus: "freelance"
  }
]

const About = ({language}) => {
  const [en, es] = siteContent
  return (
    <section className="About" id="About">
      <SectionTitle 
        text={language === "en" ? "About Me" : "Acerca de Mí"}
        icon='inf'
        variant={false}
      />
      <div className="section__row">
        <p className="description"><span>{language === "en" ? "Hello! I'm Antonio" : "Hola! Me llamo Antonio"}.</span> {language === 'en' ? en.About[0].description : es.About[0].description}</p>
      </div>
      <div className="wrapper">
        <div className="section__row">
          <h2 className="section__row__title">{language === 'en' ? 'Personal Details' : 'Datos Personales'}</h2>
          <div className="details">
            <div className="details__column">
              <div>{language === 'en' ? 'Phone' : 'Teléfono'}</div>
              <div>{language === 'en' ? 'E-Mail' : 'Correo-e'}</div>
              <div>{language === 'en' ? 'Address' : 'Dirección'}</div>
              <div>{language === 'en' ? 'Job Satus' : 'Disp. Laboral'}</div>
            </div>
              {personalDetails.map(key => (
                <div key="details__column" className="details__column">
                  <div key={key.phone}>
                    <a href={key.phone} alt={language === 'en' ? "Phone number" : 'Número de teléfono'}>{key.phone.split(':')[1]}</a>
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
          <Interests language={language} />
        </div>
      </div>
      <div className="section__row center">
        <a href={language === 'en' ? 'https://1drv.ms/b/s!ArNGFqGMYFe_gpRakKbqLuhn_z9NkA' : 'https://1drv.ms/b/s!ArNGFqGMYFe_gpRZ9qPmWe9RszhnrQ'} target='_blank'>{language === 'en' ? 'Download CV' : 'Descargar CV'} <FaFilePdf /></a>
        {/* <CtaButton ctaType='file' title={language === 'en' ? 'Download CV' : 'Descargar CV'}/> */}
      </div>
    </section>
  )
}

export { About }