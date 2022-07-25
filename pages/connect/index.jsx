
import Rooms from "../components/Rooms"
import WaitingLoader from "../components/WaitingLoader"
import { useState, useEffect } from "react"
import io from "socket.io-client"

export default function Connect() {
    const [selectedRoom, setSelectedRoom] = useState(null)
    const [socket, setSocket] = useState(false)
    const [connected, setConnected] = useState(false)

    // useEffect(() => {
    //     const newSocket = io(`http://127.0.0.1:8000`);
    //     setSocket(newSocket);
    //     console.log(newSocket);
    //     return () => newSocket.close();
    //   }, [setSocket]);

    useEffect(() => {
        const ioSocket = io.connect("http://127.0.0.1:8000");

        // Connect to IO Server on app init
        ioSocket.on("connect", (connect) => {
            console.log("Init Connection", { connect }, { ioSocket });
            // ioSocket.emit("commando", "Coo Mode")
            ioSocket.send("User Connected!")
            // ioSocket.emit("commando", "Coo Mode")
        })


        // Receive Message from IO Server
        ioSocket.on("message", (message) => {
            console.log("Socket message:", { message });
            if (message === "Connection Confirmed!") {
                const css = 'color: green; font-weight: bold; padding: 2px;'
                console.log(`%c${message}! `, css);
                setConnected(true)
            }
        })

        // ioSocket.on("chat", (chat) => {
        //     console.log("Socket Chat!", { chat });
        // })


        // ioSocket.on("User Connected", (connected) => {
        //     console.log("Socket Connect!", { connected });
        //     // ioSocket.emit("commando", "Coo Mode")
        // })

        // ioSocket.on("chat", (chat) => {
        //     console.log("Socket chat!", { chat }, ioSocket);
        //     setConnected(true)
        // })
        // ioSocket.on("json", (json) => {
        //     console.log("Socket Json!", { json }, ioSocket);
        //     setConnected(true)
        // })

        
        return ()=> {
            if (ioSocket) {
                return ioSocket.close()
            }
        }
    }, [setSocket]);

    return (
        <>
            {
                !connected ?
                <div className="app-dialog app-dialog_shallow">
                    <strong>There&quot;s been an error connecting you :{JSON.stringify(connected)}</strong>
                </div> :
                <>
                    {!selectedRoom && <Rooms setSelectedRoom={setSelectedRoom} />}
                    {selectedRoom && <WaitingLoader />}
                </>
            }
        </>
    )
}
