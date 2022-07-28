import { SectionTitle } from "../SectionTitle"
import { ProjectCard } from "./ProjectCard"
import siteContent from "../../siteContent"
import '../../styles/Portfolio.component.css'

const Portfolio = ({language}) => {
  const [ en ] = siteContent

  return (
    <section className="Portfolio" id="Portfolio">
      <SectionTitle 
        text={language === "en" ? "Recent Projects" : "Proyectos Recientes"}
        icon='prj'
        variant={true}
      />
      <div className="section__row">
        {en.Projects.map(project => (
          <ProjectCard key={project.id} id={project.id} title={project.title} url={project.url} repo={project.repo} technologies={project.technologies} />
        ))}
      </div>

    </section>
  )
}

export { Portfolio }