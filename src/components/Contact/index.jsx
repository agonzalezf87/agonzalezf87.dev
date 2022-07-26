import { SectionTitle } from "../SectionTitle"
import { ContactForm } from "../ContactForm"
import "../../styles/Contact.component.css"

const Contact = ({language}) => {
  return (
    <section className="Contact" id="Contact">
      <SectionTitle 
        text={language === "en" ? "Contact Me" : "Contáctame"}
        icon='cont'
        variant={false}
      />
      <ContactForm language={language} />
    </section>
  )
}

export { Contact }