import { FaFileDownload } from 'react-icons/fa'
import '../styles/CtaButton.component.css'

const CtaButton = () => {
  return (
    <div className='CtaButton'>
      Download File {<FaFileDownload />}
    </div>
  )
}

export { CtaButton }