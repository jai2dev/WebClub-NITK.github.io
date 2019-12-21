import React, { useState } from 'react';
import '../styles/home.css';
import imageUrl from '../assets/images/bg-002.png';


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
            
        </div>
      );
    }  
  }
    
  
  export default Home;
  