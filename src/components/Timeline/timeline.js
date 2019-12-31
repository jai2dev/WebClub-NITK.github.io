import React, { useState } from 'react';
import '../../styles/timeline.css';
import TimelineCard from './timelineCard';
import Nav from '../Nav/Nav';
import Helmet from 'react-helmet';
import data from '../../assets/data/timeline.json';


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
        {data.map(value => {
          return(
            <TimelineCard
              title={value.title}
              body={value.description}
              date={value.date}
              link={value.link}
              />
          )
        })}
            
        </section>
      </div>
    );
  }
}

    
  
export default Timeline;



// <TimelineCard
//               title={"Rubeus Game Engine"}
//               body={"A cross-platform 2D game engine written for beginner programmers to realise their ideas fast and seemlessly."}
//               date={"December, 2018"}
//               link={"home"}
//               />

