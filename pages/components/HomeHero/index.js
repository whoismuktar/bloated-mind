import Image from "next/image"
import styles from "./hero.module.scss"

export default function HomeHero() {
  return (
    <div className={`${styles["hero-section"]} grid grid-cols-2 gap-2`}>
        <div className={styles["hero-leftside"]}>            
            <div className={styles["hero-text"]}>
                <div className={styles["hero-title"]}>
                    Speak to Someone, Listen to Someone
                </div>
                <div className={styles["hero-subtitle"]}>
                    With so much on your mind, find someone to speak to or create time to listen to someone.
                </div>

                <div className={styles["hero-cta"]}>
                    <button className="bg-white text-black rounded mr-4">Get Started</button>
                    <button className="bg-orange text-white rounded">Say Your Mind</button>
                </div>
            </div>
        </div>

        <div className={styles["hero-rightside"]}>
        </div>
    </div>
  )
}
