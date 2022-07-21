import '../styles/SectionTitle.component.css'
import { FcInfo, FcSupport} from 'react-icons/fc'

const SectionTitle = ({text, icon, variant}) => {
  return (
    <div className="SectionTitle">
      <div className={!!variant ? "SectionTitle__logo variant" : "SectionTitle__logo"}>
        {icon === 'info' ? <FcInfo /> : <FcSupport />}
      </div>
      <div className="SectionTitle__text">{text}</div>
      <div className="SectionTitle__under"></div>
      <div className="SectionTitle__under"></div>
    </div>
  )
}
export { SectionTitle }