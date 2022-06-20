import styles from "./user-chat-card.module.scss"

export default function UserChatCard() {
    const tags = ["apple", "banana", "pineapple"]

  return (
    <div className={styles.userchatcard}>
        <div className={`${styles["user-avatar"]}`}>
        </div>
        <div className={`${styles["user-username"]} app-title-3`}>
            Username
        </div>
        <div className={`${styles["user-tags"]}`}>
            {
                tags.map((tag, i)=> {
                    return(
                        <div key={i} className={styles.tag}>{tag}</div>
                    )
                })
            }
        </div>
    </div>
  )
}
