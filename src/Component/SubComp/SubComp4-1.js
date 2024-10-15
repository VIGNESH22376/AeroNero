import React from 'react'
// CSS
import './CSS/SubComp4.css'

// AOS
import aos from 'aos'

// Images
import NeroLeftImg from '../../Images/Home/Bubble-Left.png'
import NeroRightImg from '../../Images/Home/Bubble-right.png'
import MainNeroImg from '../../Images/Nero/Product-Nero.png'
import SubNeroImg1 from '../../Images/Nero/NeroImg1Phone.png'
import SubNeroImg2 from '../../Images/Nero/NeroImg2Settings.png'
import SubNeroImg3 from '../../Images/Nero/NeroImg3Maximize.png'
import SubNeroImg4 from '../../Images/Nero/NeroImg4Mute.png'

const sub4Nero1=[
  {
    id : 1,
    image : SubNeroImg1,
    heading : "Smart Technology",
    paragraph : "Monitor water production and quality through our app"
  },
  {
    id : 2,
    image : SubNeroImg2,
    heading : "Easy Maintenance",
    paragraph : "Minimal upkeep for hassle-free use"
  }
]

const sub4Nero2 =[
  {
    id : 1,
    image : SubNeroImg3,
    heading : "Compact Design",
    paragraph : "Fits seamlessly into your living space."
  },
  {
    id : 2,
    image : SubNeroImg4,
    heading : "Quiet Operation",
    paragraph : "Doesn't disrupt your daily routine"
  }
]

const SubCom41 = () => {

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
            data-aos-once="true">Key Features <span className="sub-s4-highlight">for a Better You</span></h2>

            <div className='row sub-s4-row-container'>

              {/* Column 1 */}
              <div className='col-12 col-md-4 col-lg-4 sub-s4-card-container'>
                {
                  sub4Nero1.map( element =>{
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

                <img src={MainNeroImg} alt='Product-Nero.png'/>
                
              </div>

              {/* Column 3 */}
              <div className='col-12 col-md-4 col-lg-4 sub-s4-card-container'>
              {
                  sub4Nero2.map( element =>{
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

export default SubCom41
