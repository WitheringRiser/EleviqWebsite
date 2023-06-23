import React from 'react';
import './CTA.css';

import CustomFormTop from './CustomFormTop';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const url = "https://eleviq.us17.list-manage.com/subscribe/post?u=bce71f9646b44fe898859fbd1&amp;id=103a7871c2&amp;f_id=00b557e0f0";

const CTA = () => (
	<>
	<div className="eleviq__cta">
    	<div className="eleviq__cta-content">
      	<p>Get <u>70% off</u> before we launch August 12th</p>
      	<h3>Join our Mailing List for Exclusive Discounts.</h3>
    	</div>
		<MailchimpSubscribe
		url={url}
		render={({ subscribe, status, message }) => (
			<CustomFormTop
				className="eleviq__cta-content__input"
				status={status}
				message={message}
				onSubmitted={formData => subscribe(formData)}
			/>
		)}
		/>
  	</div>
	</>
  
);

export default CTA;