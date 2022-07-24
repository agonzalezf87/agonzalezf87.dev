import '../styles/SectionTitle.component.css'
import { FcInfo, FcSettings, FcViewDetails, FcFeedback, FcBusiness} from 'react-icons/fc'

const SectionTitle = ({text, icon, variant}) => {
  return (
    <div className="SectionTitle">
      <div className={!!variant ? "SectionTitle__logo variant" : "SectionTitle__logo"}>
        {icon === 'inf' ? <FcInfo /> : icon === 'res' ?  <FcViewDetails /> : icon === 'cont' ? <FcFeedback /> : icon === 'prj' ? <FcBusiness /> : <FcSettings />}
      </div>
      <div className="SectionTitle__text">{text}</div>
      <div className="SectionTitle__under"></div>
      <div className="SectionTitle__under"></div>
    </div>
  )
}
export { SectionTitle }