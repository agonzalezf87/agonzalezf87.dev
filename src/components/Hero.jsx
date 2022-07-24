import { useContext } from 'react'
import { SocialLink } from './SocialLink'
import socialLinks from '../socialLinks'
import { SiteContext } from '../context/SiteContext'
import myPhoto from '../assets/mypicture-square.jpg'
import '../styles/Hero.component.css'

const Hero = () => {
  const {language} = useContext(SiteContext)
  return (
    <section className="Hero">
      <div className="Hero__card">
        <div className="Hero__card__image">
          <img src={myPhoto} alt="Antonio Gonzalez picture" />
        </div>
        <div className="Hero__card__title">
          <p>Antonio González</p>
        </div>
        <div className="Hero__card__subtitle">
          <p>Frontend Developer</p>
        </div>
        <div className="Hero__card__socialLinks">
          {socialLinks.map(link => (
            <SocialLink key={link.id} url={link.url} alt={language === 'es' ? link.esAlt : link.enAlt} icon={link.icon}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Hero }