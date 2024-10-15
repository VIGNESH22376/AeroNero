import React from 'react'

// CSS
import './CSS/HomeComp14.css'

// Image
import Home14Img from '../../Images/Home/Map.png'

//import aos
import Aos from 'aos'

const HomeComp14 = () => {
    Aos.init();

  return (
    <>
        <div className='container-fluid home-s14-container'>

            <div className='home-s14-container-inside'>
                
                {/* Image */}
                <div >
                    <img className='home-s14-img' src={Home14Img} alt='Map.png' />
                </div>

                {/* Text */}
                <div className='home-s14-txt-container-outside'>
                    <div className='home-s14-txt-container'>
                        <h5 className='home-s14-heading' data-aos="fade-down"
                        data-aos-duration="800" data-aos-once="true">World On Verge <span className='home-s14-highlight'>Of Water Scarcity</span></h5>
                        <p className='home-s14-para'>Only 1,036 m³ of water is available per person, which is barely above the scarcity level of 1,000 m³</p>
                    </div>
                </div>

            </div>
            

        </div>
    </>
  )
}

export default HomeComp14