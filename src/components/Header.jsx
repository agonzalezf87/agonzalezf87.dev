import { useContext } from 'react'
import { SiteContext } from '../context/SiteContext'
import '../styles/Header.component.css'

const Header = (props) => {
  const { language } = useContext(SiteContext)
  return (
    <header className='Header'>
      {language === 'en' ? <div>Header</div> : <div>Encabezado</div>}
      {props.children}
    </header>
  )
}

export { Header }