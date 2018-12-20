import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to="/">
              RiskMethods
            </NavLink>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
