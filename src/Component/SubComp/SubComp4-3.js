import React from 'react'
// CSS
import './CSS/SubComp4.css'

// AOS
import aos from 'aos'

// Images
import NeroLeftImg from '../../Images/Home/Bubble-Left.png'
import NeroRightImg from '../../Images/Home/Bubble-right.png'
import MainNeroImg from '../../Images/Drizzle/Drizzle-product.png'
import SubNeroImg3 from '../../Images/Nero/NeroImg3Maximize.png'
import SubNeroImg4 from '../../Images/Nero/NeroImg4Mute.png'
import charge from '../../Images/Drizzle/energy.png'
import minimize from '../../Images/Drizzle/minimize.png'
import drum from '../../Images/Drizzle/drum.png'

const sub4Dri1zzle1=[
  {
    id : 1,
    image : charge,
    heading : "Efficient",
    paragraph : "Energy-efficient with a power consumption of only 650W."
  },
  {
    id : 2,
    image : SubNeroImg4,
    heading : "Quiet Operation",
    paragraph : "Operates quietly with a noise level below 45dB(A)."
  },
  {
    id : 3,
    image : minimize,
    heading : "High Capacity",
    paragraph : "Produces up to 40 litres of clean water per day, even in high humidity conditions (80% RH) and temperatures up to 30°C."
  }
]

const sub4Dri1zzle2 =[
  {
    id : 1,
    image : SubNeroImg3,
    heading : "Compact Design",
    paragraph : "Fits easily in most spaces with dimensions of 440460710 mm."
  },
  {
    id : 2,
    image : drum,
    heading : "Large Tank Capacity",
    paragraph : "Stores up to 15 litres of purified water."
  }
]

const SubCom43 = () => {

  // AOS
  aos.init();

  return (
    <>
        <div className='container-fluid sub-s4-container'>

          {/* Left Bubble */}
          <div className='sub-s4-bbl-left-container'>
            <img className='sub-s4-bbl-left' src={NeroLeftImg} alt='Bubble-Left.png'/>
          </div>

            <h2 className="sub-s4-heading"
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-once="true">What makes Drizzle <span className="sub-s4-highlight">a perfect choice for you</span></h2>

            <div className='row sub-s4-row-container'>

              {/* Column 1 */}
              <div className='col-12 col-md-4 col-lg-4 sub-s4-card-container'>
                {
                  sub4Dri1zzle1.map( element =>{
                    return(
                      <div className='col-12 col-md-12 col-lg-12' key={element.id}>
                        
                        <div className='sub-s4-card'>

                          {/* Image */}
                          <div className='col-lg-2 sub-s4-img-container'>
                            <img className='sub-s4-img' src={element.image} alt='NeroImg.png' />
                          </div>

                          {/* Text */}
                          <div className='col-lg-10 sub-s4-sm-container'>
                            <h4 className='sub-s4-sm-heading'>{element.heading}</h4>
                            <p className='sub-s4-sm-para'>{element.paragraph}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              {/* Column 2 */}
              <div className='col-12 col-md-3 col-lg-3 sub-s4-c2-container'>

                {/* Pulse Animation Container */}
                <div className="Sub-s4-SonarCont">
                  <div className="Sub-s4-SonarSect">
                    <div className="Sub-s4-SonarWave Sonar1"></div>
                    <div className="Sub-s4-SonarWave Sonar2"></div>
                    <div className="Sub-s4-SonarWave Sonar3"></div>
                  </div>
                </div>

                <img className='sub-c2-img' src={MainNeroImg} alt='Product-Nero.png'/>
                
              </div>

              {/* Column 3 */}
              <div className='col-12 col-md-4 col-lg-4 sub-s4-card-container'>
              {
                  sub4Dri1zzle2.map( element =>{
                    return(
                      <div className='col-12 col-md-12 col-lg-12' key={element.id}>
                        
                        <div className='sub-s4-card'>

                          {/* Image */}
                          <div className='sub-s4-img-container'>
                            <img className='sub-s4-img' src={element.image} alt='NeroImg.png' />
                          </div>

                          {/* Text */}
                          <div className='sub-s4-sm-container'>
                            <h4 className='sub-s4-sm-heading'>{element.heading}</h4>
                            <p className='sub-s4-sm-para'>{element.paragraph}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              
            </div>

            {/* Right Bubble */}
          <div className='sub-s4-bbl-right-container'>
            <img className='sub-s4-bbl-right' src={NeroRightImg} alt='Bubble-right.png'/>
          </div>
        </div>     
    </>
  )
}

export default SubCom43
