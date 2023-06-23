import React from 'react';
import Feature from '../../components/feature/feature';
import './features.css';

const text_color_hex = "#333333";

const featuresData = [
  {
    title: 'Prompt Engineering',
    text: "We will teach you how to leverage ChatGPT to save you time at every step. No need to spend hours brainstorming, debugging, or setting up a marketing strategy.",
	text_color: text_color_hex
  },
  {
    title: 'Game Design',
    text: 'Learn how the best design their games. Make genuinely enjoyable games that evoke emotion.',
	text_color: text_color_hex
  },
  {
    title: 'Game Development',
    text: "Get familiar with popular game engines like Unreal Engine. We'll take you through visual scripting that can be understood by non-programmers.",
	text_color: text_color_hex
  },
  {
    title: 'Be an Entrepreneur',
    text: "Learn how to build a business from top to bottom. You'll learn the most modern entreprenurial principles to give you an edge on your competition.",
	text_color: text_color_hex
  },
];

const Features = () => (
  <div className="eleviq__features section__padding" id="features">
    <div className="eleviq__features-heading">
      <h1 className="gradient__text">Build a Profitable Game Business</h1>
      <p>Course: How to Build a Game Business</p>
    </div>
    <div className="eleviq__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} text_color={item.text_color}/>
      ))}
    </div>
  </div>
);

export default Features;