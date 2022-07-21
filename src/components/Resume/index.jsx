import { useContext } from 'react'
import { SectionTitle } from '../SectionTitle'
import { SiteContext } from '../../context/SiteContext'
import '../../styles/Resume.component.css'

const Resume = () => {
  const { language } = useContext(SiteContext)
  return (
    <section className="Resume" id='Resume'>
      <SectionTitle 
        text={language === "en" ? "My Resume" : "Mi CV"}
        icon='res'
        variant={false}
      />
      <div className="section__row">
        <div className="section__row__title">
          <h2>{language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}</h2>
        </div>
      </div>
      <div className="section__row">
        <div className="section__row__title">
          <h2>{language === 'es' ? 'Educación' : 'Education'}</h2>
        </div>
      </div>
    </section>
  )
}

export { Resume }