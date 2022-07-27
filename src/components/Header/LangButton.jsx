import '../../styles/LangButton.component.css'

const LangButton = ({language, changeLang}) => {
  const handleClick = () => {
    language === 'en' ? changeLang('es') : changeLang('en')
  }

  return (
    <div className="LangButton" title={language === 'en' ? 'Cambiar a español' : 'Change to english'} onClick={handleClick}>
      <div className={language === 'en' ? 'LangButton__wrapper' : 'LangButton__wrapper right'}>
        <div className={language === 'en' ? "LangButton__slider en" : "LangButton__slider es"}></div>
      </div>
    </div>
  )
}

export { LangButton }