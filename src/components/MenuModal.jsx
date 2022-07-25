import { useContext } from 'react'
import ReactDOM from 'react-dom'
import { SiteContext } from '../context/SiteContext'
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
              <a href={key.src} onClick={handleClick}>{key.text}</a>
            </li>
          ))
        )}
        {language === 'es' && (
          es.Modal.map(key => (
            <li key={key.text}>
              <a href={key.src} onClick={handleClick}>{key.text}</a>
            </li>
          ))
        )}
      </ul>
    </div>,
    document.getElementById('MenuModal')
  )
}

export { MenuModal }