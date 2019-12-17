import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return (
      <Home />
    );
  }  
}
  

export default App;
