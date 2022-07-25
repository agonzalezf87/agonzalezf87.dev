import { useContext } from 'react'
import ReactDOM from 'react-dom'
import { SiteContext } from '../context/SiteContext'
import '../styles/MenuModal.component.css'
import siteContent from '../siteContent'

const MenuModal = (props) => {
  const [en, es] = siteContent
  const { language, openMenu } = useContext(SiteContext)

  const handleClick = () => {
    props.setOpenMenu(!openMenu)
  }

  return ReactDOM.createPortal (
    <div className="MenuModal">
      <ul>
        {language === 'en' && (
          en.Menu.map(key => (
            <li key={key.text}>
              <a href={key.src} onClick={handleClick}>{key.text}</a>
            </li>
          ))
        )}
        {language === 'es' && (
          es.Menu.map(key => (
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