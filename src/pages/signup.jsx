import authService from "@/services/auth.service"
import SignupForm from "@/components/SignupForm/SignupForm"
import Loader from "@/components/Loader/Loader"
import Errors from "@/components/Errors/Errors"
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { AuthContext } from "@/contexts/auth.context"
import { ErrorContext } from "@/contexts/error.context"
import { getCloudinaryLink } from "@/utils/getCloudinaryLink"

const signupPage = () => {
    const [signupData, setSignupData] = useState({ username: "", password: "", email: "", avatar: "" })
    const [showLoading, setShowLoading] = useState(false)
    const { storeToken, authenticateUser, } = useContext(AuthContext)
    const { errors, setErrors } = useContext(ErrorContext)
    const router = useRouter()

    useEffect(() => {
        return () => {
            setErrors([])
        }
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        setShowLoading(true)

        try {
            const cloudinaryLink = await getCloudinaryLink(signupData.avatar)
            const authToken = await authService.signup({ ...signupData, avatar: cloudinaryLink }).then(({ data }) => data.authToken)
            await storeToken(authToken)
            await authenticateUser()
            router.push("/profile")
        }
        catch (error) {
            setShowLoading(false)
            const { err } = error.response.data
            setErrors(err)
        }
    }

    function handleInputChange(e) {
        const { name, value } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    return (
        showLoading
            ?
            <Loader />
            :
            <div className="authPage">
                <h1 className="authHeader">Signup</h1>
                <SignupForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} signupData={signupData} setSignupData={setSignupData} />
                <Errors errors={errors} />
            </div>
    )
}

export default signupPage