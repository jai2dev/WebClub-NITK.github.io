import React from 'react';
import '../../styles/memberCard.css';

// function memberCard(){
//     return(
//         // <div className="container">
//         // <div className="card" data-aos="flip-left">
//         //     <div className="image">
//         //         <img src="pro.jpg"></img>
//         //         <div className="links">
//         //             <span className="mdi mdi-github-circle"></span>
//         //             <span className="mdi mdi-email"></span>
//         //             <span className="mdi mdi-linkedin-box"></span>
//         //         </div>
//         //     </div>
//         //     <div className="info">
//         //         <h2>Adarsh Naidu</h2>
//         //         <p>Club Member</p>
//         //     </div>
//         // </div>
//         // </div>
//         <h1>hello</h1>
//     );
// }
// "https://cdn.glitch.com/21943bea-5c73-4cf3-81b5-1b7fd62627ba%2Fpro.jpg?v=1576657391203"

// export default memberCard;


// function MemberCard(props){    
//       return (
//         <div className="container">
//         <div className="card" data-aos="flip-left">
//             <div className="image">
//                 <img src={props.image}></img>
//                 <div className="links">
//                     <a href={props.githuburl}><span className="mdi mdi-github-circle"></span></a>
//                     <a href={props.email}><span className="mdi mdi-email"></span></a>
//                     <a href={props.linkedinurl}><span className="mdi mdi-linkedin-box"></span></a>
//                     {/* <span className="mdi mdi-github-circle"></span>
//                     <span className="mdi mdi-email"></span>
//                     <span className="mdi mdi-linkedin-box"></span> */}
//                 </div>
//             </div>
//             <div className="info">
//                 <h2>{props.name}</h2>
//                 <p>{props.role}</p>
//             </div>
//         </div>
//         </div>
//       );
// }  



class MemberCard extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <div className="container">
                <div className="card" data-aos="flip-left">
                    <div className="image">
                        <img src={this.props.image}></img>
                        <div className="links">
                            <a href={this.props.githuburl}><span className="mdi mdi-github-circle"></span></a>
                            <a href={this.props.email}><span className="mdi mdi-email"></span></a>
                            <a href={this.props.linkedinurl}><span className="mdi mdi-linkedin-box"></span></a>
                        </div>
                    </div>
                <div className="info">
                    <h2>{this.props.name}</h2>
                    <p>{this.props.role}</p>
                    </div>
                </div>
            </div>
        );
    }
}


   
  
export default MemberCard;