import Login from "./Login"
import Register from "./Register"
import styles from "../../styles/Auth.module.scss"
import { useState, useEffect } from "react";
import API from "../api/axios";

export default function Auth() {
    const [identity, setIdentity] = useState("");
    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState();

    useEffect(() => {
        const getRooms = async () => {
            const response = await API.get("/rooms")
            setRooms(response.data.rooms);
        }
        
        getRooms()
    }, [])
    console.log(rooms);

    return(
        <div className={`${styles.auth} gradientBG __fixed`}>
            {
                !room && <>
                    {
                        identity === 'anoymous' || identity === '' ?
                            <div className={`${styles.pageWrapper} allChildrenCenter`}>
                                <h1 className="text-3xl font-bold text-white">Enter As</h1>

                                <div className="dflex mt-5">
                                    <button className="rounded-full bg-white" onClick={() => setIdentity("unanonymous")}>Own Profile</button>

                                    <span className="mx-4"></span>

                                    <button className="rounded-full bg-white" onClick={() => setIdentity("anonymous")}>One Off Conversation</button>
                                </div>
                            </div>
                            : identity === 'unanonymous' ?
                                <div className={`${styles.pageWrapper} allChildrenCenter`}>
                                    <h1 className="text-3xl font-bold text-white">Choose Room</h1>

                                    <div className="mt-5">
                                        <div className={styles.__rooms}>
                                            {
                                                rooms.map((room) => {
                                                    return (
                                                        <div key={room.id} className={styles._room}>
                                                            <button className="rounded-full bg-white" onClick={() => setRoom(room.id)}>
                                                                {room.name}
                                                            </button>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            : ""
                    }
                </>
            }
            {
                room && <div className={`${styles.pageWrapper} allChildrenCenter`}>
                    <h1 className="text-3xl font-bold text-white">Waiting<span className="dots-loading">...</span></h1>

                    <div className="mt-5">
                        <div className={styles.__rooms}>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}