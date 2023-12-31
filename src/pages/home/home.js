import {Brand, CTA, Feature, Navbar} from '../../components';
import {Footer, Header, Course, GPT, Features, Learn} from '../../containers';
import {Courses} from '../';
import React from 'react'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div className = "App">
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
        <div className = "bg">
        <Navbar />
        <CTA/>
        </div>
      <Features/>
      <Course/>
      <GPT/>
      <Learn/>
      <Header/>
      <Footer/>
    </div>
  )
}
