import Image from "next/image"
import styles from "./hero.module.scss"
import { useRouter } from "next/router"

export default function HomeHero() {
    const router = useRouter()

  return (
    <div className={`${styles["hero-section"]} grid gap-2 pt-10 lg:pt-0 lg:grid-cols-2 sm:grid-cols-1`}>
        <div className={`${styles["hero-leftside"]}`}>
            <div className={`${styles["hero-text"]} w-4/5 lg:w-3/5`}>
                <div className={styles["hero-title"]}>
                    Speak to Someone, Listen to Someone
                </div>
                <div className={styles["hero-subtitle"]}>
                    With so much on your mind, find someone to speak to or create time to listen to someone.
                </div>

                <div className={`${styles["hero-cta"]} lg:flex`}>
                    <div className="w-full lg:w-min text-center mr-4">
                        <button className="w-full bg-white h-12 text-black rounded sm:w-1/2 lg:w-48">Log on</button>
                        <div className="caption-tiny text-center">To continue conversation with your anonymous friend</div>
                    </div>

                    <div className="w-full lg:w-min text-center mt-4 lg:mt-0">
                        <button
                            className="w-full bg-orange h-12 text-black rounded sm:w-1/2 lg:w-48"
                            onClick={()=> router.push("/connect")}
                        >
                            One Off
                        </button>
                        {/* <div className="caption-tiny mx-auto w-1/2 text-center">Continue conversation with your anonymous friend</div> */}
                    </div>
                </div>
            </div>
        </div>

        <div className={`${styles["hero-rightside"]} hidden lg:block`}>
        </div>
    </div>
  )
}
