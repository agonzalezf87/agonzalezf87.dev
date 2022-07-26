import { SectionTitle } from '../SectionTitle'
import { Tag } from "./Tag"
import siteContent from '../../siteContent'
import '../../styles/Skills.component.css'

const Skills = ({language}) => {
  const [en, es] = siteContent
  let myTechSkills = []
  let mySoftSkills = []

  if (language === 'en') {
    mySoftSkills = en.About[2].softSkills
    myTechSkills = en.About[3].techSkills
  } else {
    mySoftSkills = es.About[2].softSkills
    myTechSkills = es.About[3].techSkills
  }

  return (
    <section className="Skills" id="Skills">
      <SectionTitle 
        text={language === "en" ? "Skills" : "Habilidades"}
        icon='skills'
        variant={true}
      />
      <div className="wrapper">
        <div className='section__row'>
          <div className="section__row__title">
            <h2>{language === "en" ? "Technical Skills" : "Habilidades Técnicas"}</h2>
          </div>
          <div className="tags">
            {myTechSkills.map(item => (
              <Tag key={item} text={item} />
            ))}
          </div>
        </div>
        <div className='section__row'>
          <div className="section__row__title">
            <h2>{language === "en" ? "Soft Skills" : "Habilidades Blandas"}</h2>
          </div>
          <div className="tags">
            {mySoftSkills.map(item => (
              <Tag key={item} text={item} />
            ))}
          </div>
        </div>
      </div>
      
    </section>
  )
}

export { Skills }