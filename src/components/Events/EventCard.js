import React, { Fragment } from "react";
import "../../styles/eventCard.css";

export default function EventCard(props) {
  const description = (
    <p className="txt">
      {`${props.description}`
        .split('\n')
        .map((paragraph, idx) =>
          <Fragment key={idx}>
            {paragraph}<br />
          </Fragment>)}
    </p>
  );
  const imageUrl = `url(${props.image})`;
  return (
    <article className={"EventCard mix " + props.classs}>
      <div className="thumb" style={{ backgroundImage: imageUrl }} />
      <div className="infos">
        <h2 className="title">
          <span className="ellipss">{props.title}</span>
          <span className="time">{props.time}</span>
        </h2>
        <h3 className="detail">{props.date}</h3>
        <h3 className="detail"> {props.venue}</h3>
        {description}
        {props.extras && <a className="details" target="_blank" href={props.extras} rel="noreferrer noopener">More Info</a>}
      </div>
    </article>
  );
}

