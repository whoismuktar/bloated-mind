import Login from "./Login"
import Register from "./Register"
import Carousel from "../components/Carousel";
// import styles from "../../styles/Auth.module.scss"
import styles from "./auth.module.scss"
import { useState, useEffect } from "react";
import Logo from "../components/Nav/Logo";

export default function Auth({setPageConfig}) {
    const pageConfig = {
        noFooter: true,
        noNav: true
    }
    const [signUpMode, setSignUpMode] = useState(true)
    const [config, setConfig] = useState(pageConfig)
    const slides = [
        {
            image: "/t-model1.jpeg",
            text: "Lorem Ipsum got me 1",
            caption: "Caption 1",
            color: "blue",
            author: "Shade Brooks"
        },
        {
            image: "/t-model7.jpeg",
            text: "Lorem Ipsum got me 3",
            caption: "Caption 3",
            color: "purple",
            author: "Fadekemi Orishade"
        },
        {
            image: "/t-model8.jpeg",
            text: "Lorem Ipsum got me 3",
            caption: "Caption 3",
            color: "purple",
            author: "Fadekemi Orishade"
        },
        {
            image: "/t-model9.jpg",
            text: "Lorem Ipsum got me 3",
            caption: "Caption 3",
            color: "purple",
            author: "Fadekemi Orishade"
        },
        {
            image: "/t-model11.jpeg",
            text: "Lorem Ipsum got me 3",
            caption: "Caption 3",
            color: "purple",
            author: "Fadekemi Orishade"
        },
    ]

    useEffect(() => {
        setPageConfig(config)
    }, [config, setPageConfig])

    return (
        <div className={`${styles.auth}`}>
            <div className={`${styles["auth-wrapper"]}`}>
                <div className="user-story-banner w-4/6">
                    <Carousel
                        items={slides}
                        showOverlayText={true}
                        showCaption={true}
                        showArrows={true}
                        cycle={true}
                        autoRotate={true}
                    />
                </div>
                <div className={`${styles["auth-card"]} allChildrenCenter w-2/6`}>
                    <Logo />
                    { signUpMode ? <Register setSignUpMode={setSignUpMode} /> : <Login setSignUpMode={setSignUpMode} /> }
                </div>
            </div>
        </div>
    )
}