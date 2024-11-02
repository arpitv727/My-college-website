import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='one'>
      <div className="hero-text">
        <h1>“Building strong foundations for a limitless future.”</h1>
        <p>“सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः।
सर्वे भद्राणि पश्यन्तु, मा कश्चिद् दुःखभाग् भवेत्॥”
</p>
    <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>
      </div>
    </div>
  )
}

export default Hero
