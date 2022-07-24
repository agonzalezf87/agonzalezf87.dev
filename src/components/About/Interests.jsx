import '../../styles/Interests.component.css'
import { InterestCard } from "./InterestCard"

const myInterests = ['music', 'webdev', 'nintendo', 'gym', 'tech', 'cooking']

const Interests = () => {
  myInterests.sort()
  
  return (
    <div className="Interests">
       {myInterests.map(item => (
        <InterestCard key={item} icon={item} text={item} />
       ))}
    </div>
  )
}

export { Interests }