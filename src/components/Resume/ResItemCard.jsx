import '../../styles/ResItemCard.component.css'

const ResItemCard = () => {
  return (
    <div className="ResItemCard">
      <div className="ResItemCard__title"><h3>Systems Engineer From <span>Instituto Tecnológico de Alvarado</span></h3></div>
      <div className="ResItemCard__location"><p>Veracruz, Mexico</p></div>
      <div className="ResItemCard__dates"><p>2005 - 2010</p></div>
      <div className="ResItemCard__text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis eos expedita sequi facere rerum aliquam reiciendis?</p>
      </div>
    </div>
  )
}

export { ResItemCard }