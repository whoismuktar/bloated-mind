import styles from "./waiting-loader.module.scss"

export default function WaitingLoader() {
  return (
    <div className={styles["loader-wrapper"]}>
        <div className={styles["chat-loader"]}>
            <div className={styles["chat-loader-dot"]}></div>
            <div className={styles["chat-loader-dot"]}></div>
            <div className={styles["chat-loader-dot"]}></div>
            <div className={styles["chat-loader-dot"]}></div>
            <div className={styles["chat-loader-dot"]}></div>
            <div className={styles["chat-loader-dot"]}></div>
        </div>
      </div>
  )
}
