import React, { useState } from 'react';
import '../styles/whatwedo.css';
import '../styles/global.css';
import projects from "../assets/images/projects.svg"
import mentorship from "../assets/images/mentorship.svg"
import hackathon from "../assets/images/hackathon.svg"
import talks from "../assets/images/talks.svg"

class WhatWeDo extends React.Component {
    constructor(props){
      super(props);
      this.state={
  
      }
    }
    render(){
      return (
        <div className="container">
        <h1>What we do</h1>
        <div class="hexCon">
          <div class = "wrap">
            <div class="hexagon"><img src={mentorship} alt="Picture"></img></div>
            <h2>Mentorship</h2>
          </div>
          <div class = "wrap">
            <div class="hexagon"><img src={projects} id = "projects" alt="Picture"></img></div>
            <h2>Projects</h2>
          </div>
          <div class = "wrap">
            <div class="hexagon"><img src={talks} alt="Picture" class="talk"></img></div>
            <h2>Talks</h2>
          </div>
          <div class = "wrap">
            <div class="hexagon"><img src={hackathon} alt="Picture"></img></div>
            <h2>Hackathons</h2>
          </div>
         
        </div>
      </div>
      );
    }  
}
    
  
export default WhatWeDo;
  

