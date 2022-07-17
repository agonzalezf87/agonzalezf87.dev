import React, {createContext, useState} from 'react'

const SiteContext = createContext()

const LangProvider = (props) => {
const [language, setLang] = useState('en')

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
      <SiteContext.Provider value={{ language, changeLang }}>
          {props.children}
      </SiteContext.Provider>
    </>
  )
}

export { SiteContext, LangProvider }