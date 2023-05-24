import styles from './Navbar.module.css'
import Link from "next/link"
import { AuthContext } from "@/contexts/auth.context"
import { useContext } from "react"
import { useRouter } from "next/router"

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const currentUrl = useRouter().asPath

    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <div className={styles.navBlock}>
                    <li className={styles.brandLogo}><Link href={"/"}><h1>Let Him Cook</h1></Link></li>
                </div>
                <div className={`flexContainer ${styles.mainLinks} ${styles.navBlock}`}>
                    <li><Link className={currentUrl === "/" ? styles.active : ""} href={"/"}>Home</Link></li>
                    <li><Link className={currentUrl === "/restaurants" ? styles.active : ""} href={"/restaurants"}>Restaurants</Link></li>
                    <li><Link className={currentUrl === "/restaurants/create" ? styles.active : ""} href={"/restaurants/create"}>Create</Link></li>
                </div>

                <div className={`flexContainer ${styles.authLinks} ${styles.navBlock}`}>
                    {
                        user
                            ?
                            <>
                                <Link href={""} onClick={logout} className={`${styles.btn} ${styles.logoutBtn}`}>Logout</Link>
                                <Link href={"/profile"} className={`${styles.btn} ${styles.profileBtn}`}>My profile</Link>
                            </>
                            :
                            <>
                                <Link className={`${styles.btn} ${styles.loginBtn}`} href={"/login"}>Login</Link>
                                <Link className={`${styles.btn} ${styles.signupBtn}`} href={"/signup"}>Signup</Link>
                            </>
                    }
                </div>
            </ul>

        </nav>

    )
}

export default Navbar