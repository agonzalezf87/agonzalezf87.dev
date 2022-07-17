import { useContext } from 'react'
import { SiteContext } from '../context/SiteContext'

const Header = () => {
  const { language, initialState } = useContext(SiteContext)
  const { en, es } = initialState.state
  
  return (
    <header className='Header'>
      Header
    </header>
  )
}

export { Header }