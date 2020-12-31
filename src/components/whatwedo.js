import React from "react";
import "../styles/whatwedo.css";
import { ReactComponent as Talks } from "../assets/images/talks thin.svg";
import { ReactComponent as Hackathons } from "../assets/images/hackathon thin.svg";
import { ReactComponent as Projects } from "../assets/images/projects thin.svg";
import { ReactComponent as Mentorships } from "../assets/images/mentorship thin.svg";

function Card({ svg, text }) {
  return (
    <div className="col-xl-3 col-md-6 text-center mb-4">
      <div className="whatwedo-block text-white">
        <div className="icon-box">{svg}</div>
        <div className="content text-center">
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section id="home-section">
      <h1 className="heading">What we do</h1>
      <div className="container">
        <div className="row justify-content-center">
          <Card svg={<Hackathons />} text="Hackathons" />
          <Card svg={<Projects />} text="Projects" />
          <Card svg={<Talks />} text="Talks" />
          <Card svg={<Mentorships />} text="Mentorships" />
        </div>
      </div>
    </section>
  );
}
