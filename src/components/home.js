import React, { useState } from 'react';
import '../styles/home.css';
import imageUrl from '../assets/images/bg-002.png';
// import WEClogo from '../assets/images/webclub-logo-orange.png';
import Footer from './footer';
import Member from './member';

class Home extends React.Component {
    constructor(props){
      super(props);
      this.state={
  
      }
    }
    render(){
      return (
        <div>
            <div className="row main-image center-flex">
                <div className="col l6">
                    <h1 className="main-title ">Playing with </h1>
                </div>
                <div className="col l6">
                    <img className="bg-image" width="700" src={imageUrl} />
                </div>
            </div>
            <div >
              {/* <Member  name="John Doe" role="Club Member" image={WEClogo} website="NA" githuburl="#" linkedinurl="#"/>  */}
            </div>
            <Footer />
        </div>
      );
    }  
  }
    
  
  export default Home;
  