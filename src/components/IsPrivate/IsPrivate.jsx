import { AuthContext } from "@/contexts/auth.context"
import { useRouter } from "next/router"
import { useContext } from "react"
import Loader from "../Loader/Loader"

const IsPrivate = ({ Component }) => {
    const { user, isLoading } = useContext(AuthContext)
    const router = useRouter()

    if (isLoading) return <Loader />

    if (!user) {
        router.push("/login")
        return
    }

    return (
        <Component />
    )
}

export default IsPrivate