import esFlag from '../../assets/es-flag.svg'
import enFlag from '../../assets/en-flag.svg'

const LangButton = (props) => {
    const handleChange = (evt) => {
        props.changeLang(evt.target.value)
    }

    return (
        <div className='LangButton'>
            <div>
                <img src={props.language === 'en' ? enFlag : esFlag} alt={`${props.language} flag`} />
            </div>
            <select value={props.language} onChange={handleChange}>
                <option value="es" >ES</option>
                <option value="en" >EN</option>
            </select>
        </div>
    )
}

export { LangButton }