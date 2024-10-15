import React from 'react'
import './CSS/HomeComp12.css'

// import data 
import { HomeImpact } from '../../Data/HomeData'

import { useEffect } from 'react'

//import recaptcha
import ReCAPTCHA from "react-google-recaptcha";

//import aos
import Aos from 'aos'

const HomeComp12 = () => {

    Aos.init();

    useEffect(() => {
        const form = document.querySelector('form');

        if (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault(); // Prevent form submission if invalid
                    event.stopPropagation(); // Stop the event from propagating further
                }

                form.classList.add('was-validated'); // Apply Bootstrap validation styles
            });
        }
    }, []);  // Empty dependency array to ensure this effect runs only once

    const onChange=()=>{

    }

    return (
        <>
            <div className='container-fluid Home-r12-container overflow-hidden'>

                <div className='row'>
                    <h3 className='Home-r12-heading' data-aos="fade-down"
                        data-aos-duration="800" data-aos-once="true">Our <span className='Home-r12-heading-color'>Impact Story</span></h3>
                </div>

                <div className='row Home-r12-second-row '>
                    {/* left side  */}
                    <div className='col-12 col-md-6 Home-r12-left-container'>
                        {
                            HomeImpact.map(record => {
                                return (
                                    <div key={record.id} className='Home-r12-left-card-container' data-aos="fade"
                                    data-aos-duration="800" data-aos-once="true">

                                        {/* image  */}
                                        <img src={record.image} className='Home-r12-card-img' alt='mission img' />

                                        {/* content */}
                                        <div className='d-flex flex-column justify-content-center'>
                                            <h3 className='Home-card-heading'>{record.heading}</h3>
                                            <p className='Home-card-para'>{record.caption}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    {/* right side  */}
                    <div className='col-12 col-md-6 Home-r12-right-container ' data-aos="slide-left"
                        data-aos-duration="1000" data-aos-once="true">
                        <form className="row g-0 needs-validation Home-r12-form-container" noValidate>

                            <h3 className='Home-r12-form-heading'>WHICH AWG MODEL WILL WORK FOR YOU?</h3>


                            {/* Full Name */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom01" className="Home-r12-form-label">Name</label>
                                <input type="text" className="form-control Home-r12-form-input" id="validationCustom01" placeholder="Enter your Name*" required />
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>

                            {/* PHONE */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom03" className="Home-r12-form-label">Phone Number</label>
                                <input type="tel" className="form-control Home-r12-form-input" id="validationCustom03" placeholder="Enter your phone number*" required />
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>

                            {/* E MAIL */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom02" className="Home-r12-form-label">E-Mail:</label>
                                <input type="email" className="form-control Home-r12-form-input" id="validationCustom02" placeholder="Enter your E-Mail*" required />
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>


                            {/* Please choose an option */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom04" className="Home-r12-form-label">Consumption per day</label>
                                <select className="form-select  Home-r12-form-input  select-option " id="validationCustom04" placeholder="--Please choose an option--" required>
                                    <option className='select-option' >--Please choose an option--</option>
                                    <option className='select-option'>10 - 20 L</option>
                                    <option className='select-option'>20 - 50 L</option>
                                    <option className='select-option'>50 - 100 L</option>
                                    <option className='select-option'>100 - 500 L</option>
                                    <option className='select-option'>Above 500 L</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>

                            {/* Please choose an option */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom04" className="Home-r12-form-label">Total members in the household</label>
                                <select className="form-select  Home-r12-form-input  select-option " id="validationCustom04" placeholder="--Please choose an option--" required>
                                    <option className='select-option' >--Please choose an option--</option>
                                    <option className='select-option'>0-1</option>
                                    <option className='select-option'>1-5</option>
                                    <option className='select-option'>5-15</option>
                                    <option className='select-option'>15-20</option>
                                    <option className='select-option'>20-30</option>
                                    <option className='select-option'>Above 30</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>

                            {/* Location */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom02" className="Home-r12-form-label">Location</label>
                                <input type="email" className="form-control Home-r12-form-input" id="validationCustom02" placeholder="Enter your Location*" required />
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>





                            <ReCAPTCHA className="col-12 py-3"
                                sitekey="Your client site key"
                                onChange={onChange}
                            />

                            <div className="col-12">
                                <button className=" Home-r12-form-btn" type="submit">CONTACT SALES</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeComp12
