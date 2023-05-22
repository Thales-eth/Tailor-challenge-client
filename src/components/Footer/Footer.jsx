import styles from './Footer.module.css'
import { BsGithub, BsLinkedin, BsCodeSlash } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.footerList}>
                <li>
                    <a href="https://github.com/Thales-eth" target="_blank" rel="noopener noreferrer">
                        <BsGithub className={styles.logo} size={40} />
                    </a>
                </li>
                <li>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <BsCodeSlash className={styles.logo} size={40} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/dan-jimenez-hernandez" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin className={styles.logo} size={40} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer