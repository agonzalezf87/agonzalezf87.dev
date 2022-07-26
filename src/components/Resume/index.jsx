import { SectionTitle } from '../SectionTitle'
import { ResItemCard } from './ResItemCard'
import siteContent from '../../siteContent'
import '../../styles/Resume.component.css'

const Resume = ({language}) => {
  const [en, es] = siteContent
  let myWorkExperience = []
  let myEducation = []

  if (language === 'en') {
    myWorkExperience = en.WorkExperience
    myEducation = en.Education
  } else {
    myWorkExperience = es.WorkExperience
    myEducation = es.Education
  }

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
            {myWorkExperience.map(work => (
              <ResItemCard key={work.title} title={work.title} company={work.company} location={work.lotation} since={work.since} description={work.description}
              />
            ))}
          </div>
        </div>
        <div className="section__row">
          <div className="section__row__title">
            <h2>{language === 'es' ? 'Educación' : 'Education'}</h2>
          </div>
          <div className="Resume__wrapper--right">
            {myEducation.map(study => (
              <ResItemCard key={study.title} title={study.title} company={study.company} location={study.lotation} since={study.since} description={study.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Resume }