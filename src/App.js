import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Members from "./components/members/member";
import Footer from "./components/footer";
import Events from "./components/Events/Event";
import "./styles/nav.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="perspective" className="perspective effect-airbnb">
          <div className="mnav-container">
            <div className="mnav-wrapper">
              <div className="App">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/members" component={Members} />
                  <Route exact path="/events" component={Events} />
                </Switch>
                <Footer />
              </div>
            </div>
          </div>
          <nav className="outer-nav left vertical">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/events">
                <li>Events</li>
              </Link>
              <Link to="/members">
                <li>Team</li>
              </Link>
              <Link to="/">
                <li>Blog</li>
              </Link>
            </ul>
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;
