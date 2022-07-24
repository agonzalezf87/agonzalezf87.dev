import { MdSimCardDownload, MdSend, MdOutlineLaunch} from 'react-icons/md'
import '../styles/CtaButton.component.css'

const CtaButton = ({ctaType, title}) => {
  switch(ctaType) {
    case 'file':
      return (
        <div className='CtaButton'>
          {title} <MdSimCardDownload />
        </div>
      )
    case 'message':
      return (
        <div className='CtaButton'>
          {title} <MdSend />
        </div>
      )
    case 'link':
      return (
        <div className='CtaButton'>
          {title} <MdOutlineLaunch />
        </div>
      )
  }
}

export { CtaButton }