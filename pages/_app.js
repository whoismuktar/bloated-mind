import '../styles/globals.scss'
import Layout from "../components/Layout"
import { useState } from "react"
// import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = initializeApp({
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   apiKey: "AIzaSyAIrvOakhW1H1a3wkp-uCA3tTrtXIjaTxs",
//   authDomain: "stranger-chat-app-465a0.firebaseapp.com",
//   projectId: "stranger-chat-app-465a0",
//   storageBucket: "stranger-chat-app-465a0.appspot.com",
//   messagingSenderId: "853952662040",
//   appId: "1:853952662040:web:18fc08fc11dc664390916d",
//   measurementId: "G-TWQ3CXBTHG"
// })
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


function MyApp({ Component, pageProps }) {
  const [pageConfig, setPageConfig] = useState({noFooter: false})

  return <Layout pageConfig={pageConfig}>
    <Component setPageConfig={setPageConfig} {...pageProps} />
  </Layout>
}

export default MyApp
