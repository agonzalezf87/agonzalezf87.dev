import { useContext } from 'react'
import { SiteContext } from '../context/SiteContext'

const Header = () => {
  const { language } = useContext(SiteContext)
  return (
    <div>Header</div>
  )
}

export { Header }