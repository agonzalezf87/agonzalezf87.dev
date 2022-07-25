import { useState } from 'react'
import {FaCss3Alt, FaJsSquare, FaHtml5, FaExternalLinkAlt} from 'react-icons/fa'
import '../../styles/ProjectCard.component.css'

const ProjectCard = ({id, title, url, technologies}) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseOver = () => {
    setIsHover(true)
  }

  const handleMouseOut = () => {
    setIsHover(false)
  }

  return (
    <div className={`ProjectCard ${id}`} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className={!!isHover ? 'ProjectCard__content' : 'PrjectCard__content hidden'}>
        <div className="ProjectCard__content__text">
          <a href={url} target='_blank'><h4>{title}</h4>
          <FaExternalLinkAlt /></a>
        </div>
        <div className="ProjectCard__content__technologies" >
          {technologies.map(tech => (
            tech === 'js' ? <FaJsSquare key={tech} className={`tech--${tech}`}/> : tech === 'css' ? <FaCss3Alt key={tech} className={`tech--${tech}`}/> : <FaHtml5 key={tech} className={`tech--${tech}`}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export { ProjectCard }