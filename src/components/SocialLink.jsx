import {FaGithub, FaLinkedinIn, FaTwitter, FaSkype} from 'react-icons/fa'
import '../styles/SocialLink.component.css'

const SocialLink = ({url, alt, icon}) => {
    return (
        <a className="SocialLink" href={url} alt={alt} target='_blank' title={alt}>
            {icon === 'gh' ? <FaGithub/> : icon === 'li' ? <FaLinkedinIn/> : icon === 'tw' ? <FaTwitter/> : <FaSkype/>}
        </a>
    )
}

export { SocialLink }