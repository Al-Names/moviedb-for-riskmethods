import React, { Component } from "react";

class MovieGrid extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ width: "250px" }}
        key={this.props.movie.id}
      >
        <img
          className="card-img-top"
          src={this.props.movie.poster_src}
          alt={this.props.movie.title}
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.movie.title}</h4>
          <p className="card-text">{this.props.movie.overview}</p>
        </div>
      </div>
    );
  }
}
export default MovieGrid;
