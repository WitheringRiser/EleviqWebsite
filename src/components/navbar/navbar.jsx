import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo-color-cropped-28-5.png';

const gumroadProductLink = 'https://eleviq.gumroad.com/l/how-to-make-a-game-company';

const Menu = () => (
    <>
    <p><a href = "/">Home</a></p>
    <p><a href = "/courses">Course</a></p>
    <p><a href = " #ChatGPT">Using ChatGPT</a></p>
    <p><a href = "#learn">Instructors</a></p>
    <p><a href = "#mail">Mailing List</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className = "eleviq__navbar" id="#home">
            <div className = "eleviq__navbar-links">
                <div className = "eleviq__navbar-links_logo">
                    <img src = {logo} alt = "logo"/>
                </div>
                <div className = "eleviq__navbar-links_container">
                    <Menu/>
                </div>
            </div>
			<div className = "eleviq__navbar-sign">
                <button type="button"><a href={gumroadProductLink} target="_blank" rel="noopener noreferrer">Enroll in Beta</a></button>
            </div>
            <div className = "eleviq__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color = '#000' size = {27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color = '#000' size = {27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="eleviq__navbar-menu_container scale-up-center">
                        <div className = "eleviq__navbar-menu_container-links">
                            <Menu/>
                            <div className = "eleviq__navbar-menu_container-links-sign">
                                <button type="button"><a href={gumroadProductLink} target="_blank" rel="noopener noreferrer">Enroll in Beta</a></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
		</div>
		)
}

export default Navbar