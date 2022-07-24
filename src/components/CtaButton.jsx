import { MdSimCardDownload, MdSend, MdOutlineLaunch} from 'react-icons/md'
import '../styles/CtaButton.component.css'

const CtaButton = ({ctaType, title}) => {
  if(ctaType === 'file') {
    return(
      <button className='CtaButton'>
        {title} <MdSimCardDownload />
      </button>
    )
  } else if(ctaType === 'open') {
    return(
      <button className='CtaButton'>
        {title} <MdOutlineLaunch />
      </button>
    )
  } else {
    return(
      <button className='CtaButton'>
        {title} <MdSend />
      </button>
    )
  }
}

export { CtaButton }