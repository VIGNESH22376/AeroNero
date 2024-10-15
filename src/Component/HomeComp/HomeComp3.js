import React from 'react'
import './CSS/HomeComp3.css'

import { NavLink } from 'react-router-dom'

//import data
import { HomeMission } from '../../Data/HomeData'

//import aos
import Aos from 'aos'

const HomeComp3 = () => {

  Aos.init();

  return (
    <>
      <div className='container-fluid'>
        <div className='row Home-r3-container'>

          {/* left side */}
          <div className='col-12 col-lg-6 Home-r3-small-container1' data-aos="slide-right"  data-aos-easing="linear"
     data-aos-duration="800" data-aos-once="true">


            <div>
              <h4 className='Home-r3-heading1'>OUR VISION</h4>
              <h2 className='Home-r3-heading2'>WATER FOR ALL, ALWAYS</h2>

              <p className='Home-r3-para'>Empowering sustainable living through innovative air water generation technology, providing clean and accessible water to communities while combating climate change.</p>
            </div>

            <div>
              <NavLink to='/contact' className='Home-r3-btn'>CHAT WITH OUR EXPERT</NavLink>
            </div>


          </div>

          {/* Right side  */}
          <div className='col-12 col-lg-6 Home-r3-small-container2'>

            {/* background box  */}
            <div className='Home-r3-card-box'>
            </div>

            <h4 className='Home-r3-card-heading'>OUR MISSION</h4>


            {/* Card  */}
            <div>
              <div className='row Home-r3-right-small-container gap-2'>
                {
                  HomeMission.map(record => {
                    return (
                      <div key={record.id} className='col-12 col-md-5 col-lg-5 Home-r3-card-container'>

                        {/* image  */}
                        <div className='Home-r3-image-div'>
                          <img src={record.image} alt='mission' className='Home-r3-image' />
                        </div>

                        {/* caption  */}
                        <p className='Home-r3-card-para'>{record.caption}</p>

                      </div>
                    )
                  })
                }
              </div>
            </div>



          </div>


        </div>
      </div>

    </>
  )
}

export default HomeComp3
