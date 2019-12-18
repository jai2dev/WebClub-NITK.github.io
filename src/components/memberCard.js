import React from 'react';
import '../styles/memberCard.css';

// function memberCard(){
//     return(
//         // <div class="container">
//         // <div class="card" data-aos="flip-left">
//         //     <div class="image">
//         //         <img src="pro.jpg"></img>
//         //         <div class="links">
//         //             <span class="mdi mdi-github-circle"></span>
//         //             <span class="mdi mdi-email"></span>
//         //             <span class="mdi mdi-linkedin-box"></span>
//         //         </div>
//         //     </div>
//         //     <div class="info">
//         //         <h2>Adarsh Naidu</h2>
//         //         <p>Club Member</p>
//         //     </div>
//         // </div>
//         // </div>
//         <h1>hello</h1>
//     );
// }

// export default memberCard;


class MemberCard extends React.Component {
    constructor(props){
      super(props);
      this.state={
  
      }
    }
    render(){
      return (
        <div class="container">
        <div class="card" data-aos="flip-left">
            <div class="image">
                <img src="https://cdn.glitch.com/21943bea-5c73-4cf3-81b5-1b7fd62627ba%2Fpro.jpg?v=1576657391203"></img>
                <div class="links">
                    <span class="mdi mdi-github-circle"></span>
                    <span class="mdi mdi-email"></span>
                    <span class="mdi mdi-linkedin-box"></span>
                </div>
            </div>
            <div class="info">
                <h2>Adarsh Naidu</h2>
                <p>Club Member</p>
            </div>
        </div>
        </div>
      );
    }  
}
    
  
export default MemberCard;