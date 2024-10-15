import React from 'react'

// AOS
import Aos from 'aos'

// CSS
import './CSS/AboutComp4.css'

// CEO image
import AbtS4img1 from '../../Images/About/Durga-CEO.png'

// Bubble Image
import AbtS4bblRight from '../../Images/Home/Bubble-right2.png'
import AbtS4bblLeft from '../../Images/Home/Bubble-left2.png'

const AboutComp4 = () => {

    // AOS
    Aos.init();

    return (
        <>
            <div className='container-fluid abt-s4-container'>

                {/* Heading & Paragraph */}
                <h2 className='abt-s4-heading'
                    data-aos="fade-down"
                    data-aos-delay="800"
                    data-aos-duration="1000"
                    data-aos-once="ture">Origin of <span className='abt-s4-highlight'>AERONERO</span></h2>
                <p className='abt-s4-para'>Aeronero products come powered with the latest technology that gives you real-time data</p>

                {/* Main Row */}
                <div className='abt-s4-bbl-container'>

                    {/* Right Bubble */}
                    <div className='abt-s4-right-bbl-container'>
                        <img src={AbtS4bblRight} alt='' className='abt-s4-right-bbl' />
                    </div>

                    <div className='abt-s4-row'>

                        <div className='row'>


                            {/* Paragraph */}
                            <div className='col-12 col-lg-7'>
                                <p className='abt-s4-main-para'><span className='abt-s4-main-highlight'>Durga Das</span> is an accomplished entrepreneur and former professional sportswoman who has made significant strides in both the sports and business worlds. She represented India in cricket, captained the US cricket team, and later pursued a career in professional golf. Her entrepreneurial journey began at the age of 14, driven by personal circumstances, and has been marked by resilience and continuous growth.</p>
                                <p className='abt-s4-main-para'>As the founder of Aeronero, Durga is leading the charge in revolutionizing the water industry with innovative air-water generation (AWG) technology. Aeronero converts humidity into clean water, addressing global water scarcity with cutting-edge solutions. Beyond her business achievements, Durga is also deeply committed to social responsibility, founding the charity WODER to combat water scarcity in refugee camps and promote water independence for women.</p>
                                <p className='abt-s4-main-para'>Durga's visionary leadership has earned her accolades, including the “Best Innovator” award at the HIEx platform at the World Health Assembly and a Woman Leadership award from Ms. Kiran Bedi. She also holds advisory roles on various international platforms, contributing over 30 years of experience in startups, business development, and mentoring new-age entrepreneurs.</p>
                            </div>

                            {/* Photo */}
                            <div className='col-12 col-lg-5 abt-s4-c2-container'>
                                <div
                                    data-aos="slide-left"
                                    data-aos-duration="1000"
                                    data-aos-easing="linear"
                                    data-aos-once="true" className='abt-s4-main-img-container'>

                                    {/* Image */}
                                    <img className='abt-s4-main-img' src={AbtS4img1} alt='Durga-CEO.png' />

                                    {/* Capyion */}
                                    <div>
                                        <h4 className='abt-s4-main-img-caption-heading'>Durga Das</h4>
                                        <p className='abt-s4-main-img-caption-para'>CEO</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right Bubble */}
                    <div className='abt-s4-left-bbl-container'>
                        <img src={AbtS4bblLeft} alt='' className='abt-s4-left-bbl' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutComp4