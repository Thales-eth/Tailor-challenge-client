import styles from './LoginForm.module.css'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useState } from "react"
import Link from "next/link"

const LoginForm = ({ handleSubmit, handleInputChange, loginData }) => {
    const [canSee, setCanSee] = useState(false)
    const { email, password } = loginData

    function changeVision() {
        setCanSee(!canSee)
    }

    return (
        <form onSubmit={handleSubmit} className="authForm">
            <div>
                <label htmlFor="email"></label>
                <input autoComplete='username' name='email' value={email} onChange={handleInputChange} autoFocus id='email' type="email" placeholder='Email' required />
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

            <Link href={"/signup"}><p className="signupLink">Haven't created your account yet?</p></Link>

            <button className='submitButton' type='submit'>Submit</button>
        </form>
    )
}

export default LoginForm