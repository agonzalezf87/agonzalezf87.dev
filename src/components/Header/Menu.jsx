import languageSet from '../../languages'
import "../../styles/Menu.component.css"

const Menu = ({language}) => {
  const [en, es] = languageSet

  return(
    <div className="Menu">
      <ul>
        {language === 'en' && (
          en.Modal.map(key => (
            <li key={key.text}>
              <a href={key.src} >{key.text}</a>
            </li>
          ))
        )}
        {language === 'es' && (
          es.Modal.map(key => (
            <li key={key.text}>
              <a href={key.src} >{key.text}</a>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export { Menu }