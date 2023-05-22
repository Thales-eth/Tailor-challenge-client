import styles from "../styles/pages/LoginPage.module.css"
import { useState, useContext } from "react"
import { AuthContext } from "../contexts/auth.context"
import { useRouter } from "next/router"
import LoginForm from "../components/LoginForm/LoginForm"
import authService from "../services/auth.service"

const loginPage = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const { storeToken, authenticateUser } = useContext(AuthContext)
    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const loginResponse = await authService.login(loginData).then(({ data }) => data)
            const { authToken } = loginResponse
            await storeToken(authToken)
            await authenticateUser()
            router.push("/profile")
        }
        catch (error) {
            // GESTIÓN DE ERRORES!!!
            console.log("Error de Auth =>", error)
        }
    }

    function handleInputChange(e) {
        const { name, value } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    return (
        <div className="authPage">
            <h1 className="authHeader">Login</h1>
            <LoginForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} loginData={loginData} />
        </div>
    )
}

export default loginPage