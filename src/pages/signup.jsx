import authService from "@/services/auth.service"
import SignupForm from "@/components/SignupForm/SignupForm"
import { useState } from "react"
import { useRouter } from "next/router"

const signupPage = () => {

    const [signupData, setSignupData] = useState({ username: "", password: "", email: "", avatar: "" })
    const router = useRouter()

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("LA DATA DEL SIGNUP =>", signupData)
        await authService.signup(signupData)
        router.push("/login")
    }

    function handleInputChange(e) {
        const { name, value } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    return (
        <div>
            <h1>Signup</h1>
            <SignupForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} signupData={signupData} />
        </div>
    )
}

export default signupPage