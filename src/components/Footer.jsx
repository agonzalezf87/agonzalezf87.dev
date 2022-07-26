import { SocialLink } from './SocialLink'
import socialLinks from '../socialLinks'
import siteContent from '../siteContent'
import { FaArrowUp } from 'react-icons/fa'
import '../styles/Footer.component.css'

function Footer({language}) {
  const [en, es] = siteContent
  return (
    <footer className='Footer'>
      <div className="Footer__container">
        <div className="Footer__topBtn">
          <a href="/#Top"><FaArrowUp /></a>
        </div>
        <div className="Footer__social">
          {socialLinks.map(link => (
            <SocialLink key={link.id} url={link.url} alt={language === 'es' ? link.esAlt : link.enAlt} icon={link.id}/>
          ))}
        </div>
        <div className="Footer__legend">
          <p>© 2022 <span>Antonio Gonzalez</span></p>
          <p>{language === 'es' ? es.Footer[0].text : en.Footer[0].text}</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }