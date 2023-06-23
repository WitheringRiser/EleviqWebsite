import React from 'react';
import './learn.css';

import learnImage from '../../assets/engineer.png';

const Learn = () => {
	return (
		<div className="eleviq__learn section__margin" id="learn">
			
			<div className = "eleviq__learn-content">
				<h1 className="gradient-text">Learn from People who Have Built.</h1>
				<p>Learn from people who have built games and businesses generating over $500k revenue. All of our instructor come with Master's and PhD's from top universities like Duke.</p>
			</div>
			<div className="eleviq__learn-image">
				<img src = {learnImage}/>
			</div>
		</div>
		)
}

export default Learn