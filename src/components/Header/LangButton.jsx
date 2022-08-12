import LangBtnStyles from '../../styles/LangButton.module.css'
import cn from 'classnames'

const LangButton = ({language, changeLang}) => {
  const handleClick = () => {
    language === 'en' ? changeLang('es') : changeLang('en')
  }

  return (
    <div className={language === 'en' ? cn(LangBtnStyles.LangButton, LangBtnStyles.eng) : cn(LangBtnStyles.LangButton, LangBtnStyles.spa)} title={language === 'en' ? 'Cambiar a español' : 'Change to english'} onClick={handleClick}>
      <div className={LangBtnStyles.LangButton__wrapper}>
        <div className={language === 'en' ? LangBtnStyles.LangButton__slider : cn(LangBtnStyles.LangButton__slider, LangBtnStyles.right)}>{language}</div>
      </div>
    </div>
  )
}

export { LangButton }