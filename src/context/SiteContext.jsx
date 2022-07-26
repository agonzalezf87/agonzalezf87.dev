import {createContext, useState} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const SiteContext = createContext()

const LangProvider = (props) => {
  const [language, setLang] = useLocalStorage('User_Lang', 'en')
  const [openMenu, setOpenMenu] = useState(false)

  const changeLang = () => {
    if(language === 'en'){
      setLang('es')
    }
    else {
      setLang('en') 
    }
  }

  return (
    <>
      <SiteContext.Provider 
        value={{
           language,
           openMenu,
           changeLang,
           setOpenMenu 
        }}
      >
          {props.children}
      </SiteContext.Provider>
    </>
  )
}

export { SiteContext, LangProvider }