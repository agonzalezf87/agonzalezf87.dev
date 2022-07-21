import { useContext } from 'react'
import { SectionTitle } from '../SectionTitle'
import { SiteContext } from '../../context/SiteContext'
import { Tag } from "./Tag"
import '../../styles/Skills.component.css'

const Skills = () => {
  const {language} = useContext(SiteContext)
  return (
    <section className="Skills" id="Skills">
      <SectionTitle 
        text={language === "en" ? "Skills" : "Habilidades"}
        icon='skills'
        variant={true}
      />
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
          <Tag text='JavaScript' />
          <Tag text='JavaScript' />
          <Tag text='JavaScript' />
          <Tag text='JavaScript' />
          <Tag text='JavaScript' />
          <Tag text='JavaScript' />
        </div>
      </div>
    </section>
  )
}

export { Skills }