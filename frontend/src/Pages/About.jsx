import React from 'react'
import { aboutdata } from '../Constant/Aboutdata'
import { landingData } from '../Constant/landingdata';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const About = () => {
  return (
    <div className='about'>
      {/* about */}
      <div className='aboutus'>
        <h3>{aboutdata.title}</h3>
      </div>
    {/* // section1 */}
    <div className='section1'>
      <img className='aboutimg' src={aboutdata.aboutimg} alt='img'></img>
      <img className='tri' src={aboutdata.tri}alt='shapes' style={{position:"relative",bottom:"250px",left:"200px"}}></img>

      <div className='overview'>
         <h6 className=' about-o'>{aboutdata.title}</h6>
         <h2>{aboutdata.heading1}</h2>
         <p>{aboutdata.subPara1}</p>
      </div>
        <img className='cross' src={aboutdata.cross}alt='shapes'></img>    

      </div>

      {/* section2 */}

      <div className='section2'>
        
      </div>
    

      {/* section3 */}

      <div className='section3'>
        <div className='team-profile'>
             <h2 className='heading3'>{aboutdata.heading3}</h2>
             <p className='subpara3'>{aboutdata.subPara3}</p>
             
             <div className='team'>
          <Swiper className='swiper1'
            modules={[Navigation , Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            // navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            autoplay={{delay:2000}}
            loop={true}
          >
            <SwiperSlide>
              <div className='team-member'>
                <img src={aboutdata.member1} />
                <h4>{aboutdata.name1}</h4>
                  <div className='usermedia'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                <p>{aboutdata.member1desi}</p>
                <p className='member-des'>{aboutdata.name1D}</p>
                <button>View Profile</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div  className='team-member'>
                <img src={aboutdata.member2} />
                <h4>{aboutdata.name2}</h4>
                <div className='usermedia'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                <p>{aboutdata.member1desi}</p>
                <p className='member-des'>{aboutdata.name2D}</p>
                <button>View Profile</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div  className='team-member'>
                <img src={aboutdata.member3} />
                <h4>{aboutdata.name3}</h4>
                <div className='usermedia'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                <p>{aboutdata.member1desi}</p>
                <p className='member-des'>{aboutdata.name3D}</p>
                <button>View Profile</button>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div  className='team-member'>
                <img src={aboutdata.member4} />
                <h4>{aboutdata.name4}</h4>
                <div className='usermedia'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                <p>{aboutdata.member1desi}</p>
                <p>{aboutdata.name4D}</p>
                <button>View Profile</button>
              </div>
            </SwiperSlide> */}

            <SwiperSlide>
              <div  className='team-member'>
                <img src={aboutdata.member5} />
                <h4>{aboutdata.name5}</h4>
                <div className='usermedia'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                <p>{aboutdata.member1desi}</p>
                <p className='member-des'>{aboutdata.name5D}</p>
                <button>View Profile</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div  className='team-member'>
                <img src={aboutdata.member6} />
                <h4>{aboutdata.name6}</h4>
                <div className='usermedia'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                <p>{aboutdata.member1desi}</p>
                <p className='member-des'>{aboutdata.name6D}</p>
                <button>View Profile</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div  className='team-member' >
                <img src={aboutdata.member7} />
                <h4>{aboutdata.name7}</h4>
                <div className='usermedia'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                <p>{aboutdata.member1desi}</p>
                <p className='member-des'>{aboutdata.name7D}</p>
                <button>View Profile</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div  className='team-member'>
                <img src={aboutdata.member8} />
                <h4>{aboutdata.name8}</h4>
                <div className='usermedia'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                <p>{aboutdata.member1desi}</p>
                <p className='member-des'>{aboutdata.name8D}</p>
                <button>View Profile</button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div  className='team-member'   >
                <img src={aboutdata.member9} />
                <h4>{aboutdata.name9}</h4>
                <div className='usermedia'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                <p>{aboutdata.member1desi}</p>
                <p className='member-des'>{aboutdata.name9D}</p>
                <button>View Profile</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
      </div>
    

      {/* section4 */}

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

      {/* section 5 */}
          
          <div className='section-5'>
            <h2 className='s5heading'>{aboutdata.heading4}</h2>
            <p className='user-feedback'>{aboutdata.subPara4}</p>
              <Swiper className='swiper2' 
               modules={[Pagination, Autoplay]}
               spaceBetween={30}
               slidesPerView={1}
               pagination={{ clickable: true }}
               scrollbar={{ draggable: true }}
               onSwiper={(swiper) => console.log(swiper)}
               onSlideChange={() => console.log('slide change')}
               autoplay={{delay:2000}}
               loop={true}
              >
                <SwiperSlide>
                  <div className='feed-back'>
                    <div className='feed-user'>
                         <img src={aboutdata.user1} />
                         <div className='user'> 
                           <h5>{aboutdata.Uname1}</h5>
                           <p>{aboutdata.uProf1}</p>
                         </div>
                    </div>
                    <p>{aboutdata.feedback}</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='feed-back'>
                    <div className='feed-user'>
                         <img src={aboutdata.user2} />
                         <div className='user'> 
                           <h5>{aboutdata.Uname2}</h5>
                           <p>{aboutdata.uProf2}</p>
                         </div>
                    </div>
                    <p>{aboutdata.feedback}</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='feed-back'>
                    <div className='feed-user'>
                         <img src={aboutdata.user3} />
                         <div className='user'> 
                           <h5>{aboutdata.Uname3}</h5>
                           <p>{aboutdata.uProf3}</p>
                         </div>
                    </div>
                    <p>{aboutdata.feedback}</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='feed-back'>
                    <div className='feed-user'>
                         <img src={aboutdata.user4} />
                         <div className='user'> 
                           <h5>{aboutdata.Uname4}</h5>
                           <p>{aboutdata.uProf4}</p>
                         </div>
                    </div>
                    <p>{aboutdata.feedback}</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='feed-back'>
                    <div className='feed-user'>
                         <img src={aboutdata.user5} />
                         <div className='user'> 
                           <h5>{aboutdata.Uname5}</h5>
                           <p>{aboutdata.uProf5}</p>
                         </div>
                    </div>
                    <p>{aboutdata.feedback}</p>
                  </div>
                </SwiperSlide>
              </Swiper>
          </div>

      
      </div>
  )
}

export default About