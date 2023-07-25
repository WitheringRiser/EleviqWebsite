import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import './courseinfo.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const gumroadProductLink = 'https://eleviq.gumroad.com/l/how-to-build-a-game-studio';

function CourseAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDownSLine />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h3>Part 1: ChatGPT Optimization</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Menu1/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDownSLine />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h3>Part 2: Entrepreneurship Fundamentals</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Menu2/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDownSLine />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h3>Part 3: Game Design</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Menu3/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDownSLine />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h3>Part 4: Game Development</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Menu4/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<RiArrowDownSLine />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h3>Part 5: Setting Up A Game Studio</h3></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Menu5/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


const Menu1 = () => (
  <>
  <p>1. About this course and your instructors</p>
  <p>2. Leveraging ChatGPT at every step of the process</p>
  <p>3. General tips on prompt engineering</p>
  <p>4. Finding and brainstorming ideas with ChatGPT</p>
  <p>5. Understanding what direction to take with ChatGPT</p>
  </>
)

const Menu2 = () => (
    <>
    <p>6. Customer pain and emotion</p>
    <p>7. Your solution</p>
    <p>8. Competition and similar games</p>
    <p>9. Testing</p>
    <p>10. Interacting with the customer</p>
    <p>11. Business Model Canvas</p>
    <p>12. Other tips</p>
    </>
  )

  const Menu3 = () => (
    <>
    <p>13. Game genres</p>
    <p>14. Game design principles and processes</p>
    <p>15. MDA framework</p>
    <p>16. Example: Analyze the components and elements of successful games</p>
    <p>17. Role of being a game designer</p>
    </>
  )

  const Menu4 = () => (
    <>
    <p>18. Game development tools and engines</p>
    <p>19. Scripting and programming languages</p>
    <p>20. Audio and visuals</p>
    <p>21. UI/UX</p>
    <p>22. Testing and quality assurance</p>
    </>
  )

  const Menu5 = () => (
    <>
    <p>23. Career positions, salary, and future development</p>
    <p>24. Software, hardware, consoles</p>
    <p>25. Impact, ethics, and social responsibilities</p>
    <p>26. Example: building a game with Unity</p>
    <p>27. Filing a business</p>
    <p>28. Branding and naming</p>
    <p>29. Bank account and accounting</p>
    <p>30. Email lists and landing pages</p>
    <p>31. Where to sell, how to sell</p>
    <p>32. Marketing plan</p>
    <p>33. Cost and revenue structure</p>
    <p>34. Scaling</p>
    <p>35. Example: business case study</p>
    <p>36. Course wrap up</p>
    </>
  )




export default function CourseInfo() {
  
  return (
    <div className="eleviq__ section__margin">
      <div className="eleviq__courseinfo">
          <div className="eleviq__courseinfo-container">
              <h1>Course: How to Start a Game Studio</h1>
              <h4>You'll learn how to discover, develop, setup, and sell your game as part of your own game studio. Enroll today for a limited-time discount!</h4>
              <p>If you were to learn all this independently, it would take 100 hours piecemealing sources of design, development, business, and ChatGPT. And then 100 hours of trial and error as you realize some pieces don't fit, you've missed context, and so on. We've made it easy to learn, easy to remember, and easy to put into practice.</p>
              <div className="eleviq__courseinfo-learningoutcomes1">
                  <h2>What you'll learn:</h2>
                  <p>✓ Resolve game issues with ChatGPT</p>
                  <p>✓ Question optimization with ChatGPT</p>
                  <p>✓ Understand what direction to take with ChatGPT</p>
                  <p>✓ Create your entire marketing plan with ChatGPT</p>
                  <p>✓ Find and brainstorm any ideas with AI tools</p>
                  <p>✓ Design a genuinely enjoyable game that evokes emotion</p>
                  <p>✓ Understand game design principles and elements</p>
                  <p>✓ Develop a foundational understanding of game mechanics and dynamics</p>
                  <p>✓ Get familiar with popular game development engines and tools</p>
                  <p>✓ Develop some programming skills commonly used in game development/with ChatGPT</p>
                  <p>✓ Build your game with Unity Editor</p>
                  <p>✓ Identify, test, and build a game business with entrepreneurial practices</p>
                  <p>✓ File a business</p>
                  <p>✓ Setup an email list and hire the right people</p>
              </div>
              <div className="eleviq__courseinfo-learningoutcomes2">
                  <h2>Outline:</h2>
                  <div className="eleviq__courseinfo-learningoutcomes2-accordion">
                    <CourseAccordion/>
                  </div>
                  
                  
              </div>
              
              <h2>Your instructors:</h2>
              <h4>Lukas Brazdeikis</h4>
              <p>Hi I'm Lukas. I've built a game studio and two web-based games. I also have experience building other software startups that have generated $350K revenue anually.</p>
              <h4>Jiajun Yu</h4>
              <p>Hello I'm Jiajun. I'm a second year masters student at Duke with a full-ride scholarship. I have a big passion in game design and development.</p>
              <div className="eleviq__buyboxlower">
                  <div className="eleviq__buyboxlower-content">
                      <h2>How to Start a Game Studio</h2>
                      <h1><strike>$200</strike> <span className = "eleviq__buyboxlower-content-60"> $60</span></h1>
                      <p>70% off for the beta launch</p>
                      <p>14-day money-back guarunteed</p>
                      <div className = "eleviq__buyboxlower-content__enroll">
                          <button type="button"><h2>Enroll in Beta</h2></button>
                     </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="eleviq__buybox">
          <div className="eleviq__buybox-content">
              <h2>How to Start a Game Studio</h2>
              <h1><strike>$200</strike> <span className = "eleviq__buybox-content-60"> $60</span></h1>
              <p>70% off for the beta launch</p>
              <p>14-day money-back guaruntee</p>
              <div className = "eleviq__buybox-content__enroll">
                  <button type="button"><h2><a href={gumroadProductLink} target="_blank" rel="noopener noreferrer">Enroll in Beta</a></h2></button>
              </div>
          </div>
      </div>
    </div>
  )
}
