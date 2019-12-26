import React, { useState } from "react";
import "../styles/home.css";
import imageUrl from "../assets/images/bg-002.png";
import Nav from "./Nav/Nav";
import "../styles/global.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row main-image center-flex">
          <div className="col l6">
              <div className="container" style={{textAlign:"center"}}>
              <h1> we are </h1>
              <h1 className="main-title ">Web Enthusiasts` </h1>
              <h1 className="main-title ">Club  </h1>
              <h1>NITK</h1>
            </div>
          </div>
          <div className="col l6">
            <img className="bg-image" width="700" src={imageUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
