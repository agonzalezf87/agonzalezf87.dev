import '../../styles/ResItemCard.component.css'

const ResItemCard = (props) => {
  return (
    <div className="ResItemCard">
      <div className="ResItemCard__title"><h3>{props.title} <span>{props.company}</span></h3></div>
      <div className="ResItemCard__location"><p>{props.location}</p></div>
      <div className="ResItemCard__dates"><p>{props.since}</p></div>
      <div className="ResItemCard__text"><p>{props.description}</p></div>
    </div>
  )
}

export { ResItemCard }