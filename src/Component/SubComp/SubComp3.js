import React from 'react'
import { NavLink } from 'react-router-dom'

// AOS
import aos from 'aos'

// CSS
import './CSS/SubComp3.css'

// Images
import SubS3img1 from '../../Images/Nero/Air.png'
import SubS3img1Right from '../../Images/Nero/Air Right.png'
import SubS3img2 from '../../Images/Nero/Carbon.png'
import SubS3img3 from '../../Images/Nero/UV.png'
import SubS3img4 from '../../Images/Nero/Minerals.png'

const SubS3Row = [
    {
        id : 1,
        imageLeft : SubS3img1,
        imageRight : SubS3img1Right,
        heading : "Air Filtration",
        paragraph : "Impurities are removed from the air."
    },
    {
        id : 2,
        imageLeft : SubS3img2,
        imageRight : SubS3img2,
        heading : "Carbon Filtration",
        paragraph : "Unpleasant tastes, odours, and colours are eliminated."
    },
    {
        id : 3,
        imageLeft : SubS3img3,
        imageRight : SubS3img3,
        heading : "UV Purification",
        paragraph : "Harmful bacteria are eradicated."
    },
    {
        id : 4,
        imageLeft : SubS3img4,
        imageRight : SubS3img4,
        heading : "Mineralization",
        paragraph : "Essential minerals are added to create alkaline water with a pH of 6.5-8.5"
    }
]

const SubCom3 = ({data}) => {

    // AOS
    aos.init();

  return (
    <>
        <div className='container-fluid sub-s3-container'>
            <h2 className="sub-s3-heading"
            data-aos="fade-down"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-once="true">The Science <span className="sub-s3-highlight">Behind Pure Water</span></h2>
            <p className='sub-s3-para'>{data} uses Aeronero's patented technology to transform ambient air into pure, refreshing water, by replicating the natural water cycle, through a multi-stage process:</p>

            <div className='row gap-4 sub-s3-bar-container-outside'>
                {
                    SubS3Row.map( bar =>{
                        return(
                            <div className='col-md-12 col-lg-12 sub-s3-bar-container' key={bar.id}>

                                <div className='row sub-s3-bar'>
                                    {/* Left Image */}
                                    <div className='col-12 col-md-2 col-lg-2 sub-s3-left-img-container'>
                                        <img className='sub-s3-left-img' src={bar.imageLeft} alt='SubS3Imges.png' />
                                    </div>

                                    {/* Text */}
                                    <div className='col-12 col-md-8 col-lg-8 sub-s3-txt-container'>
                                        <h3 className='sub-s3-sm-heading'>{bar.heading}</h3>
                                        <p className='sub-s3-sm-para'>{bar.paragraph}</p>
                                    </div>

                                    {/* Right Image */}
                                    <div className='col-md-2 col-lg-2 sub-s3-right-img-container'>
                                        <img className='sub-s3-right-img' src={bar.imageRight} alt='SubS3Imges.png' />
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>

            {/* Button */}
            <div className='sub-s3-btn-container'>
                <NavLink className='sub-s3-btn' to='/contact'>contact sales</NavLink>
            </div>
        </div>
    </>
  )
}

export default SubCom3
