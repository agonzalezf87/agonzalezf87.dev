import { useState, useRef } from 'react'
import { CtaButton } from "../CtaButton"
import { FormInput } from "./FormInput"
import { FormSpinner } from "./FormSpinner"
import emailjs from '@emailjs/browser'
import "../../styles/ContactForm.component.css"

const SERVICE_ID = 'service_vkczyzq'
const PUBLIC_KEY = 'Fcw-qn1tCXObQBMPN'

function ContactForm({language}) {
  const {loading, setLoading} = useState(false)
  const TEMPLATE_ID = language === 'en' ? 'template_mmzbgli' : 'template_se96toz' 
  const form = useRef(null)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setLoading(true)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then(result => {
      form.current.reset()
    })
    .catch(error => {console.log(error.text)})
  }

  return (
    <div className="ContactForm__wrapper">
      <FormSpinner isLoading={true} isSuccess={false} isError={false} text={language === 'en' ? 'Sending message...' : 'Enviando el mensaje...'} />
      <form ref={form} className="ContactForm" onSubmit={handleSubmit}>
        <FormInput fiID='name' fiType='text' plcHolder={language === 'en' ? 'Full Name' : 'Nombre Completo'} isRequired={true} />
        <FormInput fiID='telephone' fiType='tel' plcHolder={language === 'en' ? 'Phone Number' : 'Número Telefónico'} isRequired={false} />
        <FormInput fiID='email' fiType='email' plcHolder={language === 'en' ? 'E-Mail' : 'Correo Elecrónico'} isRequired={true} />
        <FormInput fiID='subject' fiType='text' plcHolder={language === 'en' ? 'Subject' : 'Asunto'} isRequired={true} />
        <FormInput fiID='message' fiType='textarea' plcHolder={language === 'en' ? 'Your Message' : 'Su Mensaje'} isRequired={true} />
        <CtaButton ctaType={'send'} title={language === 'en' ? 'Send Message' : 'Enviar Mensaje'} />
      </form>
    </div>
  )
}

export { ContactForm }