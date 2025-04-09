import React from 'react'
import { footerdata } from '../Constant/footerdata'

const Footer = () => {
  return (
    <div className='footer-flex'>

         <div className='logo-f'>
            <img src='assets/Macvellogo.png'></img>
            <p>{footerdata.aboutCompany}</p>
         </div>
      <div className='grid'>
         <div className='div-1'>
            <ul>
            <h5>{footerdata.heading1}</h5>
                <li>{footerdata.TrainingProgrames}</li>
                <li>{footerdata.Services}</li>
                <li>{footerdata.Portfolio}</li>
                <li>{footerdata.Blog}</li>
                <li>{footerdata.LatestNews}</li>
            </ul>
         </div>

         <div className='div-2'>
            <ul>
            <h5>{footerdata.heading2}</h5>
                <li>{footerdata.FAQ}</li>
                <li>{footerdata.PrivacyPolicy}</li>
                <li>{footerdata.TermsConditions}</li>
                <li>{footerdata.Team}</li>
                <li>{footerdata.Contactus}</li>
            </ul>
         </div>

         <div className='div-3'>
            <ul>
            <h5>{footerdata.heading3}</h5>
                <li className='address'><i class="fa-solid fa-location-dot"></i>{footerdata.Address}</li>   
                <li className='phone'><i class="fa-solid fa-phone"></i>{footerdata.mail}</li>
                <li className='mail'><i class="fa-solid fa-envelope"></i>{footerdata.phNo}</li>
            </ul>
         </div>
      </div>
    </div>
  )
}

export default Footer