import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import Transition from '../Transition';
import "./Contact.css"
const Contact = () => {
  const contact=gsap.timeline();

  const contacth1=useRef(null);

  const contactimg=useRef(null);
  useEffect(()=>{},[
    
  ])
  return (
    <div>
      <Transition timeline={contact}/>
      <div className="contact-image contact-overlay" ref={contactimg}></div>
      <div className="container-contact">
        <h1 ref={contacth1}>Contact Page</h1>
      </div>
    </div>
  )
}

export default Contact