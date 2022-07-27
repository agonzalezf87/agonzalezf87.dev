import { CgSpinnerTwo } from 'react-icons/cg'
import { FaExclamationCircle, FaCheckCircle } from 'react-icons/fa'

const FormSpinner = ({icon, message}) => {
  return (
    <div className="FormSpinner">
      <div className="FormSpinner__content">
        <div className={icon === 'loading' ? 'FormSpinner__content__icon spinner' : icon === 'error' ? 'FormSpinner__content__icon error' : 'FormSpinner__content__icon'}>{icon === 'loading' ? <CgSpinnerTwo /> : icon === 'error' ? <FaExclamationCircle /> : icon === 'success' ? <FaCheckCircle/> : "" }</div>
        <div className="FormSpinner__content__message">{message}</div>
      </div>
    </div>
  )
}

export { FormSpinner }