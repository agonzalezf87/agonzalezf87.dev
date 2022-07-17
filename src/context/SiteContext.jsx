import React, {createContext, useState} from 'react'

const SiteContext = createContext()

const LangProvider = (props) => {
  const [language, setLang] = useState('en')
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