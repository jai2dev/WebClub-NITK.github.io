import React,{useState} from 'react';
import '../styles/member.css';
import SigNav from './sigNav.js';
import YearNav from './yearNav.js';
import MemberCard from './memberCard.js';
import membersData from '../assets/data/webclubMembersData'

export default function CenteredTabs() {
  
  return (
    <div>
        <h1>Members</h1>
        <SigNav></SigNav>
        <YearNav></YearNav>

      {membersData.map((value) => {
        return(
          <MemberCard 
          name={value.name}
          role={value.role}
          email={value.email}
          githuburl={value.githuburl}
          linkedinurl={value.linkedinurl}
          image="https://cdn.glitch.com/21943bea-5c73-4cf3-81b5-1b7fd62627ba%2Fpro.jpg?v=1576657391203"
         />
        )
      })}
    </div>
  );
}
