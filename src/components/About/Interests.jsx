import '../../styles/Interests.component.css'
import { InterestCard } from "./InterestCard"
import siteContent from '../../siteContent'

const Interests = ({language}) => {
  const [en, es] = siteContent
  let myInterests = []
  
  if (language === 'en') {
    myInterests = en.About[1].interests
  } else {
    myInterests = es.About[1].interests
  }
  
  return (
    <div className="Interests">
      {myInterests.map(item => (
        <InterestCard key={item.icon} icon={item.icon} text={item.title} />
      ))}
    </div>
  )
}

export { Interests }