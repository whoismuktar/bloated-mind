import { useState, useEffect } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import HomeHero from '../components/HomeHero'
// import SideNav from './components/sideMenu'

export default function Home({setPageConfig}) {
  const pageConfig = {
      noTopSpace: true
  }
  const [config, setConfig] = useState(pageConfig)

  useEffect(() => {
      setPageConfig(config)
  }, [config, setPageConfig])

  return (
    <div className={`${styles["app-home"]} bg-appGray`}>
      <div className={styles.main}>
        <HomeHero />
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 gap-8 px-4 pt-10">
        <div className={styles["intro-section-left"]}>
            <div className={`${styles["intro-featured-img"]} inline-block`}>
              <Image src="/model1.jpeg" width={400} height={500} alt="model" />
            </div>
          </div>

          <div className={styles["intro-section-right"]}>
            <h1 className="app-title-1">Be Heard</h1>
            <div className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis facilis totam qui iste? Odio blanditiis eaque molestiae rem magnam nihil voluptas reiciendis, optio minus hic beatae doloremque quisquam cupiditate! Necessitatibus.
            </div>

            <div className="cta">
              <button className='btn-padd border mt-10 w-full lg:w-1/3 hover:text-white'>Join A Room</button>
              {/* <Image src="/circle.jpeg" width={50} height={50} alt="circle" /> */}
            {/* <Image src="/circle.svg" alt="Vercel Logo" width={72} height={16} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
