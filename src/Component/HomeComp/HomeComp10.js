import React from 'react'
import './CSS/HomeComp10.css'

import Slider from 'react-slick'

// import Data 
import { HomeSlidder } from '../../Data/HomeData'

//import aos
import Aos from 'aos'

const HomeComp10 = () => {

    Aos.init();

    // Settings
    const settings = {
        dots: false,          // Hide dots
        infinite: true,       // Infinite scrolling
        speed: 3000,           // Scrolling speed
        slidesToShow: 6,      // Show 5 cards at a time
        slidesToScroll: 1,    // Scroll 1 card at a time
        autoplay: true,       // Auto-scroll
        autoplaySpeed: 0,  // Stop for 0 seconds
        pauseOnHover: false,   // Pause when hovering
        draggable: true,      // Enable dragging
        swipeToSlide: true,   // Allow swipe to slide functionality
        arrows: false,        //Removes the next and previous buttons
        cssEase: 'linear',    // Continuous scrolling effect
        centerMode: true,          // Adds space between slides
        // centerPadding: '70px',      // Adjust the space as needed
        responsive:
            [
                {
                    breakpoint: 992,
                    settings:
                    {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 767,
                    settings:
                    {
                        slidesToShow: 2
                    }
                }
            ]
    }
    return (
        <>
            <div className='container-fluid home-s10-container'>
                {/* Heading */}
                <div>
                    <h2 className='home-s10-heading' data-aos="fade-down"
                        data-aos-duration="800" data-aos-once="true">Certifications</h2>
                </div>

                {/* Slides */}
                <Slider {...settings}>
                    {
                        HomeSlidder.map(record => {
                            return (
                                <div key={record.id}>
                                    <div className='home-s10-img-container'>
                                        <img className='home-s10-img' src={record.image} alt='certifications.png' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

        </>
    )
}

export default HomeComp10
