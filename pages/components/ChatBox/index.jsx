import { BsEmojiSmile } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"
import UserAvi from "../userAvi"
import EmojiPicker from "../EmojiPicker"
import { useState } from "react"
import styles from "./chat-box.module.scss"

export default function ChatBox() {
    const dummyConversations = [
        {
            message: "Hello",
            time: "9:00",
            author: 2
        },
        {
            message: "Hi",
            time: "9:01",
            author: 1
        },
        {
            message: "How are you doing?",
            time: "9:03",
            author: 1
        },
        {
            message: "I am okay",
            time: "9:01",
            author: 2
        },
    ]
    const [message, setMessage] = useState("")
    const [currentUser, setCurrentUser] = useState(1)
    const [showEmoji, setShowEmoji] = useState(false)
    const [conversation, setConversation] = useState(dummyConversations)

    const toggleEmoji = () => {
        setShowEmoji(!showEmoji)
    }
    const addEmoji = (e) => {
        const emoji = e.native;
        setMessage(`${message} ${emoji}`)
    }

    const submitMessage = (e) => {
        if (!message.trim()) return

        if (e.key && e.key !== "Enter") {
            return
        }

        const collateMessage = {
            message: message.trim(),
            time: Date.now(),
            author: 1,
        }
        const appendconversation = [...conversation, collateMessage]
        setConversation(appendconversation)
        setMessage("")
    }

    return (
        <div className={styles.chatbox}>
            <div className={styles.conversations}>
                {
                    conversation.map((conv, i) => {
                        return (
                            <div key={i} className={`${conv.author === currentUser ? styles.myOwnAuthor : styles.otherAuthor}`}>
                                <div className={styles["message-wrapper"]}>
                                    {
                                        conv.author != currentUser && <div className={styles["user-avatar"]}>
                                            <UserAvi aviWidth="50" aviHeight="50" />
                                        </div>
                                    }

                                    <div className={styles.message}>{conv.message}</div>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <div className={styles.sender}>
                    <div className={styles["message-wrapper"]}>
                        <div className={styles["user-avatar"]}>
                            <UserAvi aviWidth="50" aviHeight="50" />
                        </div>

                        <div className={styles.message}>Hello</div>
                    </div>
                </div>

                <div className={styles.receiver}>
                    <div className={styles["message-wrapper"]}>
                        <div className={styles.message}>Hello</div>
                    </div>
                </div> */}
            </div>

            <div className={styles["message-input"]}>
                <div className={styles["emoji-wrapper"]} onClick={toggleEmoji}>
                    <BsEmojiSmile />
                    {showEmoji && <EmojiPicker onEmojiSelect={addEmoji} preview={false} />}
                </div>
                <textarea
                    type="text"
                    name="messageInput"
                    id="messageInput"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    autoComplete="off"
                    onKeyDown={submitMessage}
                ></textarea>
                <button id={styles.sendMessage} onClick={submitMessage}>
                    <FaTelegramPlane />
                </button>
            </div>
        </div>
    )
}
