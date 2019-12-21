import React from "react";
import "../../styles/eventCard.css";

const EventCard = props => {
  const imageUrl = `url(${props.image})`;
  return (
    <article className="EventCard">
      <div className="thumb" style={{ backgroundImage: imageUrl }} />
      <div className="infos">
        <h2 className="title">
          {props.title}
          <span className="time">{props.time}</span>
        </h2>
        <h3 className="detail">{props.date}</h3>
        <h3 className="detail"> {props.venue}</h3>
        <p className="txt">{props.description}</p>
        <h3 className="details">event details</h3>
      </div>
    </article>
  );
};

export default EventCard;