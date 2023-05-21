import Link from "next/link"
import { BsGithub, BsLinkedin, BsCodeSlash } from "react-icons/bs"

const Footer = () => {
    return (
        <div>
            <a href="https://github.com/Thales-eth" target="_blank" rel="noopener noreferrer">
                <BsGithub size={40} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <BsCodeSlash size={40} />
            </a>
            <a href="https://www.linkedin.com/in/dan-jimenez-hernandez" target="_blank" rel="noopener noreferrer">
                <BsLinkedin size={40} />
            </a>

        </div>
    )
}

export default Footer