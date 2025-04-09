import React from 'react';
import { landingData} from '../Constant/landingdata';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';




const Landing = () => {
 
   const navigate = useNavigate();

   const handleClick = () => {
    navigate('/servicesdetails');
  }
  return (
    <div className='wholeDiv'>
      
        {/* hero section */}
        <div className='container-h'>
          <div className='hero-content'>
            <div className='hero-text'>
            <h2 className='title'>{landingData.title}</h2>
            <p className='subpara'>{landingData.subpara}</p>
              <div className='hero-btns'>
                 <button className='h-btn1'>{landingData.hBtn1}</button>
                 <button className='h-btn2'>{landingData.hBtn2}</button>
              </div>
              </div>
              <img className='heroimage' src={landingData.heroOne} alt="heroimg"></img>
          </div>  
        </div>

        {/* card */}

        <div className='container-c'>

          <div className='card-content'>
            <h2 className='title-card'>{landingData.title1}</h2>
            <p className='content-card'>{landingData.content1}</p>
             <button className='c-btn'>{landingData.learnmore}</button>
          </div> 

          <div className='card-content'>
            <h2 className='title-card'>{landingData.title2}</h2>
            <p className='content-card'>{landingData.content2}</p>
             <button className='c-btn'>{landingData.learnmore}</button>
          </div> 

          <div className='card-content'>
            <h2 className='title-card'>{landingData.title3}</h2>
            <p className='content-card'>{landingData.content3}</p>
             <button className='c-btn'>{landingData.learnmore}</button>
          </div> 

          <div className='card-content'>
            <h2 className='title-card'>{landingData.title4}</h2>
            <p className='content-card'>{landingData.content4}</p>
             <button className='c-btn'>{landingData.learnmore}</button>
          </div> 

        </div>

        {/* section 1 */}

        <div className='section-1' style={{background:`url(${landingData.section1background})`}}>
           <div className='flex-div'>
                <h2 className='heading'>{landingData.heading}</h2> 
                <p className='subpara2'>{landingData.subpara2}</p>
           </div>

           <div>
               <div className='s2-btns'>

                   <div className='Software-dev'>
                      <div className='s-icon'>
                        <i class="fa-brands fa-uncharted"></i>
                      </div>
                      <h5>{landingData.sBtn1}</h5>
                      <p>{landingData.sBtn1con}</p>
                   </div>

                   <div className='Software-dev'>
                      <div className='s-icon'>
                      <i class="fa-solid fa-sliders"></i>
                      </div>
                      <h5>{landingData.sBtn2}</h5>
                      <p>{landingData.sBtn2con}</p>
                   </div>

                   <div className='Software-dev'>
                      <div className='s-icon'>
                      <i class="fa-solid fa-paper-plane"></i>
                      </div>
                      <h5>{landingData.sBtn3}</h5>
                      <p>{landingData.sBtn3con}</p>
                   </div>

                   <div className='Software-dev'>
                      <div className='s-icon'>
                      <i class="fa-solid fa-bullseye"></i>
                      </div>
                      <h5>{landingData.sBtn4}</h5>
                      <p>{landingData.sBtn4con}</p>
                   </div>

                   <div className='Software-dev'>
                      <div className='s-icon'>
                      <i class="fa-solid fa-screwdriver-wrench"></i>
                      </div>
                      <h5>{landingData.sBtn5}</h5>
                      <p>{landingData.sBtn5con}</p>
                   </div>
                   <div className='Software-dev'>
                      <div className='s-icon'>
                      <i class="fa-solid fa-cloud"></i>
                      </div>
                      <h5>{landingData.sBtn6}</h5>
                      <p>{landingData.sBtn6con}</p>
                   </div>
               </div>
           </div>
           <button className='learn' onClick={handleClick} >{landingData.learnmoreLanding}</button>

        </div>

        {/* section 2 */}

        <div className='section-2' style={{backgroundImage:`url(${landingData.map})`}}>
            <div className='head'>
               <h2 className='s2heading'>{landingData.s2Heading}</h2>
               <p className='s2subpara'>{landingData.s2Subpara}</p>
            </div>

            <div className='achivements'>

               <div className='achive-1'>
                <h2 className='count1'>{landingData.number1}</h2>
                <p className='count-c'>{landingData.num1Con}</p>
               </div>

               <div className='achive-1'>
                <h2 className='count1'>{landingData.number2}</h2>
                <p className='count-c'>{landingData.num2Con}</p>
               </div>

               <div className='achive-1'>
                <h2 className='count1'>{landingData.number3}</h2>
                <p className='count-c'>{landingData.num3Con}</p>
               </div>

            </div>

          {/* contact-box */}
            <div className='contact-box'>

              <div className='contact-cont'>
                <h4 className='con-head'>{landingData.conHead}</h4>
                <p className='con-sub'>{landingData.conSub}</p>
              </div>
              <button className='contact-btn'>{landingData.conBtn}</button>

            </div>
        </div>

        {/* section 3 */}

      <div className='section-3' style={{backgroundImage:`url(${landingData.shapes})`}}>

        <div className='comment-h'>
            <h2>{landingData.s3Heading}</h2>
            <p>{landingData.s3Subpara}</p>
        </div>

        {/* swiper */}
             <div className="usersays">
                              <Accordion defaultActiveKey="0" >
                       <Accordion.Item eventKey="0">
                         <Accordion.Header className='accordin'>
                            <img className='userimg' src={landingData.user1} />
                                <div className='n-role' >
                                     <h5>{landingData.name1}</h5>
                                     <p>{landingData.role1}</p>
                                </div>
                                     <div className='star'>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-regular fa-star outline-s"></i>
                                     </div>
                         </Accordion.Header> 
                         <Accordion.Body className='a-body'>
                         <p>{landingData.comment1}</p>
                         </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                         <Accordion.Header className='accordin'>
                            <img className='userimg' src={landingData.user2} />
                                <div className='n-role'>
                                     <h5>{landingData.name2}</h5>
                                     <p>{landingData.role2}</p>
                                </div>
                                     <div className='star'>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-regular fa-star outline-s"></i>
                                     </div>
                         </Accordion.Header> 
                         <Accordion.Body className='a-body'>
                         <p>{landingData.comment1}</p>
                         </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                         <Accordion.Header className='accordin'>
                            <img className='userimg' src={landingData.user3} />
                                <div className='n-role'>
                                     <h5>{landingData.name3}</h5>
                                     <p>{landingData.role3}</p>
                                </div>
                                     <div className='star'>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-regular fa-star outline-s"></i>
                                     </div>
                         </Accordion.Header> 
                         <Accordion.Body className='a-body'>
                         <p>{landingData.comment1}</p>
                         </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                         <Accordion.Header className='accordin'>
                            <img className='userimg' src={landingData.user4} />
                                <div className='n-role'>
                                     <h5>{landingData.name4}</h5>
                                     <p>{landingData.role4}</p>
                                </div>
                                     <div className='star'>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-regular fa-star outline-s"></i>
                                     </div>
                         </Accordion.Header> 
                         <Accordion.Body  className='a-body'>
                         <p>{landingData.comment1}</p>
                         </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4">
                         <Accordion.Header className='accordin'>
                            <img className='userimg' src={landingData.user5} />
                                <div className='n-role'>
                                     <h5>{landingData.name5}</h5>
                                     <p>{landingData.role5}</p>
                                </div>
                                     <div className='star'>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-solid fa-star fill"></i>
                                        <i class="fa-regular fa-star outline-s"></i>
                                     </div>
                         </Accordion.Header> 
                         <Accordion.Body className='a-body'>
                              <p>{landingData.comment1}</p>
                         </Accordion.Body>
                      </Accordion.Item>

                       
                     </Accordion>
              </div>

      </div>

    </div>
  )

}

export default Landing