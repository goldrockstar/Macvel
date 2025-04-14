import React from 'react'
import { Contactdata } from '../Constant/Contactdata'

function Contact() {
  return (
    <div className='container-contact'>
        {/* start */}
        <div className='contactus'>
              <h2 style={{fontWeight:"600"}}>{Contactdata.heading}</h2>
        </div>
       {/* section1 */}

        <div className='cards-contact'>

           <div className='card1-contact'>
              <i class="fa-solid fa-phone c-add"></i>
              <h4>{Contactdata.heading1}</h4>
              <p>{Contactdata.details1}</p>
           </div>

           <div className='card1-contact'>
               <i class="fa-solid fa-envelope c-add"></i>
              <h4>{Contactdata.heading2}</h4>
              <p>{Contactdata.details2}</p>
           </div>

           <div className='card1-contact'>
              <i class="fa-solid fa-location-dot c-add"></i>
              <h4>{Contactdata.heading3}</h4>
              <p>{Contactdata.details3}</p>
           </div>

        </div>
              {/* map */}
        <div className='googlemap'>
               <iframe src={Contactdata.map}/>
        </div>

        {/* form */}
        <div className='form'>
             <h2>{Contactdata.heading4}</h2>
            <div className='contact-form'>
              <img src={Contactdata.contact} alt='form' className='contact-img'></img>
              <div className='form-in'>
                <form action="">
                   <input type='text' placeholder='Name'/>
                   <input type='email' placeholder='Email'/>
                   <input type='Number' placeholder='Mobile Number'/>
                   <input type='text' placeholder='Subject'/>
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