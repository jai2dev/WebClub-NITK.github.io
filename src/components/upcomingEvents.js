import React, { useState } from 'react';
import '../styles/upcomingEvents.css';
import '../styles/global.css';
import EventCard from './Events/EventCard.js';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import eventsData from "../assets/data/events.json";

class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div>
        <h1>Upcoming Events</h1>

        <div >
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >

            {eventsData.map(value => {
              return (
                <div style={{margin:100}}>
                  <EventCard
                    title={value.title}
                    date={value.date}
                    time={value.time}
                    venue={value.venue}
                    image={value.image}
                    description={value.description}
                  />
                </div>
              );
            })}

          </Carousel>

        </div>
      </div>
    );
  }
}


export default UpcomingEvents;


