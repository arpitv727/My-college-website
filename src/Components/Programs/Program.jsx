import React from 'react'
import './Program.css'
import program from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_icon from '../../assets/honor.jpg'

const Programs = () => {
  return (
    <div className='programs'>

      <div className="program">
<img src= {program} alt="" />
<div className="caption">
<img src={program_icon} alt="" />
  <p>Prachi Nigam [(98.50%)]</p>
</div>
      </div>

      <div className="program">
<img src= {program_2} alt="" />
<div className="caption">
<img src={program_icon} alt="" />
<p>Shubham Verma [97.80]</p>
</div>

      </div>

      <div className="program">
<img src= {program_3} alt="" />
<div className="caption">
  <img src={program_icon} alt="" />
  <p>Priyanshi Soni [98.33]</p>
</div>
      </div>
      
    </div>
  )
}

export default Programs
