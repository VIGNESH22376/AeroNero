import React from 'react'

//import HomeComp2 because these 2 are same
import './CSS/HomeComp2.css'

// import images
import Bubbleleft from '../../Images/Home/Bubble-left2.png'
import Bubbleright from '../../Images/Home/Bubble-right2.png'

//import aos
import Aos from 'aos'

const HomeComp4 = () => {

  Aos.init();

  return (
    <>
      <div className='container-fluid'>
        <div className='row Home-r2-container '>

          {/* first image  */}
          <div className='col-3 col-lg-1 p-0 order-3 order-lg-1' >
            <img src={Bubbleleft} alt='Bubble' className='Home-r2-Bubble' />
          </div>

          {/* content */}
          <div className='col-12 col-lg-10  Home-r2-para-div order-2' data-aos="fade"
                data-aos-duration="800" data-aos-once="true">
            <p className='Home-r2-para col-10 col-lg-12'><b>Air,</b> often overlooked as a source of water, is actually <span  className='Home-r1-para-color'>the second-largest reservoir on our planet</span> - and 
            <span className='Home-r1-para-color'> our solution to end water scarcity.</span></p>

          </div>

          {/* Last image  */}
          <div className='col-12 col-lg-1 p-0 d-flex justify-content-end order-lg-3 '>
            <img src={Bubbleright} alt='Bubble' className='Home-r2-Bubble' />
          </div>

        </div>

      </div>

    </>
  )
}

export default HomeComp4

