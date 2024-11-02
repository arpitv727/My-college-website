import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/campus-1.jpg'
import gallery_2 from '../../assets/campus-2.jpg'
import gallery_3 from '../../assets/campus-3.jpg'
import gallery_4 from '../../assets/campus-4.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus' id='four'>
    <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
    </div>
    <button className='btn dark-btn'>see more here <img src= {white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
