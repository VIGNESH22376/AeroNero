import React from 'react'

// CSS
import './CSS/HomeComp9.css'

// AOS
import Aos from 'aos'

// Row 2 Column 1
import HomeS9Mobile from '../../Images/Home/Aeronero-Mobile.png'

// Row 2 Column 2
import H9Col2img1 from '../../Images/Home/real time.png'
import H9Col2img2 from '../../Images/Home/alert.png'
import H9Col2img3 from '../../Images/Home/service.png'
import H9Col2img4 from '../../Images/Home/Usage.png'

// Json for column 2
const S9Mobile =[
    {
        id : 1,
        image : H9Col2img1,
        heading : "Real time",
        paragraph : "Get live updates and monitor the water levels and humidity"
    },
    {
        id : 2,
        image : H9Col2img2,
        heading : "Alerts",
        paragraph : "Receive instant notifications for important updates"
    },
    {
        id : 3,
        image : H9Col2img3,
        heading : "Service",
        paragraph : "Stay on top of your service schedules to avoid downtime"
    },
    {
        id : 4,
        image : H9Col2img4,
        heading : "Usage",
        paragraph : "Track machine performance and metrics directly from your app"
    }
]

const HomeComp9 = () => {

    // Aos
    Aos.init();

  return (
    <>
      <div className='container-fluid home-s9-container'>

        {/* Row 1 */}
        <h2 className='home-s9-heading' data-aos="fade-down"
                        data-aos-duration="800" data-aos-once="true">Powered by <span className='home-s9-highlight'>advanced IOT</span></h2>
        <p className='home-s9-para'>Aeronero products come powered with the latest technology that gives you real-time data</p>

        {/* Row 2 */}
        <div className='row home-s9-row2-container'>

            {/* Column 1 */}
            <div className='d-none d-md-block col-lg-6'>
                <div
                data-aos="slide-right"
                data-aos-duration="2000"
                data-aos-once="true"
                >
                    <img src={HomeS9Mobile} alt='Aeronero-Mobile.png' className='home-s9-c1-image'/>
                </div>
            </div>

            {/* Column 2 */}
            <div className='col-12 col-md-12 col-lg-6'>

                <div className='row home-s9-c2-container-row'>
                    {
                        S9Mobile.map( card =>{
                            return(
                                
                                // Rows
                                <div className='col-md-5 col-lg-5 home-s9-c2-container' key={card.id}>
                                        
                                    {/* Image */}
                                    <div className='home-s9-c2-img-container'>
                                        <img className='home-s9-c2-img' src={card.image} alt='Home S9 Images.png' />
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <h5 className='home-s9-c2-heading'>{card.heading}</h5>
                                        <p className='home-s9-c2-para'>{card.paragraph}</p>
                                    </div>
                                        
                                </div>
                                
                            )
                        })
                    }
                </div>

                
                
            </div>

        </div>
      </div>
    </>
  )
}

export default HomeComp9