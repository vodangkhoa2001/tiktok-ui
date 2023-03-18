import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import { publicRoutes } from '~/routes'
import DefaultLayout from '~/layouts'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9usp_5k35JqJaC91VLalvnoL_cCy-fdk",
  authDomain: "tiktok-clone-ui.firebaseapp.com",
  projectId: "tiktok-clone-ui",
  storageBucket: "tiktok-clone-ui.appspot.com",
  messagingSenderId: "1087435721740",
  appId: "1:1087435721740:web:3103091d0f74c0887f3229",
  measurementId: "G-826E2MSLPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.compnent

            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            return <Route key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })}
        </Routes>
      </div>
    </Router>
  )
}
export default App