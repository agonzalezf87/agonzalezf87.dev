import { Link } from "wouter"

const SocialLink = (props) => {
    return (
        <a href={props.url} alt={props.alt} target='_blank' title={props.alt}><i className={props.icon}></i></a>
    )
}

export { SocialLink }