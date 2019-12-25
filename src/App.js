import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Members from "./components/members/member";
import Footer from "./components/footer";
import Events from "./components/Events/Event";
import "./styles/nav.css";

class App extends React.Component {
  render() {
    return (
      <div id="perspective" className="perspective effect-airbnb">
        <div className="mnav-container">
          <div className="mnav-wrapper">
            <Router>
              <div className="App">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/members" component={Members} />
                  <Route exact path="/events" component={Events} />
                </Switch>
                <Footer />
              </div>
            </Router>
          </div>
        </div>
        <nav className="outer-nav left vertical">
          <a href="#" className="icon-home">
            Home
          </a>
          <a href="#" className="icon-news">
            Events
          </a>
          <a href="#" className="icon-image">
            Team
          </a>
          <a href="#" className="icon-upload">
            Blog
          </a>
          {/* <a href="#" className="icon-star">
        Favorites
      </a>
      <a href="#" className="icon-mail">
        Messages
      </a>
      <a href="#" className="icon-lock">
        Security
      </a> */}
        </nav>
      </div>
    );
  }
}

export default App;
