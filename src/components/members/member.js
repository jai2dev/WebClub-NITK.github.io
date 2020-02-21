import React from "react";
import "../../styles/member.css";
import SigNav from "./sigNav.js";
import YearNav from "./yearNav.js";
import MemberCard from "./memberCard.js";
import membersData from "../../assets/data/webclubMembersData";
import Nav from "../Nav/Nav";
import Helmet from 'react-helmet';
import mixitup from 'mixitup'
import { membersWorkSheetId } from './../../environment';

class Members extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      membersData:[]
    };
    this.getData();
  }

  async getData(){
    var json = await fetch('https://spreadsheets.google.com/feeds/list/'+membersWorkSheetId+'/od6/public/values?alt=json')
    json = await json.json()
    var finalArray=[];
    var key,value;
    //parse the json obtained from google sheets.
    json.feed.entry.map(entry=>{
        json={}
        entry.content['$t'].split(',').map(obj=>{
            key = obj.split(':')[0].toString()
            key = key.trim();
            value = obj.split(':')[1].toString()
            value = value.trim();
            json[key]=value
        })
        
        finalArray.push(json);
    })
    this.setState({membersData:finalArray});
  }

  componentDidMount(){
    var containerEl = document.querySelector('.memberContainer');
    var mixer = mixitup(containerEl);
  }

  render() {
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
              if(value.role != "Club Member"){
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
              }else if(value.role == "Alumni"){
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
              }else{
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
