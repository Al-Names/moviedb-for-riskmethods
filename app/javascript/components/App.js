import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/risk.css";

import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import Home from "../components/Home";
import Dashboard from "./Dashboard";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
