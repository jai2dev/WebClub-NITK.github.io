import React, { useState } from "react";
import "../styles/home.css";
import imageUrl from "../assets/images/bg-002.png";
import Nav from "./Nav/Nav";
import "../styles/global.css";
import UpcomingEvents from "./upcomingEvents.js";
import Helmet from "react-helmet";
import WhatWeDo from "./whatwedo.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log(this.props.deviceType);
    return (
      <div>
        <Helmet>
          <title>Web Club NITK</title>
        </Helmet>
        <div>
          <div>
            <Nav sticky="false" transp="true" />
            <div className="main-image center-flex">
              <div className="title-container">
                <h1 className="main-text"> we are </h1>
                <h1 className="main-title ">Web </h1>
                <h1 className="main-title ">Enthusiasts` </h1>
                <h1 className="main-title ">Club </h1>
                <h2 className="main-text">NITK</h2>
              </div>
              <img className="bg-image" width="700" src={imageUrl} />
            </div>
          </div>
        </div>
        <WhatWeDo></WhatWeDo>
        <hr />
        <UpcomingEvents></UpcomingEvents>
      </div>
    );
  }
}

export default Home;
