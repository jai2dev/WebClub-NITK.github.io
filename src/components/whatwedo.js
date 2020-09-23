import React from "react";
import "../styles/whatwedo.css";
import projects from "../assets/images/projects.svg";
import mentorship from "../assets/images/mentorship.svg";
import hackathon from "../assets/images/hackathon.svg";
import talks from "../assets/images/talks.svg";

class WhatWeDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className="heading-whatwedo">What we do</h1>

        <div className="container">
          <div className="row container-whatwedo">
            <div className="col-sm" style={{ margin: 10 }}>
              <div class="hexagon">
                <img src={mentorship} alt="Picture"></img>
              </div>
              <h2 className="heading-whatwedo">Mentorship</h2>
            </div>
            <div className="col-sm" style={{ margin: 10 }}>
              <div class="hexagon">
                <img src={projects} id="projects" alt="Picture"></img>
              </div>
              <h2 className="heading-whatwedo">Projects</h2>
            </div>
            <div className="col-sm" style={{ margin: 10 }}>
              <div class="hexagon">
                <img src={talks} alt="Picture" class="talk"></img>
              </div>
              <h2 className="heading-whatwedo">Talks</h2>
            </div>
            <div className="col-sm" style={{ margin: 10 }}>
              <div class="hexagon">
                <img src={hackathon} alt="Picture"></img>
              </div>
              <h2 className="heading-whatwedo">Hackathons</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
