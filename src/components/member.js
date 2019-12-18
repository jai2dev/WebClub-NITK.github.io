import React,{useState} from 'react';
import '../styles/member.css';
import SigNav from './sigNav.js';
import YearNav from './yearNav.js';
import MemberCard from './memberCard.js';


export default function CenteredTabs() {
  
  // const members = JSON.parse('../assets/data/webclubMemberData.json');
  // let members = require('../assets/data/webclubMemberData.json');
  
  return (
    <div>
        <h1>Members</h1>
        <SigNav></SigNav>
        <YearNav></YearNav>
        
        <MemberCard 
         name="Adarsh Naidu"
         role="Club member"
         email="#"
         githuburl="#"
         linkedinurl="#"
         image="https://cdn.glitch.com/21943bea-5c73-4cf3-81b5-1b7fd62627ba%2Fpro.jpg?v=1576657391203"
        />
        {/* <MemberCard 
         name={members[0].name}
         role={members[0].role}
         email="#"
         githuburl="#"
         linkedinurl="#"
         image="https://cdn.glitch.com/21943bea-5c73-4cf3-81b5-1b7fd62627ba%2Fpro.jpg?v=1576657391203"
        /> */}
    </div>
  );
}
