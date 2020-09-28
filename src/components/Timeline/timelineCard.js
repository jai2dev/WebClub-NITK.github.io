import React from "react";
import "../../styles/timeline.css";
import rocket from "../../assets/images/rocket.png";
import cover from "../../assets/images/cd-icon-picture.svg";

class TimelineCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="cd-timeline-block">
        <div className="cd-timeline-img cd-picture">
          <img src={cover} alt=""></img>
        </div>
        <div className="cd-timeline-content">
          <h2 className="cd-timeline-title">
            <img
              src={rocket}
              width="50"
              style={{ marginBottom: "-15px" }}
              alt=""
            ></img>
            {this.props.title}
          </h2>
          <p>{this.props.body}</p>
          {this.props.link ? (
            <a
              href={this.props.link}
              className="cd-read-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          ) : (
            ""
          )}
          <span className="cd-date">{this.props.date}</span>
        </div>
      </div>
    );
  }
}

export default TimelineCard;
