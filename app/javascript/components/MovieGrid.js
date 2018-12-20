import React from "react";
const beginning = "https://image.tmdb.org/t/p/w185";

const MovieGrid = props => (
  <div
    className="card"
    style={{ width: "250px", borderRadius: "10px", padding: "10px" }}
  >
    <img
      className="card-img-top"
      alt={props.movie.poster_path}
      src={`${beginning}` + props.movie.poster_path}
    />
    <div className="card-body">
      <h4 className="card-title">{props.movie.title}</h4>
      <hr />
      <h4>{props.movie.vote_average} &#x270b;</h4>
      <p className="card-text">{props.movie.overview}</p>
    </div>
  </div>
);

export default MovieGrid;
