import React from 'react'
import './CSS/TechComp2.css'

//import Data
import { TechProcess } from '../../Data/TechData'

// AOS
import Aos from 'aos'

const TechComp2 = () => {

    // Aos
    Aos.init();

    return (
        <>
            <div className='container-fluid'>
                <div className='row Home-r7-container'>

                    {/* content  */}
                    <div className='Home-r7-content-div'>

                        <h3 className='Home-r7-heading' data-aos="fade-down"
                            data-aos-duration="800" data-aos-once="true">The Science 
                                <span className='Home-r7-heading-color'> Behind Pure Water</span> </h3>

                        <p className='Home-r7-para'>Aeronero’s patented AWG technology transforms ambient air into pure, refreshing water, by replicating the natural water cycle, through a multi-stage process:</p>
                    </div>

                    {/* card */}
                    <div className='row Home-r7-card-container'>
                        {
                            TechProcess.map(record => (
                                <div key={record.id} className='col-12 col-md-2 p-0'>

                                    {/* image */}
                                    <div className='Home-r7-img-div'>
                                        <img src={record.image} alt='process' className='Home-r7-img' />
                                    </div>

                                    {/* content  */}
                                    <h3 className='Home-r7-card-heading'>{record.heading}</h3>
                                    <p className='Home-r7-card-para'>{record.caption}</p>
                                </div>
                            ))

                        }
                    </div>

                </div>
            </div>

        </>
    )
}

export default TechComp2
