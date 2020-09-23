import React from "react";
import "../../styles/memberCard.css";
import defaultPic from "../../assets/images/default.jpg";

class MemberCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={"con mix " + this.props.classs}>
        <div className="card" data-aos="flip-left">
          <div className="image">
            <img src={this.props.image || defaultPic}></img>
            <div className="links">
              <a href={this.props.githuburl}>
                <i class="fa fa-github"> </i>
              </a>
              <a href={`mailto: ${this.props.email}`}>
                <i class="fa fa-envelope ml-2"></i>
              </a>
              <a href={this.props.linkedinurl}>
                <i className="fa fa-linkedin-square"> </i>
              </a>
            </div>
          </div>
          <div className="info">
            <h2>{this.props.name}</h2>
            <p>{this.props.role}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MemberCard;
