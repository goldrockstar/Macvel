import React from 'react'
import { ServicesData } from '../Constant/Servicesdata'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const ServicesDetails = () => {

  // This function handles showing/hiding the content for each dropdown
  function toggleContent(contentId) {
    const content = document.getElementById(contentId);

    // Toggle the display of the content
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      // Hide all dropdown contents first
      const allContents = document.querySelectorAll('.dropdown-content');
      allContents.forEach((content) => content.style.display = "none");

      // Show the clicked dropdown content
      content.style.display = "block";
    }
  }

  return (
    <div className='servicedetails-page'>

      {/* servicedetails */}
      <div className='servicedetails'>
        <h2>{ServicesData.servicesDetails}</h2>
      </div>
      {/* section1 */}
      <div className='section-details'>
        <img src={ServicesData.servicesdetailshero} className='section1-img' alt='img' />
        <div className='section1-details'>
          <div className='heroinner-main'>
            <h2>{ServicesData.main}</h2>
            <p>{ServicesData.mainsub}</p>
          </div>
          <Swiper
            className='swiper-details'
            modules={[Pagination, Mousewheel]}
            direction='vertical'
            spaceBetween={30}
            slidesPerView={1}
            Mousewheel={{
              releaseOnEdges: true,
              forceToAxis: true
            }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className='swiper-content landscape'>
                <h3 className='serhead'>{ServicesData.servicesDetails1}</h3>
                <div className='content-box'>
                  <h5>{ServicesData.common}</h5>
                  <p>{ServicesData.sectionsd}</p>
                  <p>{ServicesData.sectionsd1}</p>
                  <p>{ServicesData.sectionsd2}</p>
                  <p>{ServicesData.sectionsd3}</p>
                  <p>{ServicesData.sectionsd4}</p>



                  <h5>{ServicesData.common1}</h5>
                  <p>{ServicesData.sdprocess}</p>
                  <p>{ServicesData.sdprocess1}</p>
                  <p>{ServicesData.sdprocess2}</p>
                  <p>{ServicesData.sdprocess3}</p>
                  <p>{ServicesData.sdprocess4}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='swiper-content landscape'>
                <h3 className='serhead'>{ServicesData.servicesDetails2}</h3>
                <div className='content-box'>
                  <h5>{ServicesData.common}</h5>
                  <p>{ServicesData.sectionea}</p>
                  <p>{ServicesData.sectionea1}</p>
                  <p>{ServicesData.sectionea2}</p>
                  <p>{ServicesData.sectionea3}</p>
                  <p>{ServicesData.sectionea4}</p>

                  <h5>{ServicesData.common1}</h5>
                  <p>{ServicesData.eaprocess}</p>
                  <p>{ServicesData.eaprocess1}</p>
                  <p>{ServicesData.eaprocess2}</p>
                  <p>{ServicesData.eaprocess3}</p>
                  <p>{ServicesData.eaprocess4}</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>

              <div className='swiper-content stact'>
                <h3 className='serhead'>{ServicesData.servicesDetails3}</h3>
                <div className='content-box'>
                  <h5>{ServicesData.common}</h5>
                  <p>{ServicesData.sectionda}</p>
                  <p>{ServicesData.sectionda1}</p>
                  <p>{ServicesData.sectionda2}</p>
                  <p>{ServicesData.sectionda3}</p>

                  <h5>{ServicesData.common1}</h5>
                  <p>{ServicesData.daprocess}</p>
                  <p>{ServicesData.daprocess1}</p>
                  <p>{ServicesData.daprocess2}</p>
                  <p>{ServicesData.daprocess3}</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='swiper-content stact'>
                <h3 className='serhead'>{ServicesData.servicesDetails4}</h3>
                <div className='content-box'>
                  <h5>{ServicesData.common}</h5>
                  <p>{ServicesData.sectionseo}</p>
                  <p>{ServicesData.sectionseo1}</p>
                  <p>{ServicesData.sectionseo2}</p>
                  <p>{ServicesData.sectionseo3}</p>

                  <h5>{ServicesData.common1}</h5>
                  <p>{ServicesData.seoprocess}</p>
                  <p>{ServicesData.seoprocess1}</p>
                  <p>{ServicesData.seoprocess2}</p>
                  <p>{ServicesData.seoprocess3}</p>
                  <p>{ServicesData.seoprocess4}</p>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className='swiper-content stact'>
                <h3 className='serhead'>{ServicesData.servicesDetails5}</h3>
                <div className='content-box'>
                  <h5>{ServicesData.common}</h5>
                  <p>{ServicesData.sectionwm}</p>
                  <p>{ServicesData.sectionwm1}</p>
                  <p>{ServicesData.sectionwm2}</p>
                  <p>{ServicesData.sectionwm3}</p>

                  <h5>{ServicesData.common1}</h5>
                  <p>{ServicesData.wmprocess}</p>
                  <p>{ServicesData.wmprocess1}</p>
                  <p>{ServicesData.wmprocess2}</p>
                  <p>{ServicesData.wmprocess3}</p>
                  <p>{ServicesData.wmprocess4}</p>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className='swiper-content stact'>
                <h3 className='serhead'>{ServicesData.servicesDetails6}</h3>
                <div className='content-box'>
                  <h5>{ServicesData.common}</h5>
                  <p>{ServicesData.sectionca}</p>
                  <p>{ServicesData.sectionca1}</p>
                  <p>{ServicesData.sectionca2}</p>
                  <p>{ServicesData.sectionca3}</p>
                  <p>{ServicesData.sectionca4}</p>

                  <h5>{ServicesData.common1}</h5>
                  <p>{ServicesData.caprocess}</p>
                  <p>{ServicesData.caprocess1}</p>
                  <p>{ServicesData.caprocess2}</p>
                  <p>{ServicesData.caprocess3}</p>
                  <p>{ServicesData.caprocess4}</p>
                </div>
              </div>
            </SwiperSlide>


          </Swiper>

        </div>
      </div>
      {/* section2 */}
      <div className='section2-summa'>

        <div className='section2-sd'>
            <h2 className='heading-service1'>{ServicesData.heading}</h2>
            <p>{ServicesData.intro}</p>
          <div className="dropdown-container">
            <button className="dropdown-button" onClick={() => toggleContent('content1')}>{ServicesData.servicedetailhead}</button>

            <div id="content1" className="dropdown-content">
              <h3>{ServicesData.servicedetailhead}</h3>
              <p>{ServicesData.intro1}</p>
              <div className="heroinner-sd">
                <Swiper
                  modules={[Pagination, Mousewheel]}
                  direction='vertical'
                  spaceBetween={30}
                  slidesPerView={1}
                  Mousewheel={{
                    releaseOnEdges: true,
                    forceToAxis: true
                  }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className="heroinner-sd1"
                >
                  <SwiperSlide>
                    <div className="webdetails">
                      <h5 className="wdhead">{ServicesData.wdhead}</h5>
                      <p>{ServicesData.processoverview}</p>
                      <p>{ServicesData.wdlist}</p>
                      <p>{ServicesData.wdlist1}</p>
                      <p>{ServicesData.wdlist2}</p>
                      <p>{ServicesData.wdlist3}</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="webdetails">
                      <h5 className="wdhead">{ServicesData.common}</h5>
                      <p><strong>{ServicesData.content0}</strong>{ServicesData.details0}</p>
                      <p><strong>{ServicesData.content1}</strong>{ServicesData.details1}</p>
                      <p><strong>{ServicesData.content2}</strong>{ServicesData.details2}</p>
                      <p><strong>{ServicesData.content3}</strong>{ServicesData.details3}</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="webdetails">
                      <h5 className="wdhead">{ServicesData.common1}</h5>
                      <p><strong>{ServicesData.over0}</strong>{ServicesData.wddetail0}</p>
                      <p><strong>{ServicesData.over1}</strong>{ServicesData.wddetail1}</p>
                      <p><strong>{ServicesData.over2}</strong>{ServicesData.wddetail2}</p>
                      <p><strong>{ServicesData.over3}</strong>{ServicesData.wddetail3}</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <button className="dropdown-button" onClick={() => toggleContent('content2')}>{ServicesData.servicedetail1}</button>
            <div id="content2" className="dropdown-content">
              <h3>{ServicesData.servicedetail1}</h3>
              <p>{ServicesData.describtion}</p>
              <div className="heroinner-sd">
                <Swiper
                  modules={[Pagination, Mousewheel]}
                  direction='vertical'
                  spaceBetween={30}
                  slidesPerView={1}
                  Mousewheel={{
                    releaseOnEdges: true,
                    forceToAxis: true
                  }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className="heroinner-sd1"
                >
                  <SwiperSlide>
                    <div className="webdetails">
                      <h5 className="wdhead">{ServicesData.wdhead}</h5>
                      <p>{ServicesData.processoverview}</p>
                      <p>{ServicesData.malist}</p>
                      <p>{ServicesData.malist1}</p>
                      <p>{ServicesData.malist2}</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="webdetails">
                      <h5 className="wdhead">{ServicesData.common}</h5>
                      <p><strong>{ServicesData.macontent}</strong>{ServicesData.madetail}</p>
                      <p><strong>{ServicesData.macontent1}</strong>{ServicesData.madetail1}</p>
                      <p><strong>{ServicesData.macontent2}</strong>{ServicesData.madetail2}</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="webdetails">
                      <h5 className="wdhead">{ServicesData.common1}</h5>
                      <p><strong>{ServicesData.maover}</strong>{ServicesData.maoverdetail}</p>
                      <p><strong>{ServicesData.maover1}</strong>{ServicesData.maoverdetail1}</p>
                      <p><strong>{ServicesData.maover2}</strong>{ServicesData.maoverdetail2}</p>
                      <p><strong>{ServicesData.maover3}</strong>{ServicesData.maoverdetail3}</p>
                      <p><strong>{ServicesData.maover4}</strong>{ServicesData.maoverdetail4}</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <button className="dropdown-button" onClick={() => toggleContent('content3')}>{ServicesData.servicedetail2}</button>
            <div id="content3" className="dropdown-content">
              <h3>{ServicesData.servicedetail2}</h3>
              <p>{ServicesData.describtion1}</p>
              <div className="heroinner-sd">
                <Swiper
                  modules={[Pagination, Mousewheel]}
                  direction='vertical'
                  spaceBetween={30}
                  slidesPerView={1}
                  Mousewheel={{
                    releaseOnEdges: true,
                    forceToAxis: true
                  }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  className="heroinner-sd1"
                >
                  <SwiperSlide>
                    <div className="webdetails">
                      <h5 className="wdhead">{ServicesData.wdhead}</h5>
                      <p>{ServicesData.processoverview}</p>
                      <p>{ServicesData.wbscontent}</p>
                      <p>{ServicesData.wbscontent1}</p>
                      <p>{ServicesData.wbscontent2}</p>
                      <p>{ServicesData.wbscontent3}</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="webdetails">
                      <h5 className="wdhead">{ServicesData.common}</h5>
                      <p><strong>{ServicesData.csdcontent}</strong>{ServicesData.csddetail}</p>
                      <p><strong>{ServicesData.csdcontent1}</strong>{ServicesData.csddetail1}</p>
                      <p><strong>{ServicesData.csdcontent2}</strong>{ServicesData.csddetail2}</p>
                      <p><strong>{ServicesData.csdcontent3}</strong>{ServicesData.csddetail3}</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="webdetails">
                      <h5 className="wdhead">{ServicesData.common1}</h5>
                      <p><strong>{ServicesData.csdover}</strong>{ServicesData.csdoverdetail}</p>
                      <p><strong>{ServicesData.csdover1}</strong>{ServicesData.csdoverdetail1}</p>
                      <p><strong>{ServicesData.csdover2}</strong>{ServicesData.csdoverdetail2}</p>
                      <p><strong>{ServicesData.csdover3}</strong>{ServicesData.csdoverdetail3}</p>
                      <p><strong>{ServicesData.csdover4}</strong>{ServicesData.csdoverdetail4}</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ServicesDetails