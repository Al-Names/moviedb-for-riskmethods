import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Welcom to MovieDB</h1>

        <div>
          <h2>
            <Link to="/home">Home</Link>
          </h2>
        </div>
        <div>
          <h2>
            <Link to="/">My Collection</Link>
          </h2>
        </div>
      </div>
    );
  }
}
