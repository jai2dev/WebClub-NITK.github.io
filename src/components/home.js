import React from "react";
import "../styles/home.css";
import imageUrl from "../assets/images/bg-002.png";
import Nav from "./Nav/Nav";
import UpcomingEvents from "./upcomingEvents.js";
import Helmet from "react-helmet";
import WhatWeDo from "./whatwedo.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
                <h2 className="main-text"> we are </h2>
                <h1 className="main-title">
                  Web
                  <br />
                  Enthusiasts`
                  <br />
                  Club
                </h1>
                <h1 className="main-text">NITK</h1>
              </div>
              <img className="bg-image" width="700" src={imageUrl} alt="" />
            </div>
          </div>
        </div>
        <WhatWeDo />
        <hr />
        <UpcomingEvents />
      </div>
    );
  }
}

export default Home;
