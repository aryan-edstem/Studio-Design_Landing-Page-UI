import './index.css'
import '../fonts/fonts.css'; // Import the fonts.css file here

import Intro from './components/Intro'
import Header from './components/Header'
import Companies from './components/Companies'
import Services from './components/Services'
import Copyright from './components/Copyright'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import HappyClient from './components/HappyClient'
import Great from './components/Great'


function App() {

  return (
    <>
    <Header />
    <Intro />
    <Companies />
    <Services />
    <Great />
    <HappyClient />
    <Newsletter />
    <Footer />
    <Copyright />
    </>
  )
}

export default App
