import '../../styles/Interests.component.css'
import { InterestCard } from "./InterestCard"
import siteContent from '../../siteContent'

const Interests = ({language}) => {
  const [en, es] = siteContent
  const myInterests = []
  
  if (language === 'en') {
    myInterests = language === en.About[1].interests
  } else {
    myInterests = language === en.About[1].interests
  }

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