import React from 'react'
import './CSS/TechComp1.css'
import techvideoshrink from '../../Video/AN-Technology-Hero-Shrinked.mp4'
import techvideoportrait from '../../Video/Technology-Hero-Portrait.mp4'

const TechComp1 = () => {
    return (
        <>

            {/* video  */}

            {/* for tab and web view  */}
            <video autoPlay muted loop className='Tech-r1-hero-video d-none d-md-block'>
                <source src={techvideoshrink} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

             {/* for mobile view  */}
             <video autoPlay muted loop className='Tech-r1-hero-video d-block d-md-none'>
                <source src={techvideoportrait} type="video/mp4" />
                Your browser does not support the video tag.
            </video>


        </>
    )
}

export default TechComp1
