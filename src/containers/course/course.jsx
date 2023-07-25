import React from 'react';
import './course.css';
import { Feature } from '../../components';

const text_color_hex = "#dddddd";

const Course = () => {
	return (
		<div className="eleviq__course section__padding">
			<div className="eleviq__course-feature">
			<Feature title="Our Course: Start a Game Studio" text="First, we will guide you through designing and developing a video game. Subsequently, we will provide comprehensive instruction on establishing your business and effectively selling your game for optimal success." text_color={text_color_hex}/>
			</div>
			<div className="eleviq__course-heading">
				<h1 className="gradient-text">Expansive yet efficient.</h1>
				<p><a href="#mail">Explore the course</a></p>
			</div>
			<div className="eleviq__course-container">
				<Feature title="Quick instructor responses" text="Get your questions answered in hours, not days." text_color = {text_color_hex}/>
				<Feature title="8+ hours" text="The perfect length to keep you focused yet encourage you to explore on your own." text_color={text_color_hex}/>
				<Feature title="30+ modules" text="Organized to save you time. Find what you need, when you need it." text_color={text_color_hex}/>
			</div>
		</div>
		)
}

export default Course