import React from 'react';
import '../styles/member.css';
import SigNav from './sigNav.js';
import YearNav from './yearNav.js';
import MemberCard from './memberCard.js';


export default function CenteredTabs() {

  return (
    <div>
        <h1>Members</h1>
        <SigNav></SigNav>
        <YearNav></YearNav>
        <MemberCard></MemberCard>
    </div>
  );
}
