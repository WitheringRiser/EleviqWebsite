import React from 'react';
import './header.css';
import mountains1 from '../../assets/mountains-1.jpg';

const Header = () => {
	return (
		<div className = "eleviq__header section__padding" id = "home">
			<div className = "eleviq__header-content">
				<h1 className = "text">Join our Mailing List for Exclusive Discounts</h1>
				<p>Yet bed for any traveller</p>
				<div className = "eleviq__header-content__input">
					<input type = "email" placeholder = "Your email"></input>
					<button type = "button">Join our list</button>
				</div>
				
				<div className = "eleviq__header-content__mountains1">
					<img src = {mountains1} alt = "mountains1"/>
					<p>Get 70% off by joining our list before we launch August 12th</p>
				</div>
			</div>
		</div>
		)
}

export default Header