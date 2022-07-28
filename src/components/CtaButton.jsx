import { MdSend, MdOutlineLaunch} from 'react-icons/md'
import { FaFilePdf } from 'react-icons/fa'
import '../styles/CtaButton.component.css'

const CtaButton = ({ctaType, title}) => {
  if (ctaType === 'file') {
    return (
      <button className='CtaButton'>
        {title} <FaFilePdf />
      </button>
    )
  } else if (ctaType === 'open') {
    return (
      <button className='CtaButton'>
        {title} <MdOutlineLaunch />
      </button>
    )
  } else {
    return(
      <button className='CtaButton' type="submit">
        {title} <MdSend />
      </button>
    )
  }
}

export { CtaButton }