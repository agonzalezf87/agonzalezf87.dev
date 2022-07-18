import { useContext } from 'react'
import ReactDOM from 'react-dom'
import { SiteContext } from '../context/SiteContext'
import { Link } from 'wouter'
import '../styles/MenuModal.component.css'
import languageSet from '../languages'

const MenuModal = (props) => {
  const [en, es] = languageSet
  const { language, openMenu } = useContext(SiteContext)

  const handleClick = () => {
    props.setOpenMenu(!openMenu)
  }

  return ReactDOM.createPortal (
    <div className="MenuModal">
      <ul>
        {language === 'en' && (
          en.Modal.map(key => (
            <li key={key.text}>
              <Link href={key.src} onClick={handleClick}>{key.text}</Link>
            </li>
          ))
        )}
        {language === 'es' && (
          es.Modal.map(key => (
            <li key={key.text}>
              <Link href={key.src} onClick={handleClick}>{key.text}</Link>
            </li>
          ))
        )}
      </ul>
    </div>,
    document.getElementById('MenuModal')
  )
}

export { MenuModal }