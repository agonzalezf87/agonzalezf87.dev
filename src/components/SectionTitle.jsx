import '../styles/SectionTitle.component.css'
import { FcInfo, FcBusinessman} from 'react-icons/fc'

const SectionTitle = ({text, icon, variant}) => {
  return (
    <div className="SectionTitle">
      <div className={!!variant ? "SectionTitle__logo variant" : "SectionTitle__logo"}>
        {icon === 'info' ? <FcInfo /> : <FcBusinessman />}
      </div>
      <div className="SectionTitle__text">{text}</div>
      <div className="SectionTitle__under"></div>
      <div className="SectionTitle__under"></div>
    </div>
  )
}
export { SectionTitle }