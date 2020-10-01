import React from "react";
import Helmet from "react-helmet";
import Loader from "react-loader-spinner";
import axios from "axios";
import mixitup from "mixitup";
import SigNav from "./sigNav.js";
import YearNav from "./yearNav.js";
import MemberCard from "./memberCard.js";
import Nav from "../Nav/Nav";
import SpreadSheetApi from "../../_services/spreadSheetApi";
import defaultPic from "../../assets/images/default.jpg";
import "../../styles/member.css";
import {
  membersWorkSheetId,
  profileImagesRepositoryURL,
} from "./../../environment";

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      membersData: [],
      visible: true,
    };
    this.getData();
  }

  async getData() {
    var finalArray = await SpreadSheetApi.getWorkSheetData(membersWorkSheetId);
    let extensions = ["jpg", "jpeg", "png", "JPG", "JPEG", "PNG"];

    finalArray.forEach(async (val) => {
      let img;

      for (let extension of extensions) {
        try {
          img = `${profileImagesRepositoryURL}${val.id}.${extension}`;
          // eslint-disable-next-line
          let response = await axios.get(img);
          break;
        } catch (err) {
          img = defaultPic;
        }
      }

      val.imageURL = img;
      this.setState({ membersData: finalArray });
    });
    this.setState({ membersData: finalArray });
    this.setState({ visible: false });
    var containerEl = document.querySelector(".memberContainer");
    // eslint-disable-next-line
    var mixer = mixitup(containerEl);
  }

  render() {
    let content;
    if (this.state.visible) {
      content = (
        <div className="loader">
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        </div>
      );
    } else
      content = (
        <div className="MemberDetails">
          <div class="controls">
            <SigNav />
            <YearNav />
          </div>

          <div class="memberContainer">
            {this.state.membersData.map((value) => {
              // if the role includes the term Alumni then render the card in Alumni section
              if(value.role.includes("Alumni")) {
                return (
                  <MemberCard
                    classs={"Alumni"}
                    name={value.name}
                    role={value.role.replace("Alumni", '')}
                    email={value.email}
                    githuburl={value.githuburl}
                    linkedinurl={value.linkedinurl}
                    image={value.imageURL}
                    key={value.name}
                  />
                );
              } else if (value.role !== "Club Member") {
                // if the role is not Club Member then render the card in Core section
                return (
                  <MemberCard
                    classs={value.sig + " Core"}
                    name={value.name}
                    role={value.role}
                    email={value.email}
                    githuburl={value.githuburl}
                    linkedinurl={value.linkedinurl}
                    image={value.imageURL}
                    key={value.name}
                  />
                );
              } else {
                return (
                  <MemberCard
                    classs={value.sig}
                    name={value.name}
                    role={value.role}
                    email={value.email}
                    githuburl={value.githuburl}
                    linkedinurl={value.linkedinurl}
                    image={value.imageURL}
                    key={value.name}
                  />
                );
              }
            })}
          </div>
        </div>
      );
    return (
      <>
        <Helmet>
          <title>Team - Web Club NITK</title>
        </Helmet>
        <Nav sticky="true" transp="false" />
        {content}
      </>
    );
  }
}

export default Members;
