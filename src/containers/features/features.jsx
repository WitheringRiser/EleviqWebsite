import React from 'react';
import Feature from '../../components/feature/feature';
import './features.css';

const text_color_hex = "#333333";

const featuresData = [
  {
    title: 'ChatGPT Optimization',
    text: "Discover how to utilize AI tools to streamline your workflow, saving valuable time at each stage. Say goodbye to extensive brainstorming, debugging, and marketing strategy setup.",
	text_color: text_color_hex
  },
  {
    title: 'Game Design',
    text: 'Acquire insights from the best in the field on crafting games that genuinely captivate players and evoke emotions, ensuring a truly enjoyable experience.',
	text_color: text_color_hex
  },
  {
    title: 'Game Development',
    text: "Gain proficiency in popular game engines like Unity. We'll guide you through visual scripting techniques accessible even to non-programmers.",
	text_color: text_color_hex
  },
  {
    title: 'Be an Entrepreneur',
    text: "From start to finish, learn the most cutting-edge entrepreneurial principles to build a successful business. Gain a competitive edge over your peers in the modern business landscape.",
	text_color: text_color_hex
  },
];

const Features = () => (
  <div className="eleviq__features section__padding" id="course">
    <div className="eleviq__features-heading">
      <h1 className="gradient__text">Start a Game Studio</h1>
      <p><b>Our course on how to build a game studio that works.</b></p>
    </div>
    <div className="eleviq__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} text_color={item.text_color}/>
      ))}
    </div>
  </div>
);

export default Features;