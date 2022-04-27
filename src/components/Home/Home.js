import React from 'react'
import Transition from '../Transition'
import "./Home.css"
const Home = () => {
  return (
    <div>
      <Transition/>
      <div className="home-image home-overlay"></div>
      <div className="container-home">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default Home