import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'

const Testimonials = () => {
  const slider = useRef ();
  let tx = 0;
const slideForward = ()=>{
if(tx > -50 ){
  tx -= 25;
}
slider.current.style.transform =`translateX(${tx}%)`
}
const slideBackward = ()=>{
  if(tx < 0 ){
    tx += 25;
  }
  slider.current.style.transform =`translateX(${tx}%)`
}

  return (
    <div className='testimonials'>
     <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
     <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
     <div className="slider">
      <ul ref={slider}>
        <li>
          <div className='slide'>
<div className="user-info">
  <img src={user_1} alt="" />
  <div>
  <h3>Arpit Verma</h3>
  <span>Sitagroup,Mahmudabad</span>
  </div>
           </div>
           <p>Attending Sita Group of Education has been one of the most impactful experiences of my life. The encouragement from my teachers and the focus on hands-on learning helped me grow, not just academically but also as an individual. I’m proud to be part of this incredible community that nurtures talent and ambition.</p>
          </div>
        </li>
        <li>
          <div className='slide'>
<div className="user-info">
  <img src={user_2} alt="" />
  <div>
  <h3>Anya Verma</h3>
  <span>Sitagroup,Mahmudabad</span>
  </div>
           </div>
           <p>Being a part of Sita Group of Education has made learning exciting, engaging, and fun. My teachers are always there to help me, and I feel encouraged to ask questions, explore my interests, and try new things. I’m truly happy to be in a school where everyone feels like family, and I’m excited to keep learning, growing, and making wonderful memories here!”</p>
          </div>
        </li>
        <li>
          <div className='slide'>
<div className="user-info">
  <img src={user_3} alt="" />
  <div>
  <h3>Sidharth Yadav</h3>
  <span>Sitagroup,Mahmudabad</span>
  </div>
           </div>
           <p>“My journey at Sita Group of Education has been filled with learning, growth, and valuable experiences. The teachers’ commitment to our success and the vibrant school community motivated me to aim higher and stay determined. I’m grateful for the guidance and support I received, which has set a strong foundation for my future.”</p>
          </div>
        </li>
        <li>
          <div className='slide'>
<div className="user-info">
  <img src={user_4} alt="" />
  <div>
  <h3>Tahir </h3>
  <span>Sitagroup,Mahmudabad</span>
  </div>
           </div>
           <p>Sita Group of Education has been more than just a school; it’s been a place of inspiration and growth. The faculty’s dedication and the endless support pushed me to excel and believe in my capabilities. I leave with not only knowledge but also lifelong friendships, unforgettable memories, and a deep sense of gratitude</p>
          </div>
        </li>
      </ul>
     </div>
    </div>
  )
}

export default Testimonials
