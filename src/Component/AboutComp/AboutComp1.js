import React from 'react'
import './CSS/AboutComp1.css'

//import images
import img1 from '../../Images/About/Product-Nero.png'
import { NavLink } from 'react-router-dom'

const AboutComp1 = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row About-r1-container'>

                    {/* left side  */}
                    <div className='col-12 col-lg-6 order-2 order-lg-1 About-r1-left-container'>

                        {/* Pulse Animation Container */}
                        <div className="SonarCont">
                            <div className="SonarSect">
                                <div className="SonarWave Sonar1"></div>
                                <div className="SonarWave Sonar2"></div>
                                <div className="SonarWave Sonar3"></div>
                            </div>
                        </div>

                        {/* image  */}
                        <img src={img1} alt='aero nero' className='About-r1-img' />

                    </div>

                    {/* Right side  */}
                    <div className='col-12 col-lg-6 order-1 order-lg-2 About-r1-right-container'>

                        <h3 className='About-r1-heading1'>Water from Air:</h3>

                        <h3 className='About-r1-heading2'>A Sustainable Solution</h3>

                        <p className='About-r1-para1'>At Aeronero, we believe that everyone deserves access to clean drinking water. Our mission is to make this a reality by providing innovative solutions that extract water from the atmosphere, ensuring a sustainable future for generations to come.</p>

                        <p className='About-r1-para2'>Experience the future of water, now!</p>

                        <div className='pt-2'>
                            <NavLink className='About-r1-button' to='/contact'>CONTACT SALES</NavLink>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default AboutComp1
