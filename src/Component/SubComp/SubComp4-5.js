import React from 'react'
// CSS
import './CSS/SubComp4.css'

// AOS
import aos from 'aos'

// Images
import NeroLeftImg from '../../Images/Home/Bubble-Left.png'
import NeroRightImg from '../../Images/Home/Bubble-right.png'
import MainNeroImg from '../../Images/Airwell/Airwell-Product-Image.png'
import gearPlus from '../../Images/Airwell/gearplus.png'
import cool from '../../Images/Thunder/cool.png'
import drum from '../../Images/Drizzle/drum.png'
import tap from '../../Images/Airwell/tap.png'
import muscle from '../../Images/Airwell/muscle.png'
import cubes from '../../Images/Airwell/cubes.png'

const sub4Airwell1=[
  {
    id : 1,
    image : drum,
    heading : "Extensive Storage",
    paragraph : "Boasts a 200-litre tank capacity to handle peak water demands."
  },
  {
    id : 2,
    image : gearPlus,
    heading : "Industrial Powerhouse",
    paragraph : "Designed to meet the rigorous demands of industrial settings."
  },
  {
    id : 3,
    image : cool,
    heading : "Advanced Filtration",
    paragraph : "Employs a four-stage filtration process to guarantee pure and safe water."
  }
]

const sub4Airwell2 =[
  {
    id : 1,
    image : tap,
    heading : "Massive Capacity",
    paragraph : "Produces a substantial 5000 litres of clean water per day, ensuring a consistent supply for large-scale operations."
  },
  {
    id : 2,
    image : muscle,
    heading : "Robust Construction",
    paragraph : "Built with durable stainless steel and food-grade plastic for longevity."
  },
  {
    id : 3,
    image : cubes,
    heading : "Modular Design",
    paragraph : "A scalable system allows for customization to meet specific water requirements."
  }
]

const SubCom45 = () => {

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
            data-aos-once="true">What makes Airwell <span className="sub-s4-highlight">a perfect choice for you</span></h2>

            <div className='row sub-s4-row-container'>

              {/* Column 1 */}
              <div className='col-12 col-md-4 col-lg-4 sub-s4-card-container'>
                {
                  sub4Airwell1.map( element =>{
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
                  sub4Airwell2.map( element =>{
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
              
            </div>

            {/* Right Bubble */}
          <div className='sub-s4-bbl-right-container'>
            <img className='sub-s4-bbl-right' src={NeroRightImg} alt='Bubble-right.png'/>
          </div>
        </div>     
    </>
  )
}

export default SubCom45
