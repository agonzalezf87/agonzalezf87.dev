import brandLogo from '../../assets/logo.png'
import LogoStyles from '../../styles/Logo.module.css'

const Logo = () => {
  return (
    <div className={LogoStyles.Logo}>
      <img src={brandLogo} alt="Antonio Gonzalez Logo" />
      <span>AG.Dev</span>
    </div>
  )
}

export { Logo }