import { SocialLink } from './SocialLink'
import socialLinks from '../socialLinks'
import languageSet from '../languages'
import '../styles/Footer.component.css'

function Footer({language}) {
  const [en, es] = languageSet
  return (
    <footer className='Footer'>
      <section className="Footer__container">
        <div className="Footer__topBtn">
          <a href="/#top"><i className="fa-solid fa-arrow-up"></i></a>
        </div>
        <div className="Footer__social">
          {socialLinks.map(link => (
            <SocialLink key={link.id} url={link.url} alt={language === 'es' ? link.esAlt : link.enAlt} icon={link.icon}/>
          ))}
        </div>
        <div className="Footer__legend">
          <p>© 2022 <span>Antonio Gonzalez</span></p>
          <p>{language === 'es' ? es.Footer[0].text : en.Footer[0].text}</p>
        </div>
      </section>
    </footer>
  )
}

export { Footer }