import React from 'react'
import Header from '../Component/Header/Header'
import { useEffect } from 'react'

// import images 
import NavBarLogoColor from '../Images/Logo.png'
import ContactComp1 from '../Component/Contact Comp/ContactComp1'

const Contact = () => {
  // Change Title
  useEffect(() => {
    document.title = "Contact - Aeronero"
  })
  return (
    <>
      <Header
        MainLogo={NavBarLogoColor} manualColor={'#008cd0'} manualBackgroundColor={'#fffffff0'} />
      <ContactComp1 />
    </>
  )
}

export default Contact
