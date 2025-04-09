import React from 'react'
import { Contactdata } from '../Constant/Contactdata'


function Contact() {

  return (
    <div className='container-contact'>
      {/* start */}
      <div className='contactus'>
        <h2 style={{ fontWeight: "600" }}>{Contactdata.heading}</h2>
      </div>
      {/* section1 */}

      <div className='cards-contact'>

        <div className='card1-c'>
          <div className='icon'><i class="fa-solid fa-phone con-icon"></i></div>
          <div className='number'>
            <h4 className='contact'>Phone Number</h4>
            <p>+91 9585836455</p>
          </div>
        </div>

        <div className='card1-c'>
          <div className='icon'><i class="fa-solid fa-envelope con-icon"></i></div>
          <div className='number'>
            <h4 className='contact'>Email Address</h4>
            <p>support@cooldreamers.com</p>
          </div>
        </div>

        <div className='card1-c'>
          <div className='icon'><i class="fa-solid fa-location-arrow con-icon"></i></div>
          <div className='number'>
            <h4 className='contact'>Address</h4>
            <p>Sivakasi,Tamilnadu,India</p>
          </div>
        </div>

      </div>
      {/* map */}
      <div className='googlemap'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.1492676602947!2d77.80829107502567!3d9.465177390275803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06dfff47b9dfed%3A0x2a8e6d46efef662a!2sMacvel%20Software%20%26%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1712419959356!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{border:0, borderradius: "12px"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* form */}
      <div className='form'>
        <h2>{Contactdata.heading4}</h2>
        <div className='contact-form'>
          <img src={Contactdata.contact} alt='form' className='contact-img'></img>
          <div className='form-in'>
            <form action="">
              <input type='text' placeholder='Name' />
              <input type='email' placeholder='Email' />
              <input type='Number' placeholder='Mobile Number' />
              <input type='text' placeholder='Subject' />
              <textarea placeholder='Message'></textarea>
              <button type='submit' className='send-btn'>{Contactdata.button}</button>
            </form>
          </div>
        </div>
      </div>
      {/* office hours */}

    </div>
  )
}

export default Contact