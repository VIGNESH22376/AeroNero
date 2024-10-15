import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './CSS/HomeComp5.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';

// import data 
import { HomeProduct } from '../../Data/HomeData';
import { NavLink } from 'react-router-dom';



const HomeComp5 = () => {


    return (

        <>
            <div className='container-fluid'>
                <div className='row Home-r5-container'>

                    <h3 className='Home-r5-heading'>Explore <span className='Home-r5-heading-color'>our products</span></h3>

                    <div >
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={5}
                            loop={true}
                            coverflowEffect={{
                                rotate: 32,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false
                            }}

                            navigation={true}

                            // breakpoints 
                            breakpoints={{
                                425: {
                                    slidesPerView: 3,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                                1336: {
                                    slidesPerView: 5,
                                },
                                1440: {
                                    slidesPerView: 5,
                                },
                                2056: {
                                    slidesPerView: 5,
                                },
                            }}

                            modules={[EffectCoverflow, Navigation]}
                        >
                            
                            {/* {
                                slides.map((slide, index) => (

                                    <SwiperSlide key={index}>
                                        <div className='CarouselImageCont1'>
                                            <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />
                                        </div>
                                    </SwiperSlide>
                                ))} */}



                            {
                                HomeProduct.map(record => {
                                    return (
                                        <div key={record.id}>
                                            <SwiperSlide >
                                                <div className='Home-r5-swipper-container'>

                                                    <img src={record.image} alt='Product img' className='Home-r5-slide-image' />

                                                    <NavLink to={record.path} className='Home-r5-explore'>Explore</NavLink>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                    )
                                })

                            }




                        </Swiper>
                    </div>

                </div>

            </div>

        </>
    );
};

export default HomeComp5;
