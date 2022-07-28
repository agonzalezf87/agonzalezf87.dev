import '../../styles/LangButton.component.css'

const LangButton = ({language, changeLang}) => {
  const handleClick = () => {
    language === 'en' ? changeLang('es') : changeLang('en')
  }

  return (
    <div className={language === 'en' ? "LangButton eng" : "LangButton spa"} title={language === 'en' ? 'Cambiar a español' : 'Change to english'} onClick={handleClick}>
      <div className={language === 'en' ? 'LangButton__wrapper' : 'LangButton__wrapper right'}>
        <div className={language === 'en' ? "LangButton__slider en" : "LangButton__slider es"}>{language}</div>
      </div>
    </div>
  )
}

export { LangButton }