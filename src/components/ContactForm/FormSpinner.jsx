import { CgSpinnerTwo } from 'react-icons/cg'
import { FaExclamationCircle, FaCheckCircle } from 'react-icons/fa'

const FormSpinner = ({isLoading, isSuccess, isError, text}) => {
  return (
    <div className="FormSpinner">
      <div className="FormSpinner__content">
        <div className={!!isLoading ? 'FormSpinner__content__icon spinner' : 'FormContent__icon'}>{!!isLoading ? <CgSpinnerTwo /> : !!isSuccess ? <FaCheckCircle /> : <FaExclamationCircle />}</div>
        <div className="FormSpinner__content__message">{text}</div>
      </div>
    </div>
  )
}

export { FormSpinner }