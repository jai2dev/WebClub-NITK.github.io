import React from "react";
import "../../styles/member.css";
import "../../styles/global.css";
import SigNav from "./sigNav.js";
import YearNav from "./yearNav.js";
import MemberCard from "./memberCard.js";
import membersData from "../../assets/data/webclubMembersData";
import Nav from "../Nav/Nav";
import Helmet from 'react-helmet';
import mixitup from 'mixitup'
import { membersWorkSheetId } from './../../environment';
import SpreadSheetApi from '../../_services/spreadSheetApi';
import Loader from 'react-loader-spinner'
import { StylesProvider } from "@material-ui/core";
class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      membersData: [],
      visible: true
    };
    this.getData();
  }

  async getData() {
    var finalArray = await SpreadSheetApi.getWorkSheetData(membersWorkSheetId);
    this.setState({ membersData: finalArray });
    this.setState({visible:false});
    var containerEl = document.querySelector('.memberContainer');
    var mixer = mixitup(containerEl);
  }

  // componentDidMount() {
  //   if(!this.state.visible){
  //     var containerEl = document.querySelector('.memberContainer');
  //     var mixer = mixitup(containerEl);
  //   }
  // }

  render() {
    if (this.state.visible) {
      return (
        <div className="loader">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
        />
        </div>
      )
    }
  
    if(!this.state.visible)
    return (

      <div>


        <Helmet>
          <title>Team - Web Club NITK</title>
        </Helmet>
        <Nav sticky="true" transp="false" />
        <div className="MemberDetails">
          <div class="controls">
            <SigNav></SigNav>
            <YearNav></YearNav>
          </div>

          <div class="memberContainer">
            {this.state.membersData.map(value => {
              if (value.role != "Club Member") {
                return (
                  <MemberCard
                    classs={value.sig + " Core"}
                    name={value.name}
                    role={value.role}
                    email={value.email}
                    githuburl={value.githuburl}
                    linkedinurl={value.linkedinurl}
                    image="https://cdn.glitch.com/21943bea-5c73-4cf3-81b5-1b7fd62627ba%2Fpro.jpg?v=1576657391203"
                  />
                );
              } else if (value.role == "Alumni") {
                return (
                  <MemberCard
                    classs={value.sig + " Alumni"}
                    name={value.name}
                    role={value.role}
                    email={value.email}
                    githuburl={value.githuburl}
                    linkedinurl={value.linkedinurl}
                    image="https://cdn.glitch.com/21943bea-5c73-4cf3-81b5-1b7fd62627ba%2Fpro.jpg?v=1576657391203"
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
                    image="https://cdn.glitch.com/21943bea-5c73-4cf3-81b5-1b7fd62627ba%2Fpro.jpg?v=1576657391203"
                  />
                );
              }

            })}
          </div>
        </div>
      </div>
    );
  }


}

export default Members;
