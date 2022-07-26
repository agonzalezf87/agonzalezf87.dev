import { useRef } from 'react'
import "../../styles/ContactForm.component.css"
import { CtaButton } from "../CtaButton"
import { FormInput } from "./FormInput"
import "../../styles/ContactForm.component.css"

function ContactForm({language}) {
  const form = useRef(null)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    const formData = new FormData(form.current)
    const conctactData = {
      'name': formData.get('name'),
      'telephone': formData.get('telephone'),
      'email': formData.get('email'),
      'subject': formData.get('subject'),
      'message': formData.get('message'),
    }
    
    fetch('/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: conctactData
    })
    .then(() => {
      form.current.reset()
      alert(language === 'en' ? "Thanks for writing, I'll be in touch soon." : "Gracias por escribir, pronto me pondré en contacto.")
    })
    .catch(error => alert(error))
  }

  return (
    <form ref={form} className="ContactForm" name="ContactForm" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
      <div className="ContactForm__wrapper">
        <input type='hidden' name='form-name' value='ContactForm' />
        <FormInput fiID='name' fiType='text' plcHolder={language === 'en' ? 'Full Name' : 'Nombre Completo'} isRequired={true} />
        <FormInput fiID='telephone' fiType='tel' plcHolder={language === 'en' ? 'Phone Number' : 'Número Telefónico'} isRequired={false} />
        <FormInput fiID='email' fiType='email' plcHolder={language === 'en' ? 'E-Mail' : 'Correo Elecrónico'} isRequired={true} />
        <FormInput fiID='subject' fiType='text' plcHolder={language === 'en' ? 'Subject' : 'Asunto'} isRequired={true} />
        <FormInput fiID='message' fiType='textarea' plcHolder={language === 'en' ? 'Your Message' : 'Su Mensaje'} isRequired={true} />
      </div>
      <div hidden><input name="bot-field" /></div>
      <CtaButton ctaType={'send'} title={language === 'en' ? 'Send Message' : 'Enviar Mensaje'} />
    </form>
  )
}

export { ContactForm }