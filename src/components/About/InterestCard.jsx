import '../../styles/InterestCard.component.css'
import { FaHeadphones } from 'react-icons/fa'

const InterestCard = (props) => {
  return (
    <div className={!props.isBlank ? 'InterestCard' : 'InterestCard blank'}>
      <div className="InterestCard__icon">
        {props.isBlank ? ' ' : <FaHeadphones/>}
      </div>
      <div className="InterestCard__text">
        {props.isBlank ? ' ' : props.text}
      </div>
    </div>
  )
}

export { InterestCard }