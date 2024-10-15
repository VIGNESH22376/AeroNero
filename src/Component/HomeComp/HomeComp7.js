import React from 'react'
import './CSS/HomeComp7.css'

//import Data
import { HomeProcess } from '../../Data/HomeData'

// AOS
import Aos from 'aos'

const HomeComp7 = () => {

     // Aos
     Aos.init();
     
    return (
        <>
            <div className='container-fluid'>
                <div className='row Home-r7-container'>

                    {/* content  */}
                    <div className='Home-r7-content-div'>

                        <h3 className='Home-r7-heading' data-aos="fade-down"
                        data-aos-duration="800" data-aos-once="true"><span className='Home-r7-heading-color'>Just How Water</span> Is Supposed To Be.</h3>

                        <p className='Home-r7-para'>Aeronero’s proprietary 5-Step advanced filtration system cleans your water in a
                            way where other existing technologies fail.</p>
                    </div>

                    {/* card */}
                    <div className='row Home-r7-card-container'>
                        {
                            HomeProcess.map(record => (
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

export default HomeComp7
