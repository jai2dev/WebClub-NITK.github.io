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
import axios from 'axios'
import defaultPic from '../../assets/images/default.jpg'

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
    finalArray.map(async (val) => {
      let img = "https://raw.githubusercontent.com/EthanFunk2020/Exp/master/Web%20Club%20Members_%20Profile%20Photos/"+val.id+ ".jpg"
      try{
        await axios.get(img)
      }catch(err){
        img = defaultPic
      }

      val.imageURL = img
      this.setState({ membersData: finalArray });
    })
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
            {this.state.membersData.map((value) => {
              if (value.role != "Club Member") {
                return (
                  <MemberCard
                    classs={value.sig + " Core"}
                    name={value.name}
                    role={value.role}
                    email={value.email}
                    githuburl={value.githuburl}
                    linkedinurl={value.linkedinurl}
                    image={value.imageURL}
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
                    image={value.imageURL}
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
