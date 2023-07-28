import{Navbar, CTA} from '../../components';
import{Footer} from '../../containers';
import React from 'react'
import { Helmet } from 'react-helmet';

const FAQ = () => {
  return (
    <div>
      <Helmet>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M0YDH1W89K"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M0YDH1W89K');
          `}
        </script>
      </Helmet>
        <Navbar/>
        <FAQ/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default FAQ;
