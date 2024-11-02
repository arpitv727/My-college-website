import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' id='three'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div> 

        <div className="about-right">
            <h3>ABOUT COLLEGE</h3>
            <h2>“Where knowledge meets inspiration.”</h2>
            <p>Established in 1981, Sita Group of Education has been a beacon of academic excellence and holistic development for over four decades. Our mission is to provide quality education that empowers students to excel in every field of life. With a strong foundation in both academic rigor and values, we have consistently nurtured young minds to reach their highest potential.</p>
            <p>We are immensely proud of our students’ remarkable achievements in the UP Board exams. In 2023, Priyanshi Soni emerged as the Class 10th topper, showcasing the dedication and hard work that defines our institution. Continuing this legacy of success, Prachi Nigam secured the top position in Class 10 in 2024, while Shubham Verma achieved the prestigious distinction of being the Class 12th topper in the same year.
            </p>
        </div>
      
    </div>
  )
}

export default About
