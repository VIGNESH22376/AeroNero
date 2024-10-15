import React from 'react'
import Header from '../Component/Header/Header'
import { useEffect } from 'react'

// import images 
import NavBarLogoWhite from '../Images/Logo-White.png'

import SubComp1 from '../Component/SubComp/SubComp1'
import SubComp2 from '../Component/SubComp/SubComp2'
import SubComp3 from '../Component/SubComp/SubComp3'
import SubComp4code3 from '../Component/SubComp/SubComp4-3'
import SubComp5 from '../Component/SubComp/SubComp5'
import SubComp6 from '../Component/SubComp/SubComp6'
import HomeComp15 from '../Component/HomeComp/HomeComp15'
import Footer from '../Component/Footer/Footer'

// import images 
import ImgR1Star from '../Images/Product/4.9-star.png'
import ImgR1Product from '../Images/Product/Drizzle-product.png'
import ImgR1Ver from '../Images/Product/Drizzle-1.png'

const Drizzle = () => {
    // Change Title
    useEffect(() => {
      document.title = "Drizzle - Aeronero"
    })
  return (
    <>
      <Header
        MainLogo={NavBarLogoWhite} manualColor={'#fffffff0'} manualBackgroundColor={'#008cd0f0'} />

      {/* ----------------------------Row 1-------------------------- */}
      <SubComp1
        heading1="Drizzle"
        para1="Revolutionizing Water Generation"
        para2="Experience the future of water with Drizzle. Our cutting-edge technology produces 35-40 litres of clean water daily, ideal for commercial spaces like offices, restaurants, and cafes."
        image1={ImgR1Star}
        image2={ImgR1Product}
        image3={ImgR1Ver}
      />

      {/* ----------------------------Row 2-------------------------- */}
      <SubComp2 />

      {/* ----------------------------Row 3-------------------------- */}
      <SubComp3
        data="Drizzle"
      />

      {/* ----------------------------Row 4-------------------------- */}
      <SubComp4code3/>

      {/* ----------------------------Row 5-------------------------- */}
      <SubComp5
        value1="40 Liters / 24hours, (@RH 80%, 30°C)"
        value2="Domestic/Industrial"
        value3="AC, 1 Phase, 110/220V, 50/60Hz"
        value4="650 W"
        value5="15 litres"
        value6="SS body & SS/Food grade plastic water tank"
        value7="Sediment, Carbon, UV & Minerals"
        value8="50 kg/110 lb"
        value9="LWH 440460710 mm"
        value10="<45dB(A)"
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

export default Drizzle
