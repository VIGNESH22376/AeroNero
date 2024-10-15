import React from 'react'
import Slider from 'react-slick'

// CSS
import './CSS/HomeComp6.css'

const waterForAll =[
    {
        id : 1,
        text : "water for all, always"
    },
    {
        id : 2,
        text : "water for all, always"
    },
    {
        id : 3,
        text : "water for all, always"
    },
    {
        id : 4,
        text : "water for all, always"
    },
    {
        id : 5,
        text : "water for all, always"
    }
]

const HomeComp6 = () => {

    // Settings
    const settings = {
        dots: false,          // Hide dots
        infinite: true,       // Infinite scrolling
        speed: 5000,           // Scrolling speed
        slidesToShow: 4.5,      // Show 5 cards at a time
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
              slidesToShow: 2.5
            }
          },
          {
            breakpoint: 767,
            settings: 
            {
              slidesToShow: 1.2
            }
          }
        ]
    }
 
  return (
    <>
        <div className='container-fluid home-s6-container'>
            <Slider {...settings}>
            {
                waterForAll.map( data =>{
                    return(
                        <div key={data.id}>
                            <span className='water-txt'>{data.text}</span>
                        </div>
                    )
                })
            }
            </Slider>
        </div>
      
    </>
  )
}

export default HomeComp6