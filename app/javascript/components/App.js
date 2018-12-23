import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "../context";
import "../styles/risk.css";

import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import Home from "../components/Home";
import Collection from "./Collection";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import PageNotFound from "./PageNotFound";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/collection" component={Collection} />
              <Route exact path="/collection/add" component={AddMovie} />
              <Route exact path="/collection/edit/:id" component={EditMovie} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
