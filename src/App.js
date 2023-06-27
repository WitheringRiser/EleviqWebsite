import logo from './assets/logo-color.png';
import React from 'react';
import './App.css';
import {Brand, CTA, Feature, Navbar} from './components';
import {Footer, Header, Course, GPT, Features, Learn} from './containers';
import {Home, Courses} from './pages';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';



function App() {
  return (
    <div className = "App">
      <div className = "bg">
      <Router>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/courses' element={<Courses/>} />
          </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
