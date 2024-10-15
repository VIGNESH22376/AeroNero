import React from 'react'
import './CSS/AboutComp9.css'

//import data
import { AboutImpact } from '../../Data/AboutData'

const Aboutcomp9 = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row About-r9-container'>
                    <h3 className='About-r9-heading' data-aos="fade-down"
                        data-aos-duration="800" data-aos-once="true">Our <span className='About-r9-heading-color'>Impact Story</span></h3>

                    {/* left side  */}
                    <div className='row col-12 About-r9-card-container'>
                        {
                            AboutImpact.map(record => {
                                return (
                                    <div key={record.id} className='About-r9-card-div col-md-12 col-lg-6' data-aos="fade"
                                        data-aos-duration="800" data-aos-once="true">

                                        <div className='About-r9-card-inside-container'>
                                            {/* image  */}
                                            <img src={record.image} className='About-r9-card-img' alt='mission img' />

                                            {/* content */}
                                            <div className='d-flex flex-column justify-content-center'>
                                                <h3 className='About-card-heading'>{record.heading}</h3>
                                                <p className='About-card-para'>{record.caption}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

            </div>

        </>
    )
}

export default Aboutcomp9
