import React from 'react'
import './CSS/HomeComp2.css'

// import images
import Bubbleleft from '../../Images/Home/Bubble-Left.png'
import Bubbleright from '../../Images/Home/Bubble-right.png'

//import aos
import Aos from 'aos'

const HomeComp2 = () => {

  Aos.init();

  return (
    <>
      <div className='container-fluid'>
        <div className='row Home-r2-container '>

          {/* first image  */}
          <div className='col-3 col-lg-1 p-0' >
            <img src={Bubbleleft} alt='Bubble' className='Home-r2-Bubble' />
          </div>

          {/* content */}
          <div className='col-12 col-lg-10 d-flex justify-content-center' data-aos="fade"
                data-aos-duration="800" data-aos-once="true">
            <p className='Home-r2-para col-10 col-lg-12'><span className='Home-r1-para-color'>‘Aeronero’</span> is a global company that leverages state-of-the-art technology to provide reliable, sustainable, and eco-friendly water solutions. Our <span className='Home-r1-para-color'>air water generators (AWG)</span>  extract moisture from the air and converts it into pure drinking water, ensuring a constant and safe water supply.</p>

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

export default HomeComp2
