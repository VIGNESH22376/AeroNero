import React from 'react'
import './CSS/HomeComp15.css'

import Slider from 'react-slick'

// import data 
import { HomeSlidderVideo } from '../../Data/HomeData'

//import aos
import Aos from 'aos'

const HomeComp15 = () => {
    
    Aos.init();

    // Settings
    const settings = {
        dots: true,          // visible dots
        infinite: true,       // Infinite scrolling
        speed: 2000,           // Scrolling speed
        slidesToShow: 3,      // Show 3 cards at a time
        slidesToScroll: 1,    // Scroll 1 card at a time
        autoplay: true,       // Auto-scroll
        autoplaySpeed: 3000,  // Stop for 3 seconds
        pauseOnHover: false,   // Pause when hovering
        draggable: true,      // Enable dragging
        swipeToSlide: true,   // Allow swipe to slide functionality
        arrows: false,        //Removes the next and previous buttons

        responsive:
            [
                {
                    breakpoint: 992,
                    settings:
                    {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings:
                    {
                        slidesToShow: 1
                    }
                }
            ]
    }

    return (
        <>
            <div className='container-fluid Home-r15-container'>
                <div className='row '>

                    <h3 className='Home-r15-heading' data-aos="fade-down"
                        data-aos-duration="800" data-aos-once="true">Real Water Warriors<span className='Home-r7-heading-color'>, Real Results</span></h3>
                </div>
                <div className='row Home-r15-small-container'>
                        {/* Slides */}
                        <Slider {...settings} className='p-0 m-0'>
                            {
                                HomeSlidderVideo.map(record => {
                                    return (
                                        <div key={record.id} className='col-12 col-md-5 col-lg-4 d-flex justify-content-center p-0 m-0'>
                                            <div className='home-r15-img-container '>
                                                <a href={record.link} target='_blank' rel="noreferrer"><img className='home-r15-img' src={record.image} alt='certifications.png' /></a>

                                                <div className='Home-r15-icon-div'>
                                                    <i className="fa-solid fa-play Home-r15-icon"></i>
                                                </div>
                                            </div>


                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
            </div>

        </>
    )
}

export default HomeComp15
