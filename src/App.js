import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Members from "./components/members/member";
import Footer from "./components/footer";
import Events from "./components/Events/Event";
import Timeline from './components/Timeline/timeline';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/timeline" component={Timeline} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
