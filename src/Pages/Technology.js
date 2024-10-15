import React from 'react'
import { useEffect } from 'react';

// import images 
import NavBarLogoColor from '../Images/Logo.png'


// import component 
import Header from '../Component/Header/Header';
import TechComp1 from '../Component/TechnologyComp/TechComp1';
import TechComp2 from '../Component/TechnologyComp/TechComp2';
import TechComp3 from '../Component/TechnologyComp/TechComp3';
import HomeComp13 from '../Component/HomeComp/Homecomp13';
import HomeComp10 from '../Component/HomeComp/HomeComp10';
import Footer from '../Component/Footer/Footer'

const Technology = () => {
  // Change Title
  useEffect(() => {
    document.title = "Technology - Aeronero"
  })
  return (
    <>
      <Header
        MainLogo={NavBarLogoColor} manualColor={'#008cd0'} manualBackgroundColor={'#fffffff0'}
      />
      <TechComp1 />
      <TechComp2 />
      <TechComp3 />
      <HomeComp13 />
      <HomeComp10 />
      <Footer />

    </>
  )
}

export default Technology
