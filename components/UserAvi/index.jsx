import Image from "next/image"
import styles from "./user-avi.module.scss"

export default function UserAvi(props) {
    const avatar = props.avatar || "/user-avatar.png"
    const aviWidth = props.aviWidth || 150
    const aviHeight = props.aviHeight || 150

  return (
    <div className={styles["avatar-wrapper"]}>
        <div className={styles["user-avatar"]}>
            <Image src={avatar} width={aviWidth} height={aviHeight} objectFit="cover" objectPosition="center" alt="user avatar" />
        </div>
    </div>
  )
}
