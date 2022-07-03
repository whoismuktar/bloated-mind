import { useState, useEffect } from "react"
import UserChatCard from "../components/UserChatCard"
import ChatBox from "../components/ChatBox"
import styles from "./chat.module.scss"
import { isMobile } from "../../app.config"

export default function Chat() {
  const [onMobile, setOnMobile] = useState("")

    useEffect(()=> {
        if(isMobile) {
            setOnMobile("on-Mobile")
        }
    }, [])

  return (
    <div className={`${styles["chat-pg"]} ${styles[onMobile]}`}>
      <div className={styles["chat-wrapper"]}>
        <div className={`${styles["usercard-wrapper"]} hidden sm:block`}>
          <UserChatCard />
        </div>

        <div className={`${styles["chatbox-wrapper"]}`}>
          <ChatBox />
        </div>
      </div>
    </div>
  )
}
