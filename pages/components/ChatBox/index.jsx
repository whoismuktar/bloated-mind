import UserAvi from "../userAvi"
import EmojiPicker from "../EmojiPicker"
import io from "socket.io-client"
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
    const messageInput = useRef(null)
    const msgEnd = useRef(null)
    const [socket, setSocket] = useState(null)
    const [isConnected, setIsConnected] = useState(false)

    const getFormatedDate = (date) => {
        const d = new Date(date)
        const isValid = !isNaN(d)
        
        if (isValid) {
            const hour = d.getHours()
            const minute = d.getMinutes()
            return `${hour}:${minute}`
        } else {
            return date
        }
    }

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
        } else {
            return
        }
    }
    const submitMessage = () => {
        console.log(123);
        if (!message.trim()) return

        const collateMessage = {
            message: message.trim(),
            time: Date.now(),
            author: 1,
        }
        const newconversation = [...conversation, collateMessage]
        setConversation(newconversation)

        socket.emit("chat", `${message} ${new Date(Date.now())}`)

        setMessage("")        
        messageInput.current.focus()
    }

    const scrollToBottom = () => {
        msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(()=> {
        if (isMobile) {
            setOnMobile("on-Mobile")
        }

        scrollToBottom()
        messageInput.current.focus()

        const ioSocket = io.connect('http://localhost:8000', {
            'reconnection': true,
            'reconnectionDelay': 1000,
            'reconnectionAttempts': 2
          });
        // ("http://127.0.0.1:8000");
        console.log("useEffect ran");

        // Connect to IO Server on app init
        ioSocket.on("connect", (connect) => {
            ioSocket.send("User Connected!")
            setSocket(ioSocket)

            console.log({socket});
        })

        ioSocket.on('error', (error) => {
            console.log("error occurred", error);
            ioSocket.disconnect()
        });

        ioSocket.on('reconnect_error', (error) => {
            console.log("reconnect_error", error);
            ioSocket.disconnect()
        });

        ioSocket.on('reconnect_attempt', (attempt) => {
            if (attempt > 0) {
                console.log("reconnect_attempt");
                ioSocket.disconnect()
            }
        });

        ioSocket.on('disconnect', () => {
            setIsConnected(false);
            console.log("IO Socket DISCONNECTED!!!")
        });

        // Receive Message from IO Server
        ioSocket.on("message", (message) => {
            console.log("Socket message:", { message });
            if (message === "Connection Confirmed!") {
                const css = 'color: green; font-weight: bold; padding: 2px;'
                console.log(`%c${message}! `, css);
                setIsConnected(true)
            } else {
                console.log("Front End Received:", message);
            }
        })

        // Receive Custom Message from IO Server
        ioSocket.on("chat", (chat) => {
            console.log("Socket Chat~~:", { chat });            
        })

        console.log({isConnected});

        // On unMount
        return ()=> {
            ioSocket.off('connect');
            ioSocket.off('disconnect');
            ioSocket.off('message');
            ioSocket.off('chat');

            console.log("unmount");
        }
    }, [])
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

                                    <div className={styles.message}>
                                        <span>{conv.message}</span>
                                        <span className={styles.time}>
                                            {/* {isNaN(getFormatedDate(conv.time))} */}
                                            {getFormatedDate(conv.time)}
                                        </span>
                                    </div>
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
                    ref={messageInput}
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
