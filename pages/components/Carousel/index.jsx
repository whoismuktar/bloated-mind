import { useState, useEffect } from 'react'
import styles from "./carousel.module.scss"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function Carousel(props) {
    const [currentIdx, setCurrentIdx] = useState(0)
    const prevSlide = () => {
        if (props.cycle) {
            if (currentIdx === 0) {
                setCurrentIdx(props.items.length - 1)
            } else {
                setCurrentIdx(currentIdx - 1)
            }
        } else {
            if (currentIdx === 0) return
            setCurrentIdx(currentIdx - 1)
        }
    }
    const nextSlide = () => {
        if (props.cycle) {
            if (currentIdx === props.items.length - 1) {
                setCurrentIdx(0)
            } else {
                setCurrentIdx(currentIdx + 1)
            }
        } else {
            if (currentIdx === props.items.length - 1) return
            setCurrentIdx(currentIdx + 1)
        }
    }
    const currentSlide = () => {
        return props.items[currentIdx]
    }

    // useEffect(() => {
    //     if (props.autoRotate) {
    //         setInterval(nextSlide(), 5000);
    //     }
    // }, [])


    return (
        <div className={styles.carousels}>
            {props.items.map((item, i) => {
                return (
                    <div key={i} className={`${styles.carousel} ${i === currentIdx ? styles["carousel-active"] : styles["carousel-not-active"]}`} style={{ backgroundColor: props.useColor && item.color }}>
                        {
                            !props.useColorBG &&
                            <div className={styles.slide} style={{ backgroundImage: `url('${item.image}')` }}></div>
                        }
                        {
                            props.showOverlayText && <div className={styles["overlayText"]}>{item.text}</div>
                        }
                        {
                            props.showCaption && <div className={styles.caption}>{item.caption}</div>
                        }
                        {
                            props.showArrows && <div className={styles.arrows}>
                                <div className={styles["left-arrow"]}>
                                    <button onClick={prevSlide}>
                                        <BsArrowLeftCircle className={styles["arrow-icon"]} />
                                    </button>
                                </div>
                                <div className={styles["right-arrow"]}>
                                    <button onClick={nextSlide}>
                                        <BsArrowRightCircle className={styles["arrow-icon"]} />
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                )
            })}
        </div>
    )
}
