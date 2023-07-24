import{Navbar, CTA} from '../../components';
import{Video, CourseInfo, Footer} from '../../containers';
import React from 'react'

const Courses = () => {
  return (
    <div>
        <Navbar/>
        <Video/>
        <CourseInfo/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Courses;
