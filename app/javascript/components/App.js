import React, { Component } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { Provider } from "../context";
import "../styles/risk.css";

import NavBar from "../components/NavBar";
// import Landing from "../components/Landing";
import Home from "../components/Home";
import Collection from "./Collection";
import AddMovie from "./AddMovie";
import PageNotFound from "./PageNotFound";
// import LogIn from "./LogIn";
const isAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
class LogIn extends React.Component {
  state = {
    redirectToReferer: false
  };
  login = () => {
    isAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferer: true
      }));
    });
  };

  render() {
    const { redirectToReferer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    if (redirectToReferer === true) {
      return <Redirect to={from} />;
    }
    return (
      <div className="dashboardWrapper">
        <h3>Log In</h3>
        <p>You must be logged in to view collection...</p>
        <button onClick={this.login} className="btn btn-success">
          Log In
        </button>
      </div>
    );
  }
}
const Private = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />

              <Private exact path="/collection" component={Collection} />
              <Private exact path="/collection/add" component={AddMovie} />
              <Route exact path="/login" component={LogIn} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
