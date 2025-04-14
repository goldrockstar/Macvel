import React from 'react'
import { TrainingProgramesData } from '../Constant/trainingdata'
import Accordion from 'react-bootstrap/Accordion';


const TrainingPrograme = () => {
  return (
    <div className='container-t' style={{backgroundColor:"white"}}>
        {/* head */}
         <div className='headsection'>

          <div className='first-div'>
                <h2 className='headingh2' style={{fontWeight:"600"}}>{TrainingProgramesData.heading1}</h2>
                <p className='parac' style={{fontWeight:"600"}}>{TrainingProgramesData.subheading1}</p>
                <p className='parac-1' style={{fontWeight:"600"}}>Macvel Provides the Best Full Stack Training In Sivakasi both Online & Offline with 100% Placements.<br></br>Learn Full Stack Course From Basics to Advanced and get real-time Experience</p>
 
                <div className='points'>
                    <div className='point'>
                    <i class="fa-solid fa-check tick"></i>
                    <p className='parac' style={{fontWeight:"600"}}>{TrainingProgramesData.subtext1}</p>
                    </div>

                    <div className='point'>
                    <i class="fa-solid fa-check tick"></i>
                    <p className='parac' style={{fontWeight:"600"}}>{TrainingProgramesData.subtext2}</p>
                    </div>
                </div>
                <div className='download-btn'>
                        <button>{TrainingProgramesData.btn1}</button>
                        <p className='parac'>{TrainingProgramesData.available}</p>    
                    </div>
          </div>  


                    <div className='box-content'>
                        <div className='syllabus'>
                          <p className='parac'>{TrainingProgramesData.bContent}</p>
                        </div>
                        <div className='Course'>
                               <ul>
                                <li><i class="fa-solid fa-circle-dot"></i>{TrainingProgramesData.course1}</li>
                                <li><i class="fa-solid fa-circle-dot"></i>{TrainingProgramesData.Course2}</li>
                                <li><i class="fa-solid fa-circle-dot"></i>{TrainingProgramesData.course3}</li>
                                <li><i class="fa-solid fa-circle-dot"></i>{TrainingProgramesData.course4}</li>
                                <li><i class="fa-solid fa-circle-dot"></i>{TrainingProgramesData.course5}</li>
                                <li><i class="fa-solid fa-circle-dot"></i>{TrainingProgramesData.course6}</li>
                                <li><i class="fa-solid fa-circle-dot"></i>{TrainingProgramesData.course7}</li>
                                <li><i class="fa-solid fa-circle-dot"></i>{TrainingProgramesData.course8}</li>  
                               </ul>
                        </div>
               </div>
         </div>

         {/* section 2 */}

         <div className='section2-t'>
               <h2 className='headingh2'>{TrainingProgramesData.heading2}</h2>
          <div className='cards-training'>
          <div className='card1-t'>
              <h5 className='headingh5'>{TrainingProgramesData.training1}</h5>
              <p className='parac'>{TrainingProgramesData.content1}</p>
              <button className='trainingbtn'>{TrainingProgramesData.trainingButton}</button>
          </div>

          <div className='card1-t'>
              <h5 className='headingh5'>{TrainingProgramesData.training2}</h5>
              <p className='parac'>{TrainingProgramesData.content2}</p>
              <button className='trainingbtn'>{TrainingProgramesData.trainingButton}</button>
          </div>

          <div className='card1-t'>
              <h5 className='headingh5'>{TrainingProgramesData.training3}</h5>
              <p className='parac'>{TrainingProgramesData.content3}</p>
              <button className='trainingbtn'>{TrainingProgramesData.trainingButton}</button>
          </div>
          </div>
          </div>

          {/* section3 */}

          <div className='section3-t'>
            <h2 className='headingh2'>{TrainingProgramesData.heading3}</h2>
            <div className='sec-3cards'>

               <div className='card2-t'>
                 <img className='program-img' src={TrainingProgramesData.programeH1}></img>
                 <div className='program-inner'>
                 <i class="fa-solid fa-book-open icon train-icon icon-t"></i>
                   <p className='para1'>{TrainingProgramesData.subheading1S2}</p>
                   <p className='para'>{TrainingProgramesData.content1S2}</p>
                 </div>
               </div>

               <div className='card2-t'>
                 <img className='program-img' src={TrainingProgramesData.programeH2}></img>
                 <div className='program-inner'>
                 <i class="fa-solid fa-graduation-cap icon train-icon icon-t"></i>
                   <p className='para1'>{TrainingProgramesData.subheading2S2}</p>
                   <p className='para'>{TrainingProgramesData.content2S2}</p>
                 </div>
               </div>

               <div className='card2-t'>
                 <img className='program-img' src={TrainingProgramesData.programeH3}></img>
                 <div className='program-inner'>
                 <i class="fa-solid fa-user icon train-icon icon-t"></i>
                   <p className='para1'>{TrainingProgramesData.subheading3S2}</p>
                   <p className='para'>{TrainingProgramesData.content3S2}</p>
                 </div>
               </div>

               <div className='card2-t'>
                 <img className='program-img' src={TrainingProgramesData.programeH4}></img>
                <div className='program-inner'>
                <i class="fa-solid fa-suitcase icon train-icon icon-t"></i>
                   <p className='para1'>{TrainingProgramesData.subheading4S2}</p>
                   <p className='para'>{TrainingProgramesData.content4S2}</p>
                 </div>
               </div>

            </div>
          </div>

          {/* section 4 */}
         <div className='section4-t'>
          <h2 className='headingh2' style={{marginBottom:"40px"}}>{TrainingProgramesData.heading4}</h2>

          <div className='achivements-t'>
            <div className='circle'>
               <div className='achive'>
                 <p className='achive-para'>{TrainingProgramesData.guidance}</p>
                 <p>{TrainingProgramesData.subguidance}</p>
               </div>
            </div>

            <div className='circle'>
               <div className='achive'>
                  <p className='achive-para'>{TrainingProgramesData.guidance1}</p>
                  <p>{TrainingProgramesData.subguidance1}</p>
               </div> 
           </div>

           <div className='circle'>
               <div className='achive'>
                 <p className='achive-para'>{TrainingProgramesData.guidance2}</p>
                 <p>{TrainingProgramesData.subguidance2}</p>
               </div>
           </div>

          </div>
         </div>

         {/* section5 */}
         <div className='section5-t'>
            <h2 className='headingh2'>{TrainingProgramesData.heading5}</h2>
            <p className='parac'>{TrainingProgramesData.aboutcourse}</p>
            <button className='getstarted'>{TrainingProgramesData.getstarted}</button>
         </div>

         {/* section6 */}
         <div className='section6-t'>
             <h2 className='headingh2'>{TrainingProgramesData.heading6}</h2>
           <div className='question'>
                     <Accordion defaultActiveKey="0">
                      <div className='faq'>
                           <Accordion.Item eventKey="0" className='faqitem'>
                             <Accordion.Header className='faqhead'><h2>{TrainingProgramesData.faq1}</h2></Accordion.Header>
                             <Accordion.Body className='faq-para'><p>{TrainingProgramesData.faqa1}</p></Accordion.Body>
                           </Accordion.Item>
                      </div>

                      <div  className='faq'>
                           <Accordion.Item eventKey="1" className='faqitem'>
                             <Accordion.Header className='faqhead'><h2>{TrainingProgramesData.faq2}</h2></Accordion.Header>
                             <Accordion.Body className='faq-para'><p>{TrainingProgramesData.faqa2}</p></Accordion.Body>
                           </Accordion.Item>
                      </div>

                      <div  className='faq'>
                           <Accordion.Item eventKey="2" className='faqitem'>
                             <Accordion.Header className='faqhead'><h2>{TrainingProgramesData.faq3}</h2></Accordion.Header>
                             <Accordion.Body className='faq-para'><p>{TrainingProgramesData.faqa3}</p></Accordion.Body>
                           </Accordion.Item>
                      </div>

                      <div  className='faq'>
                           <Accordion.Item eventKey="3" className='faqitem'>
                             <Accordion.Header className='faqhead'><h2>{TrainingProgramesData.faq4}</h2></Accordion.Header>
                             <Accordion.Body className='faq-para'><p>{TrainingProgramesData.faqa4}</p></Accordion.Body>
                           </Accordion.Item>
                      </div>

                      <div  className='faq'>
                           <Accordion.Item eventKey="4" className='faqitem'>
                             <Accordion.Header className='faqhead'><h2>{TrainingProgramesData.faq5}</h2></Accordion.Header>
                             <Accordion.Body className='faq-para'><p>{TrainingProgramesData.faqa5}</p></Accordion.Body>
                           </Accordion.Item>
                      </div>

                      <div  className='faq'>
                           <Accordion.Item eventKey="5" className='faqitem'>
                             <Accordion.Header className='faqhead'><h2>{TrainingProgramesData.faq6}</h2></Accordion.Header>
                             <Accordion.Body className='faq-para'><p>{TrainingProgramesData.faqa6}</p></Accordion.Body>
                           </Accordion.Item>
                      </div>
                     </Accordion>

                  
           </div>
         </div>

    </div>
  )
}

export default TrainingPrograme