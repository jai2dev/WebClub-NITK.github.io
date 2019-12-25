import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Members from "./components/members/member";
import Footer from "./components/footer";
import Events from "./components/Events/Event";
// import "./styles/nav.css";
import Nav from "./components/Nav/Nav"
class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav sticky="true" transp="true" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/events" component={Events} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
