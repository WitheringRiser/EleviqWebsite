import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import './courseinfo.css';


const Menu = () => (
  <>
  <p>Module 1</p>
  <p>Module 2</p>
  <p>Module 3</p>
  <p>Module 4</p>
  <p>Module 5</p>
  <p>Module 6</p>
  <p>Module 7</p>
  <p>Module 8</p>
  </>
)

function DropDown(){

  const [toggleMenu, setToggleMenu] = useState(false);

  return(
    <div className = "eleviq__courseinfo-menu">
        {toggleMenu
            ? <RiArrowUpSLine color = '#333' size = {27} onClick={() => setToggleMenu(false)} />
            : <RiArrowDownSLine color = '#333' size = {27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
            <div className="eleviq__courseinfo-menu_container scale-up-center">
                <div className = "eleviq__courseinfo-menu_container-links">
                    <Menu/>
                </div>
            </div>
        )}
    </div>
  )
}


export default function CourseInfo() {
  
  return (
    <>
    <div className="eleviq__courseinfo section__margin">
        <div className="eleviq__courseinfo-container">
            <h1>Course: How to Make a Game Company</h1>
            <h4>You'll learn how to discover, develop, setup, and sell your game as part of your own game studio. Enroll today for a limited-time discount!</h4>
            <h2>About this course</h2>
            <p>The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.</p>
            <div className="eleviq__courseinfo-learningoutcomes1">
                <h2>What you'll learn:</h2>
                <p>✓ Learning outcome 1</p>
                <p>✓ Learning outcome 2</p>
                <p>✓ Learning outcome 3</p>
                <p>✓ Learning outcome 4</p>
                <p>✓ Learning outcome 5</p>
                <p>✓ Learning outcome 6</p>
                <p>✓ Learning outcome 7</p>
            </div>
            <div className="eleviq__courseinfo-learningoutcomes2">
                <h2>Outline:</h2>
                <div className="eleviq__courseinfo-learningoutcomes2-part1">
                    <h3>Part 1: Prompt Engineering</h3>
                </div>
                <div className="eleviq__courseinfo-learningoutcomes2-dropdown1">
                    <DropDown/>
                    
                </div>
            </div>
            
            <h2>Your instructors:</h2>
            <h4>Lukas Brazdeikis</h4>
            <p>The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.</p>
            <h4>Jiajun Yu</h4>
            <p>The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.</p>
            <h4>Instructor 3</h4>
            <p>The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.</p>
        </div>
    </div>
    </>
  )
}
