import React from 'react';
import './header.css';
import ai from '../../assets/person-learning-ai.png';

const Header = () => {
	return (
		<div className = "eleviq__header section__padding" id = "home">
			<div className = "eleviq__header-content">
				<h1 className = "text">Join our Mailing List for Exclusive Discounts</h1>
				<p>Get 70% off by entering your email before we launch August 12th</p>
				<div className = "eleviq__header-content__input">
					<input type = "email" placeholder = "Your email"></input>
					<button type = "button">Enter</button>
				</div>
			</div>
			<div className = "eleviq__header-image">
				<img src = {ai} alt = "ai"/>
			</div>
		</div>
		)
}

export default Header