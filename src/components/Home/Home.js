import React, {useRef,useEffect} from 'react'
import Transition from '../Transition'
import "./Home.css"
import gsap from "gsap"
const Home = () => {
  const home=gsap.timeline();

  const homeh1=useRef(null);

  const homeimg=useRef(null);
  useEffect(()=>{
    

  },[])
  return (
    <div>
      <Transition timeline={home}/>
      <div className="home-image home-overlay" ref={homeimg}></div>
      <div className="container-home">
        <h1 ref={homeh1}>Home Page</h1>
      </div>
    </div>
  )
}

export default Home