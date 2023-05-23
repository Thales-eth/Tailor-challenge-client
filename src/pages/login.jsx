import styles from "../styles/pages/LoginPage.module.css"
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../contexts/auth.context"
import { useRouter } from "next/router"
import LoginForm from "../components/LoginForm/LoginForm"
import authService from "../services/auth.service"
import Errors from "@/components/Errors/Errors"
import { ErrorContext } from "@/contexts/error.context"

const loginPage = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" })
    const { storeToken, authenticateUser } = useContext(AuthContext)
    const { errors, setErrors } = useContext(ErrorContext)
    const router = useRouter()

    useEffect(() => {
        return () => {
            setErrors([])
        }
    }, [])

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
            const { err } = error.response.data
            console.log("ASI ME LLEGA EL ERROR =>", err)
            setErrors(err)
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
            <Errors errors={errors} />
        </div>
    )
}

export default loginPage