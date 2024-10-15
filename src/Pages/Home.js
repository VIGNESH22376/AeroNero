import React from 'react';
import './CSS/Home.css';

// import images 
import NavBarLogoColor from '../Images/Logo.png'

// import pages
import Header from '../Component/Header/Header';

//import video
import herovideo from '../Video/Hero-Video.mp4'

//import aos
import Aos from 'aos'

// import component 
import HomeComp2 from '../Component/HomeComp/HomeComp2';
import HomeComp3 from '../Component/HomeComp/HomeComp3';
import HomeComp4 from '../Component/HomeComp/HomeComp4';
import HomeComp5 from '../Component/HomeComp/HomeComp5';
import HomeComp6 from '../Component/HomeComp/HomeComp6';
import HomeComp7 from '../Component/HomeComp/HomeComp7';
import HomeComp8 from '../Component/HomeComp/HomeComp8';
import HomeComp9 from '../Component/HomeComp/Homecomp9';
import HomeComp10 from '../Component/HomeComp/HomeComp10';
import HomeComp11 from '../Component/HomeComp/HomeComp11';
import HomeComp12 from '../Component/HomeComp/HomeComp12';
import Homecomp13 from '../Component/HomeComp/Homecomp13';
import HomeComp14 from '../Component/HomeComp/HomeComp14';
import HomeComp15 from '../Component/HomeComp/HomeComp15';
import Footer from '../Component/Footer/Footer';






const Home = () => {

  Aos.init();

  return (
    <>
      <Header
        MainLogo={NavBarLogoColor} manualColor={'#008cd0'} manualBackgroundColor={'#fffffff0'}
      />

      {/* Row-2 */}
      <div className=' Home-r1-First-image'>

        <div className='Home-r1-small-container'>

          {/* video  */}

          <video autoPlay muted loop className='Home-r1-hero-video'>
            <source src={herovideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* content  */}
          <div className='Home-r1-content-container'>
            <div className='Home-r1-content-small-container'>

              {/* heading  */}
              <h1 className='Home-r1-heading1' data-aos="fade-down"
                data-aos-duration="800" data-aos-once="true">WATER <span className='Home-r1-heading2'>FROM AIR</span></h1>

              {/* para  */}
              <p className='Home-r1-para'>From sustaining the smallest households to powering the largest industries, we want to create a water-secure planet</p>
            </div>




          </div>




        </div>

      </div>

      <HomeComp2 />
      <HomeComp3 />
      <HomeComp4 />
      <HomeComp5 />
      <HomeComp6 />
      <HomeComp7 />
      <HomeComp8 />
      <HomeComp9 />
      <HomeComp10 />
      <HomeComp11 />
      <HomeComp12 />
      <Homecomp13 />
      <HomeComp14 />
      <HomeComp15 />

      <Footer />


    </>
  )
}

export default Home
