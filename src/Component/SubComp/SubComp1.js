import React from 'react'
import './CSS/SubComp1.css'

import bgImg from '../../Images/Product/blue-bg.png'
import { NavLink } from 'react-router-dom'

const SubComp1 = ({ heading1, para1, para2, image1, image2, image3 }) => {
    return (
        <>
            <div className='container-fluid p-0  Sub-r1-container'>

                <div>
                    <img src={bgImg} alt='Background img' className='Sub-r1-BG-img' />
                </div>

                <div className='row Sub-r1-row-container'>

                    {/* left side  */}
                    <div className='col-12 col-md-6 Sub-r1-small-container1'>

                        {/* Heading  */}
                        <div className='Sub-r1-heading-container'>
                            <h3 className='Sub-r1-heading'>{heading1}</h3>

                            {/* Star image  */}
                            <div>
                                <img src={image1} alt='star' className='Sub-r1-heading-img' />
                            </div>
                        </div>

                        {/* para  */}
                        <p className='Sub-r1-para1'>{para1}</p>
                        <p className='Sub-r1-para2'>{para2}</p>

                        <div className='pt-4 Sub-r1-button-div'>
                            <NavLink to='/contact' className='Sub-r1-button'>Contact Sales</NavLink>
                        </div>

                    </div>

                    {/* center side  */}
                    <div className='col-10 col-md-5 Sub-r1-small-container2'>

                            <img src={image2} alt='Product img' className='Sub-r1-product-img' />       

                    </div>

                    {/* Right side  */}
                    <div className='col-2 col-md-1 Sub-r1-small-container3'>

                        <img src={image3} alt='vertical name' className='Sub-r1-Product-name-img'/>

                    </div>


                </div>

            </div>

        </>
    )
}

export default SubComp1
