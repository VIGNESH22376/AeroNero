import React from 'react'
import './CSS/AboutComp7.css'

// import data 
import { AboutTeam } from '../../Data/AboutData'

// Aos
import Aos from 'aos'

const AboutComp7 = () => {


    // Aos
    Aos.init();

    return (
        <>
            <div className='container-fluid About-r7-container'>

                {/* Heading  */}
                <h3 className='About-r7-heading' data-aos="fade-down"
                    data-aos-duration="800"
                    data-aos-once="true">Meet <span className='About-r7-heading-color'>the team</span></h3>

                {/* Card  */}
                <div className='row About-r7-small-container'>

                    {
                        AboutTeam.map(record => {
                            return (
                                <div key={record.id} className='col-12 col-md-6 col-lg-3'>
                                    <div>

                                        {/* image  */}
                                        <div className='About-r7-image-container'>

                                            {/* image  */}
                                            <img src={record.image} alt='Team member' className='About-r7-image' />

                                            {/* para  */}
                                            <div className='About-r7-image-para-div'>
                                                <p className='About-r7-image-para'>{record.para}</p>
                                            </div>

                                        </div>

                                        {/* Content  */}
                                        <h3 className='About-r7-card-heading'>{record.name}</h3>
                                        <p className='About-r7-card-para'>{record.caption}</p>

                                    </div>

                                </div>
                            )
                        })
                    }

                </div>

            </div>

        </>
    )
}

export default AboutComp7
