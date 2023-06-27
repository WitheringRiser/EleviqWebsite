import {Brand, CTA, Feature, Navbar} from '../../components';
import {Footer, Header, Course, GPT, Features, Learn} from '../../containers';
import {Courses} from '../';
import React from 'react'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

export default function Home() {
  return (
    <div className = "App">
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
