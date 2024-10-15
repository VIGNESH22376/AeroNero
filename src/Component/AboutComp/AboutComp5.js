import React from 'react'
import Slider from 'react-slick'

// CSS
import './CSS/AboutComp5.css'

const waterForAll =[
    {
        id : 1,
        text : "AERONERO"
    },
    {
        id : 2,
        text : "AERONERO"
    },
    {
        id : 3,
        text : "AERONERO"
    },
    {
        id : 4,
        text : "AERONERO"
    },
    {
        id : 5,
        text : "AERONERO"
    },
    {
        id : 6,
        text : "AERONERO"
    },
    {
        id : 7,
        text : "AERONERO"
    },
    {
        id : 8,
        text : "AERONERO"
    }
]

const AboutComp5 = () => {

    // Settings
    const settings = {
        dots: false,          // Hide dots
        infinite: true,       // Infinite scrolling
        speed: 5000,           // Scrolling speed
        slidesToShow: 8,      // Show 5 cards at a time
        slidesToScroll: 1,    // Scroll 1 card at a time
        autoplay: true,       // Auto-scroll
        autoplaySpeed: 0,  // Stop for 0 seconds
        pauseOnHover: false,   // Pause when hovering
        draggable: true,      // Enable dragging
        swipeToSlide: true,   // Allow swipe to slide functionality
        arrows: false,        //Removes the next and previous buttons
        cssEase: 'linear',    // Continuous scrolling effect
        centerMode: true,          // Adds space between slides
        rtl: true,                 //Direction from left to Right
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
        <div className='container-fluid abt-s5-container'>
            <Slider {...settings}>
            {
                waterForAll.map( data =>{
                    return(
                        <div key={data.id}>
                            <span className='abt-s5-txt'>{data.text}</span>
                        </div>
                    )
                })
            }
            </Slider>
        </div>
    </>
  )
}

export default AboutComp5