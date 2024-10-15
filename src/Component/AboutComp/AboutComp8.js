import React from 'react'

// Aos
import Aos from 'aos'

// CSS
import './CSS/AboutComp8.css'

// Images
import AbtS8Advisor1 from '../../Images/About/Pradeep-Kattakkil-Advisor.png'
import AbtS8Advisor2 from '../../Images/About/Bob-Murari-Advisor.png'
import AbtS8Advisor3 from '../../Images/About/Meera-Siva-Advisor.png'
import AbtS8Advisor4 from '../../Images/About/Raj-Murari-Advisor.png'

const AbtS8Advisrs =[
  {
    id : 1,
    image : AbtS8Advisor1,
    paragraph : "Innovative global health leader, co-founder of HIEx and WiNFUND, facilitating over $200M in investments and supporting female health entrepreneurship. Also co-founded TSF, the largest UN technical assistance mechanism in HIV.",
    name : "Pradeep Kattakkil"
  },
  {
    id : 2,
    image : AbtS8Advisor2,
    paragraph : "P. Murari, MA (Economics) from Madras University, served in the Indian Administrative Service (IAS) from 1957 to 1992, holding various esteemed positions including Secretary to the President of India. Currently, he advises the President of FICCI.",
    name : "Bob Murari"
  },
  {
    id : 3,
    image : AbtS8Advisor3,
    paragraph : "Experienced early-stage investor and finance professional, CFA charterholder, with 13 years finance, 16 years engineering; managed Shelter Venture Fund, advised startups, ran accelerators, authored finance articles, and holds multiple patents.",
    name : "Meera Siva"
  },
  {
    id : 4,
    image : AbtS8Advisor4,
    paragraph : "Visionary leader with 20+ years driving transformation in finance, strategy, and global P&L management. Currently CFO at MGA Entertainment, formerly CXO at Disney.",
    name : "Raj Murari"
  }
]

const AboutComp8 = () => {

  // Aos
  Aos.init();

  return (
    <>
      <div className='container-fluid abt-s8-container'>

        <h2  
        data-aos="fade-down"
        data-aos-duration="800" 
        data-aos-once="true" className='abt-s8-heading'>Advisors</h2>

        {/* Images */}
        <div className='row'>
          {
            AbtS8Advisrs.map( advisor =>{
              return(
                <div className='col-md-6 col-lg-3' key={advisor.id}>

                  {/* Image */}
                  <div className='abt-s8-img-container'>
                    <img className='abt-s8-img' src={advisor.image} alt='Advisors.png' />

                    {/* Paragrapg */}
                    <div className='abt-s8-para-container'>
                      <p className='abt-s8-para'>{advisor.paragraph}</p>
                    </div>

                  </div>

                  {/* Name */}
                  <h4 className='abt-s8-sm-name'>{advisor.name}</h4>
                </div>
              )
            })
          }

        </div>

      </div>
    </>
  )
}

export default AboutComp8