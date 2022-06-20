import UserChatCard from "../components/UserChatCard"
import ChatBox from "../components/ChatBox"
import { useEffect } from "react"
import styles from "./chat.module.scss"

export default function Chat() {
  // useEffect(()=> {
  // })
  return (
    <div className={styles["chat-pg"]}>
      <div className={styles["chat-wrapper"]}>
        <div className={styles["usercard-wrapper"]}>
          <UserChatCard />
        </div>

        <div className={styles["chatbox-wrapper"]}>
          <ChatBox />
        </div>
      </div>
    </div>
  )
}
