import React from 'react'

// this css is Homecomp2 because these two are same 
import './CSS/HomeComp2.css'

// import images
import Bubbleleft from '../../Images/Home/Bubble-Left.png'
import Bubbleright from '../../Images/Home/Bubble-right.png'

//import aos
import Aos from 'aos'

const HomeComp11 = () => {

  Aos.init();

  return (
    <>
      <div className='container-fluid'>
        <div className='row Home-r2-container p-0'>

          {/* first image  */}
          <div className='col-3 col-lg-1 p-0' >
            <img src={Bubbleleft} alt='Bubble' className='Home-r2-Bubble' />
          </div>

          {/* content */}
          <div className='col-12 col-lg-10 Home-r2-para-div' data-aos="fade"
                data-aos-duration="800" data-aos-once="true">
            <p className='Home-r2-para col-10 col-lg-12'><span className='Home-r1-para-color'>Aeronero’s cutting-edge technology</span> is backed by continuous innovation and healthy, sustainable partnerships.</p>

          </div>

          {/* Last image  */}
          <div className='col-12 col-lg-1 p-0 d-flex justify-content-end'>
            <img src={Bubbleright} alt='Bubble' className='Home-r2-Bubble' />
          </div>

        </div>

      </div>

    </>
  )
}

export default HomeComp11
