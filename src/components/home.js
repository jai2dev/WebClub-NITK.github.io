import React, { useState } from "react";
import "../styles/home.css";
import imageUrl from "../assets/images/bg-002.png";
import Nav from "./Nav/Nav";
import "../styles/global.css";
import UpcomingEvents from "./upcomingEvents.js";
import { textAlign } from "@material-ui/system";
import projects from "../assets/images/projects.svg"
import mentorship from "../assets/images/mentorship.svg"
import hackathon from "../assets/images/hackathon.svg"
import talks from "../assets/images/talks.svg"


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.deviceType);
    return (
      <div>
      <div>
        <div>
          <Nav sticky="false" transp="true" />
          <div className="main-image center-flex">
            <div className="title-container">
              <h1 className="main-text"> we are </h1>
              <h1 className="main-title ">Web Enthusiasts` </h1>
              <h1 className="main-title ">Club </h1>
              <h2 className="main-text">NITK</h2>
            </div>

            <img className="bg-image" width="700" src={imageUrl} />
          </div>
          <UpcomingEvents></UpcomingEvents>
        </div>
        <UpcomingEvents></UpcomingEvents>
      </div>
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
    </div>
    );
  }
}

export default Home;


// <div className="col l4">
//             <i class="fa fa-envelope-open" aria-hidden="true"></i>
//             <p>Talks & Workshops</p>
//           </div>
//           <div className="col l4">
//             <i class="fa fa-envelope-open" aria-hidden="true"></i>
//             <p>Hackathons</p>
//           </div>
//           <div className="col l4">
//             <i class="fa fa-envelope-open" aria-hidden="true"></i>
//             <p>Mentorship</p>
//           </div>
//           <div className="col l4">
//             <i class="far fa-file-code"></i>
//             <p>Projects</p>
//           </div>