import React, { useState } from 'react';
import '../styles/whatwedo.css';
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
        <div className="row">
          <div className="col-sm-l3" style={{margin:10}}>
            <div class="hexagon"><img src={mentorship} alt="Picture"></img></div>
            <h2>Mentorship</h2>
          </div>
          <div className="col-sm-l3" style={{margin:10}}>
            <div class="hexagon"><img src={projects} id = "projects" alt="Picture"></img></div>
            <h2>Projects</h2>
          </div>
          <div className="col-sm-l3" style={{margin:10}}>
            <div class="hexagon"><img src={talks} alt="Picture" class="talk"></img></div>
            <h2>Talks</h2>
          </div>
          <div className="col-sm-l3" style={{margin:10}}>
            <div class="hexagon"><img src={hackathon} alt="Picture"></img></div>
            <h2>Hackathons</h2>
          </div>          
        </div>
      );
    }  
}
    
  
export default WhatWeDo;
  

