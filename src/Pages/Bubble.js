import React from 'react'
import Header from '../Component/Header/Header'
import { useEffect } from 'react'

// import images 
import NavBarLogoWhite from '../Images/Logo-White.png'

// import Componenet 
import SubComp1 from '../Component/SubComp/SubComp1'
import SubComp2 from '../Component/SubComp/SubComp2'
import SubComp3 from '../Component/SubComp/SubComp3'
import SubComp4code2 from '../Component/SubComp/SubComp4-2'
import SubComp5 from '../Component/SubComp/SubComp5'
import SubComp6 from '../Component/SubComp/SubComp6'
import HomeComp15 from '../Component/HomeComp/HomeComp15'
import Footer from '../Component/Footer/Footer'


// import images 
import ImgR1Star from '../Images/Product/4.9-star.png'
import ImgR1Product from '../Images/Product/Product-Bubble.png'
import ImgR1Ver from '../Images/Product/Bubble-Vertical.png'

const Bubble = () => {
    // Change Title
    useEffect(() => {
      document.title = "Bubble - Aeronero"
    })
  return (
    <>
      <Header
        MainLogo={NavBarLogoWhite} manualColor={'#fffffff0'} manualBackgroundColor={'#008cd0f0'} />

      {/* ----------------------------Row 1-------------------------- */}
      <SubComp1
        heading1="Bubble"
        para1="Pure Water for Every Home"
        para2="Affordable, efficient, and reliable, the Bubble Series delivers 15-20 liters of clean drinking water daily, perfect for households and small offices."
        image1={ImgR1Star}
        image2={ImgR1Product}
        image3={ImgR1Ver}
      />

      {/* ----------------------------Row 2-------------------------- */}
      <SubComp2 />

      {/* ----------------------------Row 3-------------------------- */}
      <SubComp3
        data="Bubble"
      />

      {/* ----------------------------Row 4-------------------------- */}
      <SubComp4code2/>

      {/* ----------------------------Row 5-------------------------- */}
      <SubComp5
        value1="20 Liters / 24hours, (@RH 80%, 30°C)"
        value2="Domestic/Industrial"
        value3="AC, 1 Phase, 110/220V, 50/60Hz"
        value4="450 W"
        value5="8 litres"
        value6="ABS body & SS water tank"
        value7="Sediment, Carbon, UV & Minerals"
        value8="30 kg / 66 LB"
        value9="LWH 424443598 mm"
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

export default Bubble
