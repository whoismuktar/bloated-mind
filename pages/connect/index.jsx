
import Rooms from "../components/Rooms"
import WaitingLoader from "../components/WaitingLoader"
import { useState } from "react"

export default function Connect() {
    const [selectedRoom, setSelectedRoom] = useState(null)
    return (
    <>
            { !selectedRoom && <Rooms setSelectedRoom={setSelectedRoom}  />}
            { selectedRoom && <WaitingLoader />}
        </>
    )
}
