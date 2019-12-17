import React, { useState } from 'react';
import '../styles/home.css';

class Home extends React.Component {
    constructor(){
      super();
      this.state={
  
      }
    }
    render(){
      return (
        <div className="row main-image center-flex">
            <div className="col l6">
                 <h1 className="main-title ">Playing with </h1>
            </div>
            <div className="col l6">
                <img className="bg-image" width="700" src={"../assets/images/bg-002.png"} />
            </div>
        </div>
      );
    }  
  }
    
  
  export default Home;
  