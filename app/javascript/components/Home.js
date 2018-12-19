import React, { Component } from "react";
import $ from "jquery";

import MovieGrid from "./MovieGrid";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch("ant man");
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb");
    const urlString =
      "https://api.themoviedb.org/3/search/movie?api_key=43c6ae78a7b5799e0a7efaee367f829a&query=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("Fetched data successfully");
        // console.log(searchResults)
        const results = searchResults.results;
        // console.log(results[0])

        var movieRows = [];

        results.forEach(movie => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          // console.log(movie.poster_path)
          const movieRow = <MovieGrid key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }
  render() {
    return (
      <div>
        <h1>Movie Database goes here</h1>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            onChange={this.searchChangeHandler.bind(this)}
            placeholder="Search..."
          />
        </div>
        <div>
          <div>
            <div className="card-columns">{this.state.rows}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
