import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import Transition from '../Transition';
import "./About.css"
const About = () => {
  const about=gsap.timeline();

  const aboutimg=useRef(null);
  const abouth1=useRef(null);

  useEffect(()=>{

  },[])
  return (
    <div>
      <Transition timeline={about}/>
      <div className="about-image about-overlay" ref={aboutimg}></div>
      <div className="container-about">
        <h1 ref={abouth1}>About Page</h1>
      </div>
    </div>
  )
}

export default About