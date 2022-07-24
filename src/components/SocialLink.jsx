import '../styles/SocialLink.component.css'

const SocialLink = (props) => {
    return (
        <a className="SocialLink" href={props.url} alt={props.alt} target='_blank' title={props.alt}><i className={props.icon}></i></a>
    )
}

export { SocialLink }