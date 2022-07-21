import '../../styles/Interests.component.css'
import { InterestCard } from "./InterestCard"

const Interests = () => {
  return (
    <div className="Interests">
        <InterestCard text='Music'/>
        <InterestCard text='Music'/>
        <InterestCard text='Music'/>
        <InterestCard text='Music' isBlank={true}/>
    </div>
  )
}

export { Interests }