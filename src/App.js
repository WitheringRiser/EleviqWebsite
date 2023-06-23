import logo from './assets/logo-color.png';
import React from 'react';
import './App.css';
import {Brand, CTA, Feature, Navbar} from './components';
import {Footer, Header, Course, GPT, Features, Learn} from './containers';

function App() {
  return (
    <div className = "App">
      <div className = "bg">
        <Navbar/>
        <CTA/>
      </div>
    <Features/>
    <Course/>
    <GPT/>
    <Learn/>
    <Header/>
    <Footer/>
    </div>
  );
}

export default App;
