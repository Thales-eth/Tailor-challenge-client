import LoginForm from "../components/LoginForm/LoginForm"
import Errors from "@/components/Errors/Errors"
import authService from "../services/auth.service"
import { ErrorContext } from "@/contexts/error.context"
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../contexts/auth.context"
import { useRouter } from "next/router"

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
            const authToken = await authService.login(loginData).then(({ data }) => data.authToken)
            await storeToken(authToken)
            await authenticateUser()
            router.push("/profile")
        }
        catch (error) {
            const { err } = error.response.data
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