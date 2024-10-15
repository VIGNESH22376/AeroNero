import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'



const Header = ({MainLogo, manualColor, manualBackgroundColor}) => {


    return (

        <>
            <div className='sticky-top NavBar-overall-container' style={{backgroundColor: manualBackgroundColor}}>

                {/* Navbar */}
                <nav className="navbar navbar-light  p-0 ">
                    <div className="container-fluid Navbar-container" >


                        {/* <!-- Offcanvas trigger (hamburger icon) --> */}
                        <button className="col-3 col-sm-3  Navbar-menu-icon-div" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                            <i className="fa-solid fa-bars Navbar-menu-icon" style={{color: manualColor}}></i>
                        </button>

                        {/* <!-- Logo in the center --> */}
                        <div className="col-6 Navbar-logo-div">
                            <NavLink to='/'><img src={MainLogo} alt="Logo" className="Navbar-logo" /></NavLink>
                        </div>

                        {/* <!-- Contact icon on the right --> */}
                        <a href="tel:1234567890" className="col-3 col-sm-3  Navbar-phone-div" >
                            <i className="fa-solid fa-phone  Navbar-phone"  style={{color: manualBackgroundColor, backgroundColor:manualColor}}></i>
                        </a>

                    </div>
                </nav>

                {/* <!-- Offcanvas Navigation --> */}
                <div className="offcanvas offcanvas-start offcanvas-fade-right offcanvas-custom-bg border-0" data-bs-backdrop="false" tabindex="-1" id="offcanvasNavbar">

                    {/* close button  */}
                    <div className="offcanvas-header Navbar-close-btn-div">
                        <i className="fa-solid fa-xmark Navbar-close-btn" data-bs-dismiss="offcanvas"></i>
                    </div>

                    <div className="offcanvas-body " >
                        <ul className="navbar-nav">

                            {/* Home  */}
                            <li className="nav-item">
                                <NavLink className='Navbar-menu-content' to='/'>Home</NavLink>
                            </li>

                            {/* Aboutus  */}
                            <li className="nav-item">
                                <NavLink className='Navbar-menu-content' to='/about'>About Us</NavLink>

                            </li>

                            {/* Dropdown  product*/}
                            <li className="nav-item dropdown">

                                <NavLink className=" Navbar-menu-content" id="productDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to='/product'>Product &nbsp;<i className="fa-solid fa-caret-down"></i></NavLink>



                                <ul className="dropdown-menu Navbar-dropdown-custom" aria-labelledby="productDropdown">
                                    <li className="nav-item-dd"><NavLink className=" Navbar-dd-txt" to='/nero'>Nero</NavLink></li>
                                    <li className="nav-item-dd"><NavLink className=" Navbar-dd-txt" to='/bubble'>Bubble</NavLink></li>
                                    <li className="nav-item-dd"><NavLink className=" Navbar-dd-txt" to='/drizzle' >Drizzle</NavLink></li>
                                    <li className="nav-item-dd"><NavLink className=" Navbar-dd-txt" to='/thunder'>Thunder</NavLink></li>
                                    <li className="nav-item-dd"><NavLink className=" Navbar-dd-txt" to='/airwell'>Airwell</NavLink></li>
                                </ul>
                            </li>

                            {/* Technology  */}
                            <li className="nav-item">
                                <NavLink className='Navbar-menu-content' to='/technology'>Technology</NavLink>
                            </li>

                            {/* Contact  */}
                            <li className="nav-item">
                                <NavLink className='Navbar-menu-content' to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
