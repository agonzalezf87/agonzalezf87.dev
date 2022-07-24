import { SectionTitle } from "../SectionTitle"
import { ProjectCard } from "./ProjectCard"
import { CtaButton } from "../CtaButton"
import '../../styles/Portfolio.component.css'

const projects = [
  {
    id: 'twitter',
    title: "twitter clone",
    url: "https://agonzalezf87.github.io/twitterclone/",
    technologies: ['html', 'css']
  },
  {
    id: 'wordle',
    title: "wordle js",
    url: "https://agonzalezf87.github.io/wordle/",
    technologies: ['html', 'css', 'js']
  },
]

const Portfolio = ({language}) => {
  return (
    <section className="Portfolio" id="Portfolio">
      <SectionTitle 
        text={language === "en" ? "Recent Projects" : "Proyectos Recientes"}
        icon='prj'
        variant={true}
      />
      <div className="section__row">
        {projects.map(project => (
          <ProjectCard key={project.id} id={project.id} title={project.title} url={project.url} technologies={project.technologies} />
        ))}
        <CtaButton ctaType='link' title={language === 'en' ? 'More Projects' : 'Más Proyectos'}/>
      </div>

    </section>
  )
}

export { Portfolio }