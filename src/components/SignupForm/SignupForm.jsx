import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useState } from "react"

const SignupForm = ({ handleSubmit, handleInputChange, signupData }) => {
    const { email, username, password, avatar } = signupData

    return (
        <form onSubmit={handleSubmit} /*className={styles.loginForm}*/>
            <div>
                <label htmlFor="email"></label>
                <input autoComplete='username' name='email' value={email} onChange={handleInputChange} autoFocus id='email' type="email" placeholder='Email' required />
            </div>

            <div>
                <label htmlFor="username"></label>
                <input autoComplete='username' name='username' value={username} onChange={handleInputChange} autoFocus id='username' type="username" placeholder='username' required />
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

            <div className={styles.avatar}>
                <input
                    className={styles.fileInput}
                    name='avatar'
                    onChange={handleFileUpload}
                    id='avatar'
                    type="file"
                    placeholder='avatar'
                />
                <label htmlFor='avatar' className={styles.fileInputLabel}>
                    Upload Avatar
                </label>
            </div>

            <Link href={"/login"}><p  /*className={styles.signupLink}*/>Already have an account?</p></Link>

            <button type='submit'>Submit</button>
        </form>
    )
}

export default SignupForm