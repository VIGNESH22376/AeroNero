import React from 'react';
import Slider from 'react-slick';
import Aos from 'aos';
import { useRef } from 'react';

// CSS for Slick Slider arrows
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Your custom CSS
import './CSS/AboutComp10.css';

// Images for the awards
import AbtS9Award1 from '../../Images/About/Award-1.png';
import AbtS9Award2 from '../../Images/About/Award-2.png';
import AbtS9Award3 from '../../Images/About/Award-3.png';

// Award data
const AbtS9Award = [
    {
        id: 1,
        image: AbtS9Award1
    },
    {
        id: 2,
        image: AbtS9Award2
    },
    {
        id: 3,
        image: AbtS9Award3
    }
];

const AboutComp10 = () => {

    // Initialize AOS animations
    React.useEffect(() => {
        Aos.init();
    }, []);

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: false,
        draggable: true,
        swipeToSlide: true,
        arrows: false,
        prevArrow: <div className="custom-prev-arrow"><i className="fa fa-arrow-left abt-h9-prev-arrow"></i></div>,
        nextArrow: <div className="custom-next-arrow"><i className="fa fa-arrow-right abt-h9-next-arrow"></i></div>,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    };

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    return (
        <div className='container-fluid abt-s9-container overflow-hidden'>
            {/* Heading */}
            <h2
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-once="true"
                className='abt-s9-heading'>Awards</h2>

            {/* Slider */}
            <div className='row abt-s9-slider-container '>
                <Slider ref={slider => {
                    sliderRef = slider;
                }}{...settings}>
                    
                    {AbtS9Award.map(award => (
                        <div key={award.id}>
                            <div className='abt-s9-img-container '>
                                <img className='abt-s9-img' src={award.image} alt={`Award ${award.id}`} />
                            </div>
                        </div>
                    ))}
                </Slider>

                <div style={{ textAlign: "center" }}>
                    <button className="button abt-s10-arrow-container" onClick={previous}>
                        <i class="fa-solid fa-arrow-left abt-s10-arrow"></i>
                    </button>
                    <button className="button abt-s10-arrow-container" onClick={next}>
                        <i class="fa-solid fa-arrow-right abt-s10-arrow"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutComp10;
