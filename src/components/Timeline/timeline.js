import React, { useState } from 'react';
import '../../styles/timeline.css';
import TimelineCard from './timelineCard';


class Timeline extends React.Component {
    constructor(props){
      super(props);
      this.state={
  
      }
    }
    render(){
      return (
        <section id="cd-timeline" className="cd-container">
            <TimelineCard
              title={"Rubeus Game Engine"}
              body={"A cross-platform 2D game engine written for beginner programmers to realise their ideas fast and seemlessly."}
              date={"December, 2018"}
              link={"home"}
              />
        </section>
      );
    }  
}
    
  
export default Timeline;
  

