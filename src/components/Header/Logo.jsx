import brandLogo from '../../assets/logo.png'
import '../../styles/Logo.component.css'

const Logo = () => {
  return (
    <div className="Logo">
      <img src={brandLogo} alt="Antonio Gonzalez Logo" />
      <span>AG.Dev</span>
    </div>
  )
}

export { Logo }