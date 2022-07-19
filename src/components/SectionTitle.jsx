import '../styles/SectionTitle.component.css'

const SectionTitle = (props) => {
  return (
    <div className="SectionTitle">
      <div className="SectionTitle__logo"><i className={`fa-solid ${props.icon}`}></i></div>
      <div className="SectionTitle__text">{props.text}</div>
      <div className="SectionTitle__under"></div>
      <div className="SectionTitle__under"></div>
    </div>
  )
}
export { SectionTitle }