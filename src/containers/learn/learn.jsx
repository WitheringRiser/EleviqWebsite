import React from 'react';
import './learn.css';

import learnImage from '../../assets/engineer.png';

const Learn = () => {
	return (
		<div className="eleviq__learn section__padding" id="learn">
			
			<div className = "eleviq__learn-content">
				<h1 className="gradient-text">Learn from People who Have Built.</h1>
				<p>Learn from those who have successfully built games and businesses generating over $500k in revenue. Our instructors are highly qualified, holing Master's and Ph.D. degrees from prestigious universities such as Duke.</p>
			</div>
			<div className="eleviq__learn-image">
				<img src = {learnImage}/>
			</div>
		</div>
		)
}

export default Learn