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
        <form onSubmit={handleSubmit} /*className={styles.loginForm}*/>
            <div>
                <label htmlFor="email"></label>
                <input autoComplete='username' name='email' value={email} onChange={handleInputChange} autoFocus id='email' type="email" placeholder='Email' required />
            </div>

            <div /*className={styles.password}*/>
                <label htmlFor="password"></label>
                <input autoComplete="current-password" name='password' value={password} onChange={handleInputChange} id='password' type={!canSee ? "password" : "text"} placeholder='Password' required />
                {
                    canSee ?
                        <AiFillEye onClick={changeVision} /*className={styles.pwdLogo}*/ color={"black"} size={34} />
                        :
                        <AiFillEyeInvisible onClick={changeVision} /*className={styles.pwdLogo}*/ color={"black"} size={34} />
                }
            </div>

            <Link href={"/signup"}><p  /*className={styles.signupLink}*/>Haven't created your account yet?</p></Link>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default LoginForm