import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/home';
import Member from './components/members/member';
import Footer from './components/footer';

class App extends React.Component {
  
  render(){
    return (
      <Router>
        <div className = "App">
          <Route exact path='/' component={Home} />
          <Route exact path='/members' component={Member} />
          <Footer />
        </div>
      </Router>
    );
  }  
}
  

export default App;