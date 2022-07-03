import UserAvi from "../userAvi"
import EmojiPicker from "../EmojiPicker"
import styles from "./chat-box.module.scss"
import { useState, useEffect, useRef } from "react"
import { isMobile } from "../../../app.config"
import { BsEmojiSmile } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"

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
    const [onMobile, setOnMobile] = useState("")
    const convRef = useRef(null)
    const lastMsgRef = useRef(null)
    const msgEnd = useRef(null)

    const toggleEmoji = () => {
        setShowEmoji(!showEmoji)
    }
    const addEmoji = (e) => {
        const emoji = e.native;
        setMessage(`${message} ${emoji}`)
    }

    const submitWithEnter = (e) => {        
        if (e.key && (e.key === "Enter" && e.shiftKey)) {
            return setMessage(`${message}\n`)
        } else if (e.key && e.key === "Enter") {
            e.preventDefault()
            submitMessage()
        }
    }
    const submitMessage = () => {
        if (!message.trim()) return

        const collateMessage = {
            message: message.trim(),
            time: Date.now(),
            author: 1,
        }
        const newconversation = [...conversation, collateMessage]
        setConversation(newconversation)
        setMessage("")
    }

    const scrollToBottom = () => {
        msgEnd.current.scrollIntoView({ behavior: "smooth" });
      }

    useEffect(()=> {
        if(isMobile) {
            setOnMobile("on-Mobile")
        }

        scrollToBottom()
    })
    // BUG
    // mobile bug when dependency [conversation] is added

    return (
        <div className={`${styles.chatbox} ${styles[onMobile]}`} ref={convRef}>
            {
                onMobile && <div className={styles["conv-user-card"]}>
                    <div className={`${styles["user-avatar"]}`}>
                        <UserAvi aviWidth={50} aviHeight={50} />
                    </div>
                        <div className={`${styles["user-meta"]}`}>
                            <h1 className={`${styles["user-name"]}`}>Username</h1>

                            <div className={`${styles["user-status"]}`}>
                                <span className={`${styles["status-online"]}`}>Online</span>
                                <span className={`${styles["status-away"]}`}>Away</span>
                                <span className={`${styles["status-offline"]}`}>Offline</span>
                            </div>
                        </div>
                </div>
            }
            <div className={`${styles.conversations}`}>
                <h1 className="mb-10">{onMobile}</h1>
                {
                    conversation.map((conv, i) => {
                        return (
                            <div key={i} className={`${conv.author === currentUser ? styles.myOwnAuthor : styles.otherAuthor}`}>
                                <div className={styles["message-wrapper"]} ref={i == conversation.length-1 ? lastMsgRef : ref => conv[i] = ref}>
                                    {
                                        conv.author != currentUser && <div className={styles["user-avatar"]}>
                                            <UserAvi aviWidth="30" aviHeight="30" />
                                        </div>
                                    }

                                    <div className={styles.message}>{conv.message}</div>
                                </div>
                            </div>
                        )
                    })
                }
                <div ref={msgEnd} id="msgEnd"></div>

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
                { !isMobile &&
                    <div className={styles["emoji-wrapper"]} onClick={toggleEmoji}>
                        <BsEmojiSmile />
                        {showEmoji && <EmojiPicker onEmojiSelect={addEmoji} preview={false} />}
                    </div>
                }
                <textarea
                    type="text"
                    name="messageInput"
                    id="messageInput"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    autoComplete="off"
                    onKeyDown={submitWithEnter}
                ></textarea>
                <button id={styles.sendMessage} onClick={submitMessage}>
                    <FaTelegramPlane />
                </button>
            </div>
        </div>
    )
}
