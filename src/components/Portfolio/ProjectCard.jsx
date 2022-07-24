import {FaCss3Alt, FaJsSquare, FaHtml5} from 'react-icons/fa'
import '../../styles/ProjectCard.component.css'

const ProjectCard = ({title, url, technologies}) => {
  return (
    <div className="ProjectCard">
      {title}
    </div>
  )
}

export { ProjectCard }