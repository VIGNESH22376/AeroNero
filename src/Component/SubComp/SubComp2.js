import React from 'react'

// AOS
import aos from 'aos'

// CSS
import './CSS/SubComp2.css'

// Images
import SubS2BblLeft from '../../Images/Home/Bubble-Left.png'
import SubS2BblRight from '../../Images/Home/Bubble-right.png'

import waterDrops from '../../Images/Nero/water drops white.png'
import elements from '../../Images/Nero/elements white.png'
import Ac from '../../Images/Nero/ac white.png'
import waterDropCancel from '../../Images/Nero/water drop cancel white.png'

// On Hover
import waterDropsHover from '../../Images/Nero/water drops blue.png'
import elementsHover from '../../Images/Nero/elements blue.png'
import AcHover from '../../Images/Nero/ac blue.png'
import waterDropCancelHover from '../../Images/Nero/water drop cancel blue.png'


const SubS2Row =[
    {
        id : 1,
        image : waterDrops,
        imageHover : waterDropsHover,
        paragraph : "Converts humidity in the air into portable drinking water"
    },
    {
        id : 2,
        image : elements,
        imageHover : elementsHover,
        paragraph : "Augmented with minerals that gives you high alkaline water with 6.5 to 8.5 PH"
    },
    {
        id : 3,
        image : Ac,
        imageHover : AcHover,
        paragraph : "Four layers of filtration and purification"
    },
    {
        id : 4,
        image : waterDropCancel,
        imageHover : waterDropCancelHover,
        paragraph : "Purifies the air and acts as a dehumidifier"
    }
]

const SubCom2 = () => {

    // AOS
  aos.init();

  return (
    <>
        <div className='container-fluid sub-s2-container'>

            {/* Bubble Left */}
            <div className='sub-s2-bbl-left-container'>
                <img className='sub-s2-bbl-img' src={SubS2BblLeft} alt='Bubble-Left.png'/>
            </div>

            {/* Heading */}
            <h2 className='sub-s2-heading'
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-duration="1000"
            data-aos-once="true">Experience the future <span className='sub-s2-highlight'>of water with Aeronero.</span></h2>

            {/* Paragraph */}
            <p className='sub-s2-para'>Our innovative AWG technology delivers clean, safe, and sustainable drinking water without compromising convenience. Aeronero is more than just a water purifier; it’s a commitment to your health and the planet.</p>
                
            {/* Cards */}
            <div className='row sub-s2-row'>
                {
                    SubS2Row.map( card =>{
                        return(
                            <div className='col-12 col-md-6 col-lg-3 sub-s2-card-container' key={card.id}>

                                <div className='sub-s2-card'>
                                    <div className='sub-s2-card-img-container'>
                                        <img className='sub-s2-card-img' src={card.image} alt='sub-s2-images.png' />
                                        <img className='sub-s2-card-img-hover' src={card.imageHover} alt='sub-s2-images.png' />
                                    </div>

                                    <div>
                                        <p className='sub-s2-sm-para'>{card.paragraph}</p>
                                    </div>
                                </div>

                            </div>
                        )
                            
                    })
                }

            </div>

            {/* Bubble Right */}
            <div className='sub-s2-bbl-right-container'>
                <img className='sub-s2-bbl-img' src={SubS2BblRight} alt='Bubble-right.png'/>
            </div>

        </div>
    </>
  )
}

export default SubCom2