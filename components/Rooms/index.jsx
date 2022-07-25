import PageHeader from "../PageHeader"
import styles from "./rooms.module.scss"

export default function Rooms({ setSelectedRoom }) {
    return (
        <>
            <PageHeader title="Rooms" subtitle="Choose a room" />
            <div className={styles.rooms}>
                <div className={styles["rooms-wrapper"]}>
                    <div className={`${styles["room-card"]} ${styles["room-card-left"]} app-card borderTest p-10`} onClick={() => setSelectedRoom("clearMind")}>
                        <div className="app-title-1">
                            Clear your mind
                        </div>
                    </div>
                    <div className={` ${styles["room-cardd"]} ${styles["room-card-right"]}`}>
                        <div className={`${styles["room-card"]} app-card borderTest p-10`} onClick={() => setSelectedRoom("makeFriend")}>
                            <div className="app-title-1">
                                Make a friend
                            </div>
                        </div>
                        <div className={`${styles["room-card"]} app-card borderTest p-10`} onClick={() => setSelectedRoom("rant")}>
                            <div className="app-title-1">
                                Rant
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
        </> 
    )
}