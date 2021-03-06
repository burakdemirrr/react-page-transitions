import React, {useRef,useEffect} from 'react'
import Transition from '../Transition'
import "./Home.css"
import gsap from "gsap"
const Home = () => {
  const home=gsap.timeline();

  const homeh1=useRef(null);

  const homeimg=useRef(null);
  useEffect(()=>{
      home.from(homeh1.current,{
        duration:.6,
        skewX:10,
        x:-100,
        opacity: 0,
      },"-=4.5")
      home.from(homeimg.current,{
        duration:.6,
        y:-200,
        opacity: 0,
      },"-=4")

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