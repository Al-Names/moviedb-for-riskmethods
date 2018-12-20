import React, { Component } from "react";

import MovieGrid from "./MovieGrid";

const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
const API_KEY = "43c6ae78a7b5799e0a7efaee367f829a";
const language = "&language=en-US";
const query = "&query=";

class Home extends Component {
  state = {
    movies: [],
    total_pages: null,
    page_num: 1,
    query: "ant"
  };

  fetchMovies(search) {
    fetch(
      URL +
        `${API_KEY}` +
        language +
        query +
        search +
        "&page=" +
        this.state.page_num
    )
      .then(res => res.json())
      .then(json =>
        this.setState({ movies: json.results, total_pages: json.total_pages })
      );
  }

  filterSearch = event => {
    let term = event.target.value;
    this.setState(
      {
        query: term
      },
      () => this.fetchMovies(this.state.query)
    );
  };

  nextPage = () => {
    if (this.state.movies && this.state.page_num < this.state.total_pages) {
      this.setState(
        {
          page_num: (this.state.page_num += 1)
        },
        () => this.fetchMovies(this.state.query)
      );
    }
  };

  previousPage = () => {
    if (this.state.movies && this.state.page_num !== 1) {
      this.setState(
        {
          page_num: (this.state.page_num -= 1)
        },
        () => this.fetchMovies(this.state.query)
      );
    }
  };

  render() {
    return (
      <div>
        <div className="form-group">
          <input onChange={this.filterSearch} className="form-control" />
        </div>
        <div className="screen">
          <div className="card-columns">
            {this.state.movies
              ? this.state.movies.map(movie => (
                  <MovieGrid key={movie.id} movie={movie} />
                ))
              : null}
          </div>
        </div>
        <div className="buttonBag">
          <button
            onClick={this.previousPage}
            className="btn btn-primary previousButton"
          >
            Previous Page
          </button>
          <button
            onClick={this.nextPage}
            className="btn btn-primary nextButton"
          >
            Next Page
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
