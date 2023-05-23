import styles from './SignupForm.module.css'
import { useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import Link from "next/link"
import FileInput from '../FileInput/FileInput'

const SignupForm = ({ handleSubmit, handleInputChange, signupData, setSignupData }) => {
    const { email, username, password } = signupData
    const [canSee, setCanSee] = useState(false)

    function changeVision() {
        setCanSee(!canSee)
    }

    function handleFileUpload(e) {
        const image = e.target.files[0]
        const uploadData = new FormData()
        uploadData.append("imageUrl", image)
        setSignupData({ ...signupData, avatar: uploadData })
    }

    return (
        <form onSubmit={handleSubmit} className="authForm">
            <div>
                <label htmlFor="email"></label>
                <input autoComplete='username' name='email' value={email} onChange={handleInputChange} autoFocus id='email' type="email" placeholder='Email' required />
            </div>

            <div>
                <label htmlFor="username"></label>
                <input autoComplete='username' name='username' value={username} onChange={handleInputChange} autoFocus id='username' type="username" placeholder='username' required />
            </div>

            <div className="password">
                <label htmlFor="password"></label>
                <input autoComplete="current-password" name='password' value={password} onChange={handleInputChange} id='password' type={!canSee ? "password" : "text"} placeholder='Password' required />
                {
                    canSee ?
                        <AiFillEye onClick={changeVision} className="pwdLogo" color={"black"} size={34} />
                        :
                        <AiFillEyeInvisible onClick={changeVision} className="pwdLogo" color={"black"} size={34} />
                }
            </div>

            <FileInput handleFileUpload={handleFileUpload} msg={"Upload Avatar"} />

            <Link href={"/login"}><p className="signupLink">Already have an account?</p></Link>

            <button className="submitButton" type='submit'>Submit</button>
        </form>
    )
}

export default SignupForm