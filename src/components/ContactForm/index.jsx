import { useState, useRef } from 'react'
import { CtaButton } from "../CtaButton"
import { FormInput } from "./FormInput"
import { FormSpinner } from "./FormSpinner"
import emailjs from '@emailjs/browser'
import "../../styles/ContactForm.component.css"

const SERVICE_ID = 'service_vkczyzq'
const PUBLIC_KEY = 'Fcw-qn1tCXObQBMPN'

function ContactForm({language}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [message, setMessage] = useState('')
  const form = useRef(null)

  const TEMPLATE_ID = language === 'en' ? 'template_mmzbgli' : 'template_se96toz' 

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setLoading(true)
    setMessage(language == 'en' ? "Sending message..." : "Enviando mensaje..")
    setError(false)
    setSuccess(false)
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then(result => {
      if(result.status === 200){
        form.current.reset()
        setLoading(false)
        setSuccess(true)
        setMessage(language == 'en' ? "Your message was sent." : "Su mensaje ha sido enviado.")
        setTimeout(() => setSuccess(false), 1000)
      } else {
        setLoading(false)
        setError(true)
        setMessage(language == 'en' ? `Something went wrong. Try again.` : `Algo salió mal. Intente de nuevo.`)
        setTimeout(() => setError(false), 1000)
      }
    })
    .catch(error => {
      setLoading(false)
      setError(true)
      setMessage(language == 'en' ? `Error: ${error}. Try again.` : `Error: ${error}. Intente de nuevo.`)
      setTimeout(() => setError(false), 1000)
    })
  }

  return (
    <div className="ContactForm__wrapper">
      {!!loading && (
        <FormSpinner icon='loading' message={message} />
      )}
      {!!success && (
        <FormSpinner icon='success' message={message} />
      )}
      {!!error && (
        <FormSpinner icon='error' message={message} />
      )}
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