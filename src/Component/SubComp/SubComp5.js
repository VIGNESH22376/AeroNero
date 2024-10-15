import React from 'react'

import './CSS/SubComp5.css'

// AOS
import AOS from 'aos';



const SubCom5 = ({value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, airwellHeading, airwellData}) => {

  // AOS
  AOS.init();

  const subS5Column1 =[
    {
      id : 1,
      heading : "Capacity:",
      data : value1
    },
    {
      id : 2,
      heading : "Usage:",
      data : value2
    },
    {
      id : 3,
      heading : "Power Supply:",
      data : value3
    },
    {
      id : 4,
      heading : "Power Consumption:",
      data : value4
    },
    {
      id : 5,
      heading : "Tank Capacity:",
      data : value5
    },
    {
      id : 6,
      heading : airwellHeading,
      data : airwellData
    }
  ]

  const subS5Column2 =[
    {
      id : 1,
      heading : "	Material:",
      data : value6
    },
    {
      id : 2,
      heading : "Filtration:",
      data : value7
    },
    {
      id : 3,
      heading : "Net Weight:",
      data : value8
    },
    {
      id : 4,
      heading : "	Size:",
      data : value9
    },
    {
      id : 5,
      heading : "Noise level:",
      data : value10
    }
  ]

  return (
    <>
        <div className='container-fluid sub-s5-container'>

          <h2 className="sub-s5-highlight"
          data-aos="fade-down"
          data-aos-delay="800"
          data-aos-duration="800"
          data-aos-once="true">Specifications</h2>

          <div className='sub-s5-box-container'>

            <div className='row'>
              {/* Column 1 */}
              <div className='col-6 col-lg-7'>
                {
                  subS5Column1.map( detail1 =>{
                    return(
                      <div className='row col-12 col-lg-12' key={detail1.id}>

                        {/* Heading */}
                        <div className='col-5 col-lg-5 p-0'>
                          <h5 className='sub-s5-c1-heading'>{detail1.heading}</h5>
                        </div>

                        {/* Value */}
                        <div className='col-7 col-lg-7'>
                          <p className='sub-s5-c1-para'>{detail1.data}</p>
                        </div>

                      </div>
                    )
                  })
                  
                }

              </div>

              {/* Column 2 */}
              <div className='col-6 col-lg-5'>
                {
                  subS5Column2.map( detail1 =>{
                    return(
                      <div className='row col-12 col-lg-12' key={detail1.id}>

                        {/* Heading */}
                        <div className='col-6 col-lg-4 p-0'>
                          <h5 className='sub-s5-c1-heading'>{detail1.heading}</h5>
                        </div>

                        {/* Value */}
                        <div className='col-6 col-lg-8'>
                          <p className='sub-s5-c1-para'>{detail1.data}</p>
                        </div>

                      </div>
                    )
                  })
                  
                }

              </div>
            </div>

          </div>

        </div>     
    </>
  )
}

export default SubCom5
