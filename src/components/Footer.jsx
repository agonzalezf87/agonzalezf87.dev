import { useContext } from 'react'
import { SiteContext } from '../context/SiteContext'

function Footer() {
  const { language } = useContext(SiteContext)
  return (
    language === 'en' ? <div>Footer</div> : <div>Pie de Página</div>
  )
}

export { Footer }