import React from 'react'
import './CSS/HomeComp8.css'

// import images 
import purityimg from '../../Images/Home/Purity-icon.png'

const HomeComp8 = () => {
    return (
        <>

            <div className='container-fluid d-flex justify-content-center Home-r8-head-container'>
                <div className='row Home-r8-container'>

                    {/* image  */}
                    <div className='col-12 col-md-3 Home-r8-content-container'>

                        <img src={purityimg} alt='Purity' className='Home-r8-img'/>
                        <h3 className='Home-r8-img-heading'>PURITY LEVELS</h3>

                    </div>

                    {/* para  */}
                    <div className='col-12 col-md-5 Home-r8-content-container'>
                        <p className='Home-r8-para'>Aeronero’s products generate pure alkaline rich water, that contain no bacteria, viruses or chemicals. Read our reports to know more</p>

                    </div>

                    {/* button  */}
                    <div className='col-12 col-md-3 Home-r8-content-container'>
                        <a className='Home-r8-button'href='https://aeronero.life/wp-content/uploads/2024/09/Aeronero-Solutions-2502917-001-26.08.2024-1.pdf' target='_blank' rel="noreferrer">QUALITY TEST REPORT &gt;</a>

                    </div>


                </div>
            </div>


        </>
    )
}

export default HomeComp8
