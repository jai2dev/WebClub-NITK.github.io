import React from "react";
import "../../styles/eventCard.css";

// const EventCard = props => {
  // const imageUrl = `url(${props.image})`;
  // return (
  //   <article className={"EventCard mix "+ this.props.classs}>
  //     <div className="thumb" style={{ backgroundImage: imageUrl }} />
  //     <div className="infos">
  //       <h2 className="title">
  //         {props.title}
  //         <span className="time">{props.time}</span>
  //       </h2>
  //       <h3 className="detail">{props.date}</h3>
  //       <h3 className="detail"> {props.venue}</h3>
  //       <p className="txt">{props.description}</p>
  //       <h3 className="details">event details</h3>
  //     </div>
  //   </article>
  // );
// };



class EventCard extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
      };
  }

  render() {
    const imageUrl = `url(${this.props.image})`;
    // console.log(`Image url: ${imageUrl}`);
    return (
      <article className={"EventCard mix "+ this.props.classs}>
        <div className="thumb" style={{ backgroundImage: imageUrl }} />
        <div className="infos">
          <h2 className="title">
            <span className="ellipss">{this.props.title}</span>
            
            <span className="time">{this.props.time}</span>
          </h2>
          <h3 className="detail">{this.props.date}</h3>
          <h3 className="detail"> {this.props.venue}</h3>
          <p className="txt">{this.props.description}</p>
          {/* <h3 className="details">event details</h3> */}
        </div>
      </article>
    );
  }
}

export default EventCard;