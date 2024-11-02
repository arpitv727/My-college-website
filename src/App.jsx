import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/Videoplayer'


function App() {

  const [playState, setPlayState] = useState(false);


  return (
    <> 
    <Navbar/>
    <Hero/>
    <div className="container"> 
      <Title subTitle='Academic Excellence' Title='Our Star Performers'/>
      <Programs/>
       <About setPlayState={setPlayState}/>
       <Title subTitle='Gallery' Title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' Title='What student says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' Title='Get in Touch'/>
        <Contact/>
        <Footer/>
         <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
    
    
   
   
    </>
  )
}

export default App
