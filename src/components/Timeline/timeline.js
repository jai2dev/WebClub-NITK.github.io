import React, { useState } from 'react';
import '../../styles/timeline.css';
import TimelineCard from './timelineCard';
import Nav from '../Nav/Nav';
import Helmet from 'react-helmet';


class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Timeline - Web Club NITK</title>
        </Helmet>
        <Nav sticky="true" transp="false" />
        <section id="cd-timeline" className="cd-container">
          <TimelineCard
            title={"Rubeus Game Engine"}
            body={"A cross-platform 2D game engine written for beginner programmers to realise their ideas fast and seemlessly."}
            date={"December, 2018"}
            link={"home"}
          />
        </section>
      </div>
    );
  }
}


export default Timeline;


