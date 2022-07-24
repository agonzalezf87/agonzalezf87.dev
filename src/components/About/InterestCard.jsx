import '../../styles/InterestCard.component.css'
import { FaHeadphones, FaGamepad, FaDumbbell, FaLaptopCode, FaHamburger, FaMicrochip} from 'react-icons/fa'

const InterestCard = (props) => {
  return (
    <div className="InterestCard">
      <div className="InterestCard__icon">
        {
          props.icon === 'music' ? <FaHeadphones /> : props.icon === 'webdev' ? <FaLaptopCode /> : props.icon === 'nintendo' ? <FaGamepad /> : props.icon === 'gym' ? <FaDumbbell /> : props.icon === 'tech' ? <FaMicrochip /> : <FaHamburger />
        }
      </div>
      <div className="InterestCard__text">
        {props.text === 'nintendo' ? `${props.text}™` : props.text}
      </div>
    </div>
  )
}

export { InterestCard }