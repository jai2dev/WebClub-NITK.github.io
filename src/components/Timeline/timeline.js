import React, { useState } from 'react';
import '../../styles/timeline.css';
import TimelineCard from './timelineCard';
import Nav from '../Nav/Nav';
import Helmet from 'react-helmet';
import data from '../../assets/data/timeline.json';
import $ from 'jquery'


class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    var timelineBlocks = $(".cd-timeline-block"),
    offset = 0.8;
    console.log(timelineBlocks)
  hideBlocks(timelineBlocks, offset);
  $(window).on("scroll", function() {
    !window.requestAnimationFrame
      ? setTimeout(function() {
          showBlocks(timelineBlocks, offset);
        }, 100)
      : window.requestAnimationFrame(function() {
          showBlocks(timelineBlocks, offset);
        });
  });
  function hideBlocks(blocks, offset) {
    blocks.each(function() {
      $(this).offset().top >
        $(window).scrollTop() + $(window).height() * offset &&
        $(this)
          .find(".cd-timeline-img, .cd-timeline-content")
          .addClass("is-hidden");
    });
  }
  function showBlocks(blocks, offset) {
    blocks.each(function() {
      $(this).offset().top <=
        $(window).scrollTop() + $(window).height() * offset &&
        $(this)
          .find(".cd-timeline-img")
          .hasClass("is-hidden") &&
        $(this)
          .find(".cd-timeline-img, .cd-timeline-content")
          .removeClass("is-hidden")
          .addClass("bounce-in");
    });
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

