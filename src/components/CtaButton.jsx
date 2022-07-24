import { useContext} from 'react'
import { SiteContext } from '../context/SiteContext'
import { MdSimCardDownload, MdSend, MdOutlineLaunch} from 'react-icons/md'
import '../styles/CtaButton.component.css'

const CtaButton = ({ctaType, title}) => {
  const { language } = useContext(SiteContext)
  switch(language) {
    case 'en':
      if(ctaType === 'file'){
        return (
          <div className='CtaButton'>
            Download CV <MdSimCardDownload />
          </div>
        )
      }else if(ctaType === 'message'){
        return (
          <div className='CtaButton'>
            Send Message <MdSend />
          </div>
        )
      }
    case 'es':
      if(ctaType === 'file'){
        return (
          <div className='CtaButton'>
            Descargar CV <MdSimCardDownload />
          </div>
        )
      }else if(ctaType === 'message'){
        return (
          <div className='CtaButton'>
            Enviar Mensaje <MdSend />
          </div>
        )
      }
  }
}

export { CtaButton }