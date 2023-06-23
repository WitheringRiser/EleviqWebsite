import React from 'react';
import './feature.css';

const Feature = ({ title, text, text_color }) => (
  <div className="eleviq__features-container__feature">
    <div className="eleviq__features-container__feature-title">
      <div />
      <h1 style={{color: text_color}}>{title}</h1>
    </div>
    <div className="eleviq__features-container_feature-text">
    	<p style={{color: text_color}}>{text}</p>
    </div>
  </div>
);

export default Feature;
