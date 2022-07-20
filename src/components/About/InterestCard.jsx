
import { FaHeadphones } from 'react-icons/fa'

const InterestCard = (props) => {
  return (
    <div className="InterestCard">
      <div className="InterestCard__icon Music"><FaHeadphones/></div>
      <div className="InterestCard__text">{props.text}</div>
    </div>
  )
}

export { InterestCard }