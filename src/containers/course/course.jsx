import React from 'react';
import './course.css';
import { Feature } from '../../components';

const text_color_hex = "#dddddd";

const Course = () => {
	return (
		<div className="eleviq__course section__padding">
			<div className="eleviq__course-feature">
			<Feature title="Our course" text="We'll first teach you how to design and develop a video game. Then we'll teach you to set up your business and sell your game successfully." text_color={text_color_hex}/>
			</div>
			<div className="eleviq__course-heading">
				<h1 className="gradient-text">Expansive yet efficient.</h1>
				<p><a href="#mail">Explore the course</a></p>
			</div>
			<div className="eleviq__course-container">
				<Feature title="Quick instructor responses" text="Get your questions answered in hours, not days." text_color = {text_color_hex}/>
				<Feature title="12+ hours" text="The perfect length to keep you focused yet encourage you to explore on your own." text_color={text_color_hex}/>
				<Feature title="30+ modules" text="Organized to save you time. Find what you need, when you need it." text_color={text_color_hex}/>
			</div>
		</div>
		)
}

export default Course