import { useState } from 'react'
import {FaCss3Alt, FaJsSquare, FaHtml5, FaExternalLinkAlt, FaGithubSquare, FaReact} from 'react-icons/fa'
import '../../styles/ProjectCard.component.css'

const ProjectCard = ({id, title, url, repo, technologies}) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseOver = () => {
    setIsHover(true)
  }

  const handleMouseOut = () => {
    setIsHover(false)
  }

  return (
    <div className={`ProjectCard ${id}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className={!!isHover ? 'ProjectCard__content' : 'ProjectCard__content hidden'}>
        <div className="ProjectCard__content__text">
          <h4>{title}</h4>
        </div>
        <div className="ProjectCard__content__links">
          {title !== 'web portfolio' &&(
            <a href={url} target='_blank' alt='Project website'><FaExternalLinkAlt /></a>
          )}
          <a href={repo} target='_blank' alt='Project repository'><FaGithubSquare /></a>
        </div>
        <div className="ProjectCard__content__technologies" >
          {technologies.map(tech => (
            tech === 'js' ? <FaJsSquare key={tech} className={`tech--${tech}`}/> : tech === 'css' ? <FaCss3Alt key={tech} className={`tech--${tech}`}/> : tech === 'html' ? <FaHtml5 key={tech} className={`tech--${tech}`}/> : <FaReact key={tech} className={`tech--${tech}`}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export { ProjectCard }