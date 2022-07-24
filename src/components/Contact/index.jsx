import { SectionTitle } from "../SectionTitle"

const Contact = ({language}) => {
  return (
    <section className="Contact" id="Contact">
      <SectionTitle 
        text={language === "en" ? "Contact Me" : "Contáctame"}
        icon='cont'
        variant={false}
      />
    </section>
  )
}

export { Contact }