import Image from "next/image"
import styles from "./hero.module.scss"

export default function HomeHero() {
  return (
    <div className={`${styles["hero-section"]} grid grid-cols-2 gap-2`}>
        <div className={`${styles["hero-leftside"]}`}>
            <div className={styles["hero-text"]}>
                <div className={styles["hero-title"]}>
                    Speak to Someone, Listen to Someone
                </div>
                <div className={styles["hero-subtitle"]}>
                    With so much on your mind, find someone to speak to or create time to listen to someone.
                </div>

                <div className={`${styles["hero-cta"]} flex`}>
                    <div className="w-min mr-4">
                        <button className="bg-white h-12 text-black rounded w-48">Log on</button>
                        <div className="caption-tiny text-center">To continue conversation with your anonymous friend</div>
                    </div>

                    <div className="text-center">
                        <button className="bg-orange h-12 text-white rounded w-48">One Off</button>
                        {/* <div className="caption-tiny mx-auto w-1/2 text-center">Continue conversation with your anonymous friend</div> */}
                    </div>
                </div>
            </div>
        </div>

        <div className={styles["hero-rightside"]}>
        </div>
    </div>
  )
}
