import React from 'react'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'
import { useEffect } from 'react'

// import images 
import NavBarLogoColor from '../Images/Logo.png'

// import Component 
import AboutComp1 from '../Component/AboutComp/AboutComp1';
import HomeComp10 from '../Component/HomeComp/HomeComp10';
import AboutComp3 from '../Component/AboutComp/AboutComp3';
import AboutComp4 from '../Component/AboutComp/AboutComp4';
import AboutComp5 from '../Component/AboutComp/AboutComp5';
import HomeComp6 from '../Component/HomeComp/HomeComp6';
import AboutComp7 from '../Component/AboutComp/AboutComp7';
import AboutComp8 from '../Component/AboutComp/AboutComp8';
import AboutComp9 from '../Component/AboutComp/Aboutcomp9';
import AboutComp10 from '../Component/AboutComp/AboutComp10';

const About = () => {

  // Change Title
  useEffect(() => {
    document.title = "About - Aeronero"
  })
  return (
    <>
      <Header
        MainLogo={NavBarLogoColor} manualColor={'#008cd0'} manualBackgroundColor={'#fffffff0'}
      />
      <AboutComp1 />

      {/* row2  */}
      <HomeComp10 />
      <AboutComp3 />
      <AboutComp4 />
      <AboutComp5 />
      {/* row 6 */}
      <HomeComp6 />
      <AboutComp7 />
      <AboutComp8 />
      <AboutComp9 />
      <AboutComp10 />
      <Footer />

    </>
  )
}

export default About
