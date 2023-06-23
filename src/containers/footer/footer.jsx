import React from 'react';
import gpt3Logo from '../../assets/logo-black-newsletter.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p><br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><a href="https://twitter.com/EleviqAI" target="blank">Twitter</a></p>
        <p><a href="https://www.linkedin.com/in/lukas-brazdeikis/" target="blank">LinkedIn</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>9915 Murray Lndg, Missouri City, TX, USA, 77459</p>
        <p>+1 (713) 492 1343</p>
        <p>contact@eleviq.ai</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Eleviq. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;