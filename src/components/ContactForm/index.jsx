import "../../styles/ContactForm.component.css"
import { CtaButton } from "../CtaButton"
import { FormInput } from "./FormInput"
import "../../styles/ContactForm.component.css"

function ContactForm({language}) {
  /* const handleSubmit = (evt) => {
    evt.preventDefault()
  } */
  return (
    <form className="ContactForm" name="ContactForm" method="POST" data-netlify="true" onSubmit="submit" data-netlify-honeypot="bot-field" >
      <div className="ContactForm__wrapper">
        <input type='hidden' name='form-name' value='ContactForm' />
        <div hidden><input name="bot-field" /></div>
        <FormInput fiID='name' fiType='text' plcHolder={language === 'en' ? 'Full Name' : 'Nombre Completo'} isRequired={true} />
        <FormInput fiID='telephone' fiType='tel' plcHolder={language === 'en' ? 'Phone Number' : 'Número Telefónico'} isRequired={false} />
        <FormInput fiID='email' fiType='email' plcHolder={language === 'en' ? 'E-Mail' : 'Correo Elecrónico'} isRequired={true} />
        <FormInput fiID='subject' fiType='text' plcHolder={language === 'en' ? 'Subject' : 'Asunto'} isRequired={true} />
        <FormInput fiID='message' fiType='textarea' plcHolder={language === 'en' ? 'Your Message' : 'Su Mensaje'} isRequired={true} />
      </div>
      <CtaButton ctaType={'send'} title={language === 'en' ? 'Send Message' : 'Enviar Mensaje'} />
    </form>
  )
}

export { ContactForm }