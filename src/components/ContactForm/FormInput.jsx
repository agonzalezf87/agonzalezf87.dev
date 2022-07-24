import { CtaButton } from "../CtaButton"
import "../../styles/ContactForm.component.css"

function FormInput({fiID, fiType, plcHolder, isRequired }) {
  if(fiType === 'textarea') {
    return (
      <textarea name={fiID} id={fiID} required={isRequired} placeholder={plcHolder}></textarea>
    )
  } else {
    return (
      <input type={fiType} name={fiID} id={fiID} required={isRequired} placeholder={plcHolder} />
    )
  }
}

export { FormInput }