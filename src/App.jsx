import './index.css'

import Intro from './components/Intro'
import Header from './components/Header'
import Companies from './components/Companies'
import Services from './components/Services'
import Copyright from './Copyright'
import Footer from './Footer'
import Newsletter from './components/Newsletter'
import HappyClient from './components/HappyClient'


function App() {

  return (
    <>
    <Header />
    <Intro />
    <Companies />
    <Services />
    {/* <Newsletter /> */}
    <HappyClient />
    <Footer />
    <Copyright />
    </>
  )
}

export default App
