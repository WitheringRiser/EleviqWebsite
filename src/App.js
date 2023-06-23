import logo from './assets/logo-color.png';
import React from 'react';
import './App.css';
import {Brand, CTA, Feature, Navbar} from './components';
import {Footer, Header, Blog, Course, Possibility, Features} from './containers';

function App() {
  return (
    <div className = "App">
      <div className = "bg">
        <Navbar/>
        <Header/>
      </div>
    <Course/>
    <Features/>
    <Brand/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
    </div>
  );
}

export default App;
