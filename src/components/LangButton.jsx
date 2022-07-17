import { useContext, useState } from 'react'
import { SiteContext } from '../context/SiteContext'
import SpainFlag from '../assets/logo-Spain-flag-wave.svg'
import UsFlag from  '../assets/logo-USA-flag-wave.svg'

const LangButton = () => {
    const { language } = useContext(SiteContext)
    const [lang, setLang] = useState(language)

    const handleClick = () => {
        lang === 'es' ? setLang('en') : setLang('es')
    }

    return (
        <div className='LangButton' onClick={handleClick}>
            <img src={lang === 'en' ? SpainFlag : UsFlag} alt="Language flag" title={lang === 'en' ? 'Cambiar a español' : 'Change to english'} />
        </div>
    )
}

export { LangButton }