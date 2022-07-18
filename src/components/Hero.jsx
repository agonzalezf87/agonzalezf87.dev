import '../styles/Hero.component.css'
import myPhoto from '../assets/mypicture-square.jpg'

const Hero = () => {
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
          Links...
        </div>
      </div>
    </section>
  )
}

export { Hero }