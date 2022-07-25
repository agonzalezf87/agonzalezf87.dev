import { SectionTitle } from '../SectionTitle'
import { ResItemCard } from './ResItemCard'
import '../../styles/Resume.component.css'

const Resume = ({language}) => {
  return (
    <section className="Resume" id='Resume'>
      <SectionTitle 
        text={language === "en" ? "My Resume" : "Mi CV"}
        icon='res'
        variant={false}
      />
      <div className="wrapper">
        <div className="section__row">
          <div className="section__row__title">
            <h2>{language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}</h2>
          </div>
          <div className="Resume__wrapper">
            <ResItemCard />
            <ResItemCard />
          </div>
        </div>
        <div className="section__row">
          <div className="section__row__title">
            <h2>{language === 'es' ? 'Educación' : 'Education'}</h2>
          </div>
          <div className="Resume__wrapper--right">
            <ResItemCard />
            <ResItemCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Resume }