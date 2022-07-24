import { useContext } from 'react'
import { Link, useLocation } from 'wouter'
import { SiteContext } from '../context/SiteContext'
import '../styles/NotFound.component.css'

const NotFound = () => {
  const [ location ] = useLocation()
  const { language } = useContext(SiteContext)

  return (
    <section className='NotFound'>
      <div className='NotFound__code'>
        404
      </div>
      <div className='NotFound__location'>
        {language === 'es' ? `La ubicación '${location}' no se encontró...` : `Location '${location}' not Found...`}
      </div>
      <div className='NotFound__goback'>
        <Link href='/'>{language === 'es' ? 'Volver al Inicio' : 'Go Back Home'}</Link>
      </div>
    </section>
  )
}

export { NotFound }