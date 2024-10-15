import React from 'react'
import './CSS/TechComp3.css'

// AOS
import Aos from 'aos'

//import images 
import Tech from '../../Images/Technology/Technology-image.webp'

const TechComp3 = () => {

    // Aos
    Aos.init();

    return (
        <>
            <div className='container-fluid Tech-r3-container'>

                <h3 className='Tech-r3-heading' data-aos="fade-down"
                    data-aos-duration="800" data-aos-once="true">

                    Our commitment <span className='Tech-r3-heading-color'>to purity</span></h3>

                <div className=' d-flex justify-content-center'>

                    <div className='row col-md-11 col-lg-9 Tech-r3-content-container'>

                        {/* content */}
                        <div className='col-12 col-md-8 Tech-r3-content-div'>
                            <p className='Tech-r3-para'>Aeronero’s atmospheric water generation technology ensures the highest standards of water quality. Every drop of water produced by our systems undergoes rigorous testing and filtration to eliminate impurities and contaminants.</p>

                            
                                <a className='Tech-r3-button-div' href='https://aeronero.life/wp-content/uploads/2024/09/Aeronero-Solutions-2502917-001-26.08.2024-1.pdf' target='_blank' rel="noreferrer"><button className='Tech-r3-button'>Read our Water Quality Report</button></a>

                            


                        </div>

                        {/* image  */}
                        <div className='Tech-r3-image-div col-12 col-md-4'>
                            <img src={Tech} alt='tech img' className='Tech-r3-image' />

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default TechComp3
