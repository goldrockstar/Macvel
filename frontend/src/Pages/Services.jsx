import React from 'react'
import { ServicesData } from '../Constant/Servicesdata'
import { Link, useNavigate } from 'react-router-dom'


const Services = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    }
  return (
    <div className='service-page'>

        {/* service */}
        <div className='service'>
            <h2 className='heading-service'>{ServicesData.heading}</h2>
        </div>

        {/* section-1 */}
        <div className='section1-s'>
            <div className='heroinner-s'>
                <img src={ServicesData.servicehero} className='heroleft'></img>

                <div className='heroinner1-s'>
                    <h2 className='hero-h2'>{ServicesData.service}</h2>
                    <p className='hero-p'>{ServicesData.intro}</p>
                </div>
            </div>
        </div>

        {/* section-2 */}

        <div className='section2-s'>
            <h2 className='hero-h2'>{ServicesData.main}</h2>
            <p className='hero-p'>{ServicesData.mainsub}</p>
            <div className='threeservice'>

                <div className='card1-s'>
                     <h4 className='h4tag'>{ServicesData.heading0}</h4>
                     <p className='c-ptag'>{ServicesData.intro1}</p>
                     
                     <Link to ='/servicedetail'>View Details</Link>
                </div>

                <div className='card1-s'>
                     <h4 className='h4tag'>{ServicesData.heading1}</h4>
                     <p className='c-ptag'>{ServicesData.describtion}</p>
                     <Link to ='/servicedetail'>View Details</Link>
                </div>

                <div className='card1-s'>
                     <h4 className='h4tag'>{ServicesData.heading2}</h4>
                     <p className='c-ptag'>{ServicesData.describtion2}</p>
                     
                     <Link to ='/servicedetail'>View Details</Link>
                </div>
            </div>
        </div>
        
        {/* section-4 */}
        <div className='section4-s'>
            <h2>{ServicesData.sdheading}</h2>
            <p className='s4-para'>{ServicesData.sdpara}</p>
            <div className='software-d'>
                <img src={ServicesData.sdimage} alt='image' />
                <div className='software-inner'>
                <h3 className='shead'>{ServicesData.sdheading1}</h3>
                <h4 className='ssubhead'>{ServicesData.sdheading01}</h4>
                <p className='spara'>{ServicesData.sdpara01}</p>
                <Link to ='/servicedetail'>View More</Link>
                </div>
            </div>

            <div className='software-d'> 
                <div className='software-inner'>
                <h3 className='shead'>{ServicesData.sdheading2}</h3>
                <h4 className='ssubhead'>{ServicesData.sdheading02}</h4>
                <p className='spara'>{ServicesData.sdpara02}</p>
                <Link to ='/servicedetail'>View More</Link>

                </div>
                <img src={ServicesData.eaimage} alt='image' ></img>
            </div>

            <div className='software-d'>
                <img src={ServicesData.daimage} alt='image' />
                <div className='software-inner'>
                <h3 className='shead'>{ServicesData.sdheading3}</h3>
                <h4 className='ssubhead'>{ServicesData.sdheading03}</h4>
                <p className='spara'>{ServicesData.sdpara03}</p>
                <Link to ='/servicedetail'>View More</Link>

                </div>
            </div>
            
            <div className='software-d'>
                <div className='software-inner'>
                <h3 className='shead'>{ServicesData.sdheading4}</h3>
                <h4 className='ssubhead'>{ServicesData.sdsubhead}</h4>
                <p className='spara'>{ServicesData.sdsubpara01}</p>
                <h4 className='ssubhead'>{ServicesData.sdsubhead1}</h4>
                <p className='spara'>{ServicesData.sdsubpara02}</p>
                <Link to ='/servicedetail'>View More</Link>

                </div>
                <img src={ServicesData.seimage} alt='image' />
            </div>

            <div className='software-d'>
                <img src={ServicesData.wmimage} alt='image' />
                <div className='software-inner'>
                <h3 className='shead'>{ServicesData.sdheading5}</h3>
                <h4 className='ssubhead'>{ServicesData.sdheading05}</h4>
                <p className='spara'>{ServicesData.sdpara04}</p>
                <Link to ='/servicedetail'>View More</Link>
                </div>
            </div>

            <div className='software-d'>
                <div className='software-inner'>
                <h3 className='shead'>{ServicesData.sdheading6}</h3>
                <h4 className='ssubhead'>{ServicesData.sdheading06}</h4>
                <p className='spara'>{ServicesData.sdpara05}</p>
                <a href='#'>View More</a>
                </div>
                <img src={ServicesData.caimage} alt='image' />
            </div>
        </div>

        {/* send message */}

        <div className='send-div'>
            <div className='send-inner' >
                <img className='send-img' src={ServicesData.contactimg}></img>
                <div className='send-para'>
                     <h2>{ServicesData.contact}</h2>
                     <h4>{ServicesData.contact1}</h4>
                     <p>Welcome To Macvel, a software development company, helps to digitize businesses by focusing <br></br>on client’s business challenges, needs, pain points and providing business-goals-oriented software solutions.</p>
                     <button onClick={handleClick}>{ServicesData.sendbutton}</button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Services