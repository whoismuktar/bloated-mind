import styles from "./auth.module.scss"
import Image from "next/image"
import { useRouter } from "next/router";

export default function Register({setSignUpMode}) {
    const router = useRouter()
    const submitRegister = (e) => {
        e.preventDefault();
        console.log("init register")
    }

  return (
    <div className={styles.register}>
        <div className="app-title-2 text-center mb-2">Create an account</div>
        <div className="app-subtitle-1 text-center mb-7">Your anonymous friends are yours to keep</div>

        <form action="#">
            <input type="text" placeholder="Email" name="email" id="email" />
            <input type="text" placeholder="Password" name="password" id="password" />
            <input type="text" placeholder="Anon Username" name="anonymousUsername" id="anonymousUsername" />

            <button className="cta-btn" type="submit" onClick={submitRegister}>
                Create Account
            </button>
        </form>

        <button className="flex google-cta">
            {/* <div className={`${styles["google-icon"]} mr-2`}> */}
            <div className="google-icon">
                <Image src="/google-icon.png" width="25" height="25" alt="google icon" />
            </div>
            Sign up with Google
        </button>

        <div className={`${styles["switch-auth"]} to-login`}>
            <span>Already have an account?</span>
            <button onClick={()=> setSignUpMode(false)}>
                <strong>Log In</strong>
            </button>
        </div>
    </div>
  )
}
