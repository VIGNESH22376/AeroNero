import React from 'react'
import './Footer.css'
import { useEffect } from 'react';

// import Recaptcha 
import ReCAPTCHA from "react-google-recaptcha";

const Footer = () => {

    

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

    const onChange = () =>{

    }

    
    return (
        <>
            <div className='container-fluid'>

                {/* contact  */}
                <div className='row Footer-container'>

                    {/* left side */}
                    <div className='col-12 col-md-7 footer-small-conatiner'>

                        {/* top contact */}
                        <div>
                            <h3 className='footer-left-heading'>Are you a water warrior?</h3>
                            <p className='footer-left-para'>We would love to hear from you! Reach out to us for inquiries, partnerships, and collaboration.</p>

                        </div>

                        {/* contact default */}
                        <div>

                            {/* mobile number */}
                            <div className='py-2 '>
                                <h4 className='footer-left-heading2'>CALL US AT:</h4>
                                <div>
                                    <a href='tel: +1800 419 4190'><i className="fa-solid fa-phone footer-left-icon"></i></a>
                                    <a href='tel: +1800 419 4190' className='footer-left-contact'>+1800 419 4190</a>
                                </div>
                            </div>


                            {/* mail and social media  */}
                            <div className='py-2 footer-left-mail-social-container'>

                                {/* mail  */}
                                <div>
                                    <h4 className='footer-left-heading2'>WRITE US AT:</h4>
                                    <div>
                                        <a href='mailto: hello@aeronero.com'><i className="fa-solid fa-envelope footer-left-icon"></i></a>
                                        <a href='mailto: hello@aeronero.com' className='footer-left-contact'> hello@aeronero.com</a>
                                    </div>
                                </div>

                                {/* social media  */}
                                <div className='pe-5'>
                                    <h3 className='footer-social-heading'>Social:</h3>
                                    <div>
                                        <a href='https://www.instagram.com/aeronero.life/' target='-blank'><i className="fa-brands fa-instagram footer-social-icon"></i></a>
                                        
                                        <a href='https://www.youtube.com/@aeronero6604' target='-blank'><i className="fa-brands fa-youtube footer-social-icon"></i></a>

                                        <a href='https://www.linkedin.com/in/aeronero/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in'><i className="fa-brands fa-linkedin footer-social-icon" target='-blank'></i></a>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                    {/* Right side  */}
                    <div className='col-12 col-md-5'>
                        <form className="row g-0 needs-validation footer-form-container" noValidate>


                            {/* Full Name */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom01" className="footer-form-label">Name:</label>
                                <input type="text" className="form-control footer-form-input" id="validationCustom01" placeholder="Enter your name" required />
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>

                             {/* PHONE */}
                             <div className="col-md-12">
                                <label htmlFor="validationCustom03" className="footer-form-label">Phone:</label>
                                <input type="tel" className="form-control footer-form-input" id="validationCustom03" placeholder="Enter your phone" required />
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>

                            {/* E MAIL */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom02" className="footer-form-label">E-Mail:</label>
                                <input type="email" className="form-control footer-form-input" id="validationCustom02" placeholder="Enter your E-Mail" required />
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>


                            {/* Please choose an option */}
                            <div className="col-md-12">
                                <label htmlFor="validationCustom04" className="footer-form-label">Select Product:</label>
                                <select className="form-select  footer-form-input  select-option " id="validationCustom04" placeholder="--Please choose an option--" required>
                                    <option className='select-option' >--Please choose an option--</option>
                                    <option className='select-option'>Web Application</option>
                                    <option className='select-option'>Mobile Application</option>
                                    <option className='select-option'>Web Design & Development</option>
                                    <option className='select-option'>Graphic Design</option>
                                    <option className='select-option'>Digital Marketing</option>
                                    <option className='select-option'>Maintenance & Support</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>


                            {/* Additional Comments */}
                            <div className="mb-3">
                                <label htmlFor="validationTextarea" className="footer-form-label">Message:</label>
                                <textarea className="form-control  footer-form-txtarea" id="validationTextarea" placeholder="Message (Optional)"></textarea>
                            </div>


                            <ReCAPTCHA className="col-12 py-3"
                                sitekey="Your client site key"
                                onChange={onChange}
                            />

                            <div className="col-12 text-center">
                                <button className=" footer-form-btn" type="submit">CONTACT SALES</button>
                            </div>
                        </form>

                    </div>

                </div>

                {/* copy right  */}
                <div className='row copyright-container'>

                    {/* content  */}
                    <div className='col-6 text-start p-2'>
                        <h4 className='copyright-content'>Aeronero Solution Pvt. Ltd.</h4>
                    </div>

                    <div className='col-6 text-end p-2'>
                        <h4 className='copyright-content'>All rights reserved.</h4>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Footer
