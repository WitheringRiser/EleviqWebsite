import logo from './assets/logo-color.png';
import React from 'react';
import './App.css';
import {Brand, CTA, Feature, Navbar} from './components';
import {Footer, Header, Course, GPT, Features, Learn} from './containers';
import {Courses} from './pages';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';



function App() {
  return (
    <div className = "App">
      <div className = "bg">
      <Router>
          <Navbar />
          <Routes>
              <Route path='/courses' element={<Courses/>} />
          </Routes>
      </Router>
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
