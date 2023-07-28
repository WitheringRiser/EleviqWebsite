import{Navbar, CTA} from '../../components';
import{Video, CourseInfo, Footer} from '../../containers';
import React from 'react'
import { Helmet } from 'react-helmet';

const Courses = () => {
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
        <Video/>
        <CourseInfo/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Courses;
