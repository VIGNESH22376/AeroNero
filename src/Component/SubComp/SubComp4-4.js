import React from 'react'
// CSS
import './CSS/SubComp4.css'

// AOS
import aos from 'aos'

// Images
import NeroLeftImg from '../../Images/Home/Bubble-Left.png'
import NeroRightImg from '../../Images/Home/Bubble-right.png'
import MainNeroImg from '../../Images/Thunder/Product-Thunder.png'
import minimize from '../../Images/Drizzle/minimize.png'
import sheild from '../../Images/Thunder/sheild.png'
import gear from '../../Images/Thunder/gear.png'
import cool from '../../Images/Thunder/cool.png'
import drum from '../../Images/Drizzle/drum.png'

const sub4Thunder1=[
  {
    id : 1,
    image : sheild,
    heading : "Durable Construction",
    paragraph : "Features a durable stainless steel body and a food-grade plastic water tank."
  },
  {
    id : 2,
    image : gear,
    heading : "Industrial-Grade",
    paragraph : "Designed for heavy-duty use in industrial settings."
  },
  {
    id : 3,
    image : minimize,
    heading : "High Capacity",
    paragraph : "Produces up to 150 litres of clean water per day, even in high humidity conditions (80% RH) and temperatures up to 30°C."
  }
]

const sub4Thunder2 =[
  {
    id : 1,
    image : cool,
    heading : "Advanced Filtration",
    paragraph : "Employs a four-stage filtration system that removes sediment, impurities, and contaminants, ensuring clean and safe drinking water."
  },
  {
    id : 2,
    image : drum,
    heading : "Large Tank Capacity",
    paragraph : "Stores up to 100 litres of purified water."
  }
]

const SubCom44 = () => {

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
            data-aos-once="true">What makes Thunder <span className="sub-s4-highlight">a perfect choice for you</span></h2>

            <div className='row sub-s4-row-container'>

              {/* Column 1 */}
              <div className='col-12 col-md-4 col-lg-4 sub-s4-card-container'>
                {
                  sub4Thunder1.map( element =>{
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
                  sub4Thunder2.map( element =>{
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

export default SubCom44
