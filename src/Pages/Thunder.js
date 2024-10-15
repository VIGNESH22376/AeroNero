import React from 'react'
import Header from '../Component/Header/Header'
import { useEffect } from 'react'

// import images 
import NavBarLogoWhite from '../Images/Logo-White.png'

import SubComp1 from '../Component/SubComp/SubComp1'
import SubComp2 from '../Component/SubComp/SubComp2'
import SubComp3 from '../Component/SubComp/SubComp3'
import SubComp4code4 from '../Component/SubComp/SubComp4-4'
import SubComp5 from '../Component/SubComp/SubComp5'
import SubComp6 from '../Component/SubComp/SubComp6'
import HomeComp15 from '../Component/HomeComp/HomeComp15'
import Footer from '../Component/Footer/Footer'

// import images 
import ImgR1Star from '../Images/Product/4.9-star.png'
import ImgR1Product from '../Images/Product/Product-Thunder.png'
import ImgR1Ver from '../Images/Product/Thunder-1.png'

const Thunder = () => {
    // Change Title
    useEffect(() => {
      document.title = "Thunder - Aeronero"
    })
  return (
    <>
      <Header
        MainLogo={NavBarLogoWhite} manualColor={'#fffffff0'} manualBackgroundColor={'#008cd0f0'}
      />
      {/* ----------------------------Row 1-------------------------- */}
      <SubComp1
        heading1="Thunder"
        para1="Powering Communities with Pure Water"
        para2="Delivering up to 150 litres of clean water daily, Thunder is the ideal solution for communities, NGOs, offices, factories, and institutions seeking water independence."
        image1={ImgR1Star}
        image2={ImgR1Product}
        image3={ImgR1Ver}
      />

      {/* ----------------------------Row 2-------------------------- */}
      <SubComp2 />

      {/* ----------------------------Row 3-------------------------- */}
      <SubComp3
        data="Thunder"
      />

      {/* ----------------------------Row 4-------------------------- */}
      <SubComp4code4 />

      {/* ----------------------------Row 5-------------------------- */}
      <SubComp5
        value1="150 Liters / 24hours, (@RH 80%, 30°C)"
        value2="Industrial"
        value3="AC, 1 Phase, 110/220V, 50/60Hz"
        value4="2400 W"
        value5="100 litres"
        value6="SS body & SS/Food grade plastic water tank"
        value7="Sediment, Carbon, UV & Minerals"
        value8="110 kg / 243 lb"
        value9="LWH 700711915 mm"
        value10="<72dB(A)"
        airwellHeading=""
        airwellData=""
      />

      {/* ----------------------------Row 6-------------------------- */}
      <SubComp6 />

      {/* ----------------------------Row 7-------------------------- */}
      <HomeComp15 />

      <Footer />
    </>
  )
}

export default Thunder
