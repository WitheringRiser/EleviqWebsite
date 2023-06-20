import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo-color-cropped-28-5.png';

const Menu = () => (
    <>
    <p><a href = "#home">Home</a></p>
    <p><a href = "#courses">Courses</a></p>
    <p><a href = "#pricing">Pricing</a></p>
    <p><a href = "#blog">Blog</a></p>
    <p><a href = "#FAQ">FAQ</a></p>
    <p><a href = "#contactUs">Contact Us</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className = "eleviq__navbar">
            <div className = "eleviq__navbar-links">
                <div className = "eleviq__navbar-links_logo">
                    <img src = {logo} alt = "logo"/>
                </div>
                <div className = "eleviq__navbar-links_container">
                    <Menu/>
                </div>
            </div>
			<div className = "eleviq__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
            </div>
            <div className = "eleviq__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color = '#000' size = {27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color = '#000' size = {27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="eleviq__navbar-menu_container scale-up-center">
                        <div className = "eleviq_navbar-menu_container-links">
                            <Menu/>
                            <div className = "eleviq__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
		</div>
		)
}

export default Navbar