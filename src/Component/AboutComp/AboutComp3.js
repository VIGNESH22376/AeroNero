import React from 'react'
import './CSS/AboutComp3.css'

// import images
import Bubbleleft from '../../Images/Home/Bubble-Left.png'
import Bubbleright from '../../Images/Home/Bubble-right.png'

//import aos
import Aos from 'aos'

const AboutComp3 = () => {

  Aos.init();

  return (
    <>
      <div className='container-fluid'>
        <div className='row About-r3-container '>

          {/* first image  */}
          <div className='col-3 col-lg-3 p-0' >
            <img src={Bubbleleft} alt='Bubble' className='About-r3-Bubble' />
          </div>

          {/* content */}
          <div className='col-12 col-lg-12 About-r3-para-div About-r3-aligntment' data-aos="fade"
                data-aos-duration="800" data-aos-once="true">
            
            <h3 className='About-r3-para-color col-11 col-lg-10'>Water for all, always</h3>
            <p className='About-r3-para col-11 col-lg-10'> Empowering sustainable living through innovative air-water generation technology, providing clean and accessible water to communities while combating climate change.</p>

          </div>

          {/* Last image  */}
          <div className='col-12 col-lg-12 p-0 d-flex justify-content-end About-r3-right-div'>
            <img src={Bubbleright} alt='Bubble' className='About-r3-Bubble' />
          </div>

        </div>

      </div>

    </>
  )
}

export default AboutComp3
