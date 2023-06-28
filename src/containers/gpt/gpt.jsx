import React from 'react';
import './gpt.css';
import gptImage from '../../assets/gpt.png';

const GPT = () => {
	return (
		<div className="eleviq__gpt section__padding" id="ChatGPT">
			<div className="eleviq__gpt-image">
				<img src = {gptImage}/>
			</div>
			<div className = "eleviq__gpt-content">
				<h1 className="gradient-text">Leveraging ChatGPT at <u>Every</u> Step.</h1>
				<p>Unlike other online courses, we'll teach you how to properly leverage ChatGPT. You'll take shortcuts at every step, ranging from brainstorming to development to marketing. You'll get the optimization and guidance you need.</p>
				<h4><a href = "#mail">Sign up to our newsletter to stay up to date</a></h4>
			</div>
		</div>
		)
}

export default GPT