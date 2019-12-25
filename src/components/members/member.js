import React, { useState } from "react";
import "../../styles/member.css";
import SigNav from "./sigNav.js";
import YearNav from "./yearNav.js";
import MemberCard from "./memberCard.js";
import membersData from "../../assets/data/webclubMembersData";
import Nav from "../Nav/NavBig";

// export default function CenteredTabs() {

//   return (
//     <div>
//         <h1>Members</h1>
//           <SigNav></SigNav>
//           <YearNav></YearNav>
//       {membersData.map((value) => {
//         return(
//           <MemberCard
//           name={value.name}
//           role={value.role}
//           email={value.email}
//           githuburl={value.githuburl}
//           linkedinurl={value.linkedinurl}
//           image="https://cdn.glitch.com/21943bea-5c73-4cf3-81b5-1b7fd62627ba%2Fpro.jpg?v=1576657391203"
//          />
//         )
//       })}
//     </div>
//   );
// }

class Members extends React.Component {
  constructor(props) {
    super(props);
    this.mixitup = function(something) {};
    this.containerEl = document.querySelector(".container");
    this.mixer = this.mixitup(this.containerEl);

    this.state = {
      members: membersData,
      filter: ""
    };
  }

  handleInput = e => {
    this.setState({ filter: e.target.value });
    console.log(e);
  };

  render() {
    return (
      <div>
        <Nav sticky="true" transp="false" />
        <div className="MemberDetails">
          <h1>Members</h1>
          <div class="controls">
            <SigNav></SigNav>
            <YearNav></YearNav>
          </div>

          <div class="container">
            {membersData.map(value => {
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
            })}
          </div>
        </div>
        {/* 

    // <div>
    // <h1>Hi</h1>
    // <div class="controls">
    //         <button type="button" class="control" data-filter="all">All</button>
    //         <button type="button" class="control" data-filter=".green">Green</button>
    //         <button type="button" class="control" data-filter=".blue">Blue</button>
    //         <button type="button" class="control" data-filter=".pink">Pink</button>
    //         <button type="button" class="control" data-filter="none">None</button>

    //         <button type="button" class="control" data-sort="default:asc">Asc</button>
    //         <button type="button" class="control" data-sort="default:desc">Desc</button>
    //     </div>

    //     <div class="container">
    //         <div class="mix green"></div>
    //         <div class="mix green"></div>
    //         <div class="mix blue"></div>
    //         <div class="mix pink"></div>
    //         <div class="mix green"></div>
    //         <div class="mix blue"></div>
    //         <div class="mix pink"></div>
    //         <div class="mix blue"></div>

    //         <div class="gap"></div>
    //         <div class="gap"></div>
    //         <div class="gap"></div>
    //     </div>
    // </div> */}
      </div>
    );
  }
}

export default Members;
