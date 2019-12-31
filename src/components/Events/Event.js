import React from "react";
import EventCard from "./EventCard";
import YearNavigation from "./yearNavigation.js";
import Nav from "../Nav/Nav";
import eventsData from "../../assets/data/events.json";
import '../../styles/events.css';
import Helmet from 'react-helmet';
const Event = () => {
  console.log(eventsData);
  return (
    <div>
      <Helmet>
        <title>Events - Web Club NITK</title>
      </Helmet>
      <div>
        <Nav sticky="true" transp="false" />
        <div className="events controls">
          <YearNavigation />
        </div>

        <div className="container">
          <div className="row">
            {eventsData.map(value => {
              return (
                <div style={{ margin: 10 }}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
