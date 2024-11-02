// import { useState } from 'react';
// import './Contact.css'
// import msg_icon from '../../assets/msg-icon.png'
// import mail_icon from '../../assets/mail-icon.png'
// import phone_icon from '../../assets/phone-icon.png'
// import location_icon from '../../assets/location-icon.png'
// import white_arrow from '../../assets/white-arrow.png'
// const [result, setResult] = useState("");
// const Contact = () => {
//   return (
//     // const [result, setResult] = useState("");

//     const onSubmit = async (event) => {
//       event.preventDefault();
//       setResult("Sending....");
//       const formData = new FormData(event.target);
  
//       formData.append("access_key", "508d9cf6-a4fd-458c-89d4-a68a89e8aedb");
  
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });
  
//       const data = await response.json();
  
//       if (data.success) {
//         setResult("Form Submitted Successfully");
//         event.target.reset();
//       } else {
//         console.log("Error", data);
//         setResult(data.message);
//       }
//     };
    
//     <div className='contact'>
//       <div className="contact-col">
//         <h3>Send us a message <img src={msg_icon} alt="" /></h3>
//         <p>Feel free to contact me. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt possimus saepe earum aut, a nam, porro repudiandae minima illum quae distinctio, dolore maiores dolorem odit? Quos, illum! Consectetur, adipisci atque!</p>
//         <ul>
//             <li> <img src={mail_icon} alt="" /> Contact@arpitzero0@gmail.com</li>
//             <li> <img src={phone_icon} alt="" /> +91638900000</li>
//             <li> <img src= {location_icon } alt="" /> Near Ramkund Chauraha, Kureshi Road</li>
//         </ul>
//       </div>
//       <div className="contact-col">
//         <form onSubmit={onSubmit}>
//             <label>Your Name</label>
//             <input type="text" name='name' placeholder='Enter you name'required/>
//             <label>Phone Number</label>
//             <input type="number" name='phone' placeholder='Enter your phone number' required />
//             <label>Write your Message</label>
//             <textarea name="message" rows={10} placeholder='Enter Your message' required ></textarea>
//             <button type='submit' className='btn dark-btn'>Submit here <img src= {white_arrow} alt="" /></button>
//         </form>
//         <span>{result}</span>
//       </div>
//     </div>
//   )
// }

// export default Contact
import { useState } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "508d9cf6-a4fd-458c-89d4-a68a89e8aedb");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <div className='contact' id='six'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} alt="Message Icon" /></h3>
                <p>We’re here to help! Whether you have questions, need assistance, or want to learn more about Sita Group of Education, feel free to reach out. We look forward to connecting with you and will respond as soon as possible.</p>
                <ul>
                    <li><img src={mail_icon} alt="Mail Icon" /> Contact@arpitzero0@gmail.com</li>
                    <li><img src={phone_icon} alt="Phone Icon" /> +916389000000</li>
                    <li><img src={location_icon} alt="Location Icon" /> Near Ramkund Chauraha, Kureshi Road</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type="number" name='phone' placeholder='Enter your phone number' required />
                    <label>Write your Message</label>
                    <textarea name="message" rows={10} placeholder='Enter your message' required ></textarea>
                    <button type='submit' className='btn dark-btn'>Submit here <img src={white_arrow} alt="Arrow Icon" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;

