import React from "react";
import "../../styles/memberCard.css";
import defaultPic from "../../assets/images/default.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function MemberCard(props) {
  return (
    <div className={"con mix " + props.classs}>
      <div className="card" data-aos="flip-left">
        <div className="image">
          <img data-lazy={props.image || defaultPic} alt={props.name} />
          <div className="links">
            <a href={props.githuburl}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={`mailto: ${props.email}`}>
              <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
            </a>
            <a href={props.linkedinurl}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className="info">
          <h2>{props.name}</h2>
          <p>{props.role}</p>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
