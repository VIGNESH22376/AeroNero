import React from 'react'
import Header from '../Component/Header/Header'
import { useEffect } from 'react'

// import images 
import NavBarLogoWhite from '../Images/Logo-White.png'

import SubComp1 from '../Component/SubComp/SubComp1'
import SubComp2 from '../Component/SubComp/SubComp2'
import SubComp3 from '../Component/SubComp/SubComp3'
import SubComp4code5 from '../Component/SubComp/SubComp4-5'
import SubComp5 from '../Component/SubComp/SubComp5'
import SubComp6 from '../Component/SubComp/SubComp6'
import HomeComp15 from '../Component/HomeComp/HomeComp15'
import Footer from '../Component/Footer/Footer'

// import images 
import ImgR1Star from '../Images/Product/4.9-star.png'
import ImgR1Product from '../Images/Product/Airwell-Product-Image.png'
import ImgR1Ver from '../Images/Product/Airwell-1.png'

const Airwell = () => {
    // Change Title
    useEffect(() => {
      document.title = "Airwell - Aeronero"
    })
  return (
    <>
      <Header
        MainLogo={NavBarLogoWhite} manualColor={'#fffffff0'} manualBackgroundColor={'#008cd0f0'}
      />
      {/* ----------------------------Row 1-------------------------- */}
      <SubComp1
        heading1="Airwell"
        para1="Scalable Water Solutions for Every Need"
        para2="Modular, reliable, and sustainable, Airwell delivers 500-5000 litres of water daily, perfect for offices, NGOs, industries, and hospitality."
        image1={ImgR1Star}
        image2={ImgR1Product}
        image3={ImgR1Ver}
      />

      {/* ----------------------------Row 2-------------------------- */}
      <SubComp2 />

      {/* ----------------------------Row 3-------------------------- */}
      <SubComp3
        data="Airwell"
      />

      {/* ----------------------------Row 4-------------------------- */}
      <SubComp4code5/>

      {/* ----------------------------Row 5-------------------------- */}

      <SubComp5
        value1="5000 Liters / 24hours, (@RH 80%, 30°C)  "
        value2="Industrial"
        value3="AC, 1 Phase, 110/220V, 50/60Hz"
        value4="8000 W"
        value5="15 litres"
        value6="SS body & SS/Food grade plastic water tank"
        value7="Sediment, Carbon, UV & Minerals"
        value8="500 kg / 1102 lb"
        value9="LWH 700711482 mm"
        value10="<140dB(A)"
        airwellHeading="Total no. of Generators:"
        airwellData="3"
      />

      {/* ----------------------------Row 6-------------------------- */}
      <SubComp6 />

      {/* ----------------------------Row 7-------------------------- */}
      <HomeComp15 />

      <Footer />
    </>
  )
}

export default Airwell
