import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center" style={{ color: "white" }}>
          Welcome to MovieDB
        </h1>

        <div className="entry">
          <Link to="/home">
            <div className="choice">
              <h2>Database</h2>
            </div>
          </Link>
          <Link to="/dashboard">
            <div className="choice">
              <h2>My Collection</h2>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
