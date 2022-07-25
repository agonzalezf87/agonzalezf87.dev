import { SectionTitle } from '../SectionTitle'
import { Tag } from "./Tag"
import '../../styles/Skills.component.css'

const Skills = ({language}) => {
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
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
          </div>
        </div>
        <div className='section__row'>
          <div className="section__row__title">
            <h2>{language === "en" ? "Soft Skills" : "Habilidades Blandas"}</h2>
          </div>
          <div className="tags">
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
            <Tag text='Jav4aScript' />
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
            <Tag text='JavaScript' />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export { Skills }