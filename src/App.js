import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Members from "./components/members/member";
import Footer from "./components/footer";
import Events from "./components/Events/Event";
import Timeline from "./components/Timeline/timeline";
import "./styles/global.css";
// import Landing from "./components/landing";
class App extends React.Component {
  render() {
    return (
      <>
        <div id="wrapper" className="d-flex flex-column">
          <main className="flex-fill">
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/members" component={Members} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/timeline" component={Timeline} />
                {/* <Route exact path="/landing" component={Landing} /> */}
              </Switch>
            </Router>
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
