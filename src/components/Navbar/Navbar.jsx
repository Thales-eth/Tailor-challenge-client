import { AuthContext } from "@/contexts/auth.context"
import { useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const location = useRouter().asPath
    console.log("EL PATH =>", location)

    return (
        <div>
            <Link href={"/"}><h1>LET HIM COOK</h1></Link>
            {
                user
                    ?
                    <Link href={""} onClick={logout}>Logout</Link>
                    :
                    <>
                        <Link href={"/login"} >Login</Link>
                        <Link href={"/signup"} >Signup</Link>
                    </>
            }
        </div>
    )
}

export default Navbar