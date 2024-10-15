import React from 'react'
import Header from '../Component/Header/Header'

import { useEffect } from 'react'

// import images 
import NavBarLogoWhite from '../Images/Logo-White.png'

// import component 
import SubComp1 from '../Component/SubComp/SubComp1'
import SubComp2 from '../Component/SubComp/SubComp2'
import SubComp3 from '../Component/SubComp/SubComp3'
import SubComp4code1 from '../Component/SubComp/SubComp4-1'
import SubComp5 from '../Component/SubComp/SubComp5'
import SubComp6 from '../Component/SubComp/SubComp6'
import HomeComp15 from '../Component/HomeComp/HomeComp15'
import Footer from '../Component/Footer/Footer'

// import images 
import ImgR1Star from '../Images/Product/4.9-star.png'
import ImgR1Product from '../Images/Product/Product-Nero.png'
import ImgR1Ver from '../Images/Product/NERONERO-Vertical.png'

const Nero = () => {

    // Change Title
    useEffect(() => {
      document.title = "Nero - Aeronero"
    })
  return (
    <>
      <Header
        MainLogo={NavBarLogoWhite} manualColor={'#fffffff0'} manualBackgroundColor={'#008cd0f0'}
      />

      {/* ----------------------------Row 1-------------------------- */}
      <SubComp1
        heading1="Nero"
        para1="Your pure water solution"
        para2="Compact, energy-efficient, and affordable, Nero AWG delivers up to 10 litres of pure drinking water daily, making it perfect for individuals and young couples."
        image1={ImgR1Star}
        image2={ImgR1Product}
        image3={ImgR1Ver}
      />

      {/* ----------------------------Row 2-------------------------- */}
      <SubComp2 />

      {/* ----------------------------Row 3-------------------------- */}
      <SubComp3
        data="Nero"
      />

      {/* ----------------------------Row 4-------------------------- */}

      <SubComp4code1/>



      {/* ----------------------------Row 5-------------------------- */}
      <SubComp5
        value1="10 Litres / 24 hours (@RH 80%, 30℃)"
        value2="Domestic"
        value3="AC, 1 Phase, 110/220V, 50/60Hz"
        value4="220 W"
        value5="7 litres"
        value6="ABS body & SS water tank"
        value7="Sediment, Carbon & Minerals"
        value8="13.5 kg / 30 lb"
        value9="LWH 260300660 mm"
        value10="<36dB(A)"
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

export default Nero
