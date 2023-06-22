import React, { useEffect } from 'react';
import './header.css';
import ai from '../../assets/person-learning-ai.png';
import CustomForm from './CustomForm';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url = "https://eleviq.us17.list-manage.com/subscribe/post?u=bce71f9646b44fe898859fbd1&amp;id=103a7871c2&amp;f_id=00b557e0f0";

const Header = () => {

	const handleFormSubmission = formData => {
		MailchimpSubscribe(url)
		// Handle the form submission here
		console.log(formData); // Replace with your logic
		};

  	return (
    <>
      <div className="eleviq__header section__padding" id="home">
        <div className="eleviq__header-content">
          <h1 className="text">Join our Mailing List for Exclusive Discounts</h1>
          <p>Get 70% off by entering your email before we launch August 12th</p>
		  <MailchimpSubscribe
          	url={url}
          	render={({ subscribe, status, message }) => (
            	<CustomForm
					className="eleviq__header-content__input"
              		status={status}
              		message={message}
              		onSubmitted={formData => subscribe(formData)}
            	/>
          	)}
          />
        </div>
        <div className="eleviq__header-image">
          <img src={ai} alt="ai" />
        </div>
      </div>
    </>
  );
};

export default Header;
