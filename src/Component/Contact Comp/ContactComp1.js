import React from 'react'
import './ContactComp1.css'

import { useEffect } from 'react';

// import Recaptcha 
import ReCAPTCHA from "react-google-recaptcha";

import logo from '../../Images/Logo.png'

const Contact = () => {

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

  const onChange = () => {

  }

  return (
    <>
      <div className='container-fluid'>

        {/* contact  */}
        <div className='row contact-container'>

          <h3 className='contact-heading'>CONTACT US</h3>

          {/* row 1 */}
          <div className='col-12  contact-small-conatiner1'>

            {/* top contact */}
            <div>
              <p className='contact-left-para'>Are you a water warrior? We’d love to hear from you! Reach out to us for inquiries, partnerships, and collaboration.</p>

            </div>

            {/* contact default */}
            <div>

              {/* mail  */}
              <div className='contact-details-div'>

                <a href='mailto: hello@aeronero.com'><i className="fa-solid fa-envelope contact-left-icon"></i></a>
                <a href='mailto: hello@aeronero.com' className='contact-left-contact'> hello@aeronero.com</a>

              </div>

              {/* mobile number */}
              <div className='contact-details-div'>

                <a href='tel: +1800 419 4190'><i className="fa-solid fa-phone contact-left-icon"></i></a>
                <a href='tel: +1800 419 4190' className='contact-left-contact'>+1800 419 4190</a>

              </div>



              {/* social media  */}
              <div className='contact-details-div'>
                
                <div>
                  <a href='https://www.instagram.com/aeronero.life/' target='-blank'><i className="fa-brands fa-instagram contact-social-icon"></i></a>

                  <a href='https://www.youtube.com/@aeronero6604' target='-blank'><i className="fa-brands fa-youtube contact-social-icon"></i></a>

                  <a href='https://www.linkedin.com/in/aeronero/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in'><i className="fa-brands fa-linkedin contact-social-icon" target='-blank'></i></a>
                </div>



              </div>

            </div>

          </div>

          {/* Row 2 form  */}
          <div className='col-12 col-md-11 p-0'>
            <form className="row g-0 needs-validation contact-form-container" noValidate>


              {/* Full Name */}
              <div className="col-md-12">
                <label htmlFor="validationCustom01" className="contact-form-label">Name:</label>
                <input type="text" className="form-control contact-form-input" id="validationCustom01" placeholder="Enter your name" required />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>

              {/* PHONE */}
              <div className="col-md-12">
                <label htmlFor="validationCustom03" className="contact-form-label">Phone:</label>
                <input type="tel" className="form-control contact-form-input" id="validationCustom03" placeholder="Enter your phone" required />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>

              {/* E MAIL */}
              <div className="col-md-12">
                <label htmlFor="validationCustom02" className="contact-form-label">E-Mail:</label>
                <input type="email" className="form-control contact-form-input" id="validationCustom02" placeholder="Enter your E-Mail" required />
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
              </div>


              {/* Please choose an option */}
              <div className="col-md-12">
                <label htmlFor="validationCustom04" className="contact-form-label">Select Product:</label>
                <select className="form-select  contact-form-input  select-option " id="validationCustom04" placeholder="--Please choose an option--" required>
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
                <label htmlFor="validationTextarea" className="contact-form-label">Message:</label>
                <textarea className="form-control  contact-form-txtarea" id="validationTextarea" placeholder="Message (Optional)"></textarea>
              </div>


              <ReCAPTCHA className="col-12 py-3"
                sitekey="Your client site key"
                onChange={onChange}
              />

              <div className="col-12 text-center">
                <button className=" contact-form-btn" type="submit">CONTACT SALES</button>
              </div>
            </form>

          </div>

        </div>

        {/* copy right  */}
        <div className='row copyright-container'>

          {/* content  */}
          <div className='col-6 text-start p-2'>
            <img src={logo} alt='Logo'/>
          </div>

          <div className='col-6 text-end p-2'>
            <h4 className='copyright-content'>All rights reserved.</h4>
          </div>


        </div>
        
      </div>

    </>
  )
}

export default Contact
