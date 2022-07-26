import siteContent from "../../siteContent"
import "../../styles/Menu.component.css"

const Menu = ({language}) => {
  const [en, es] = siteContent

  return(
    <div className="Menu">
      <ul>
        {language === 'en' && (
          en.Menu.map(key => (
            <li key={key.text}>
              <a href={key.src} >{key.text}</a>
            </li>
          ))
        )}
        {language === 'es' && (
          es.Menu.map(key => (
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