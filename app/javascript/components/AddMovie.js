import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Consumer } from "../context";
import uuid from "uuid";

class AddMovie extends Component {
  state = {
    title: "",
    rating: 0,
    description: "",
    errors: {}
  };
  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { title, rating, description } = this.state;

    //checks

    if (title === "") {
      this.setState({ errors: { title: "Movies must have a title" } });
      return;
    }

    if (description === "") {
      this.setState({ errors: { description: "What is the movie about?" } });
      return;
    }

    const newItem = {
      id: uuid(),
      title,
      rating,
      description
    };

    dispatch({ type: "ADD_ITEM", payload: newItem });

    this.setState({
      title: "",
      rating: 0,
      description: "",
      errors: {}
    });

    this.props.history.push("/collection");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { title, rating, description, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="dashboardWrapper">
              <h2>Add To Collection</h2>

              <div className="formWrapper">
                <div className="card formCard">
                  <div className="card-header">Adding to Collecion</div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                      <div className="card-title form-group">
                        <label htmlFor="title">Title</label>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          value={title}
                          onChange={this.onChange}
                          error={errors.title}
                        />
                      </div>
                      <div className="card-text form-group slidecontainer">
                        <label htmlFor="rating">
                          Rating: {rating} &#x270b;
                        </label>
                        <input
                          type="range"
                          name="rating"
                          min="0"
                          max="5"
                          step="0.1"
                          className="form-control slider"
                          value={rating}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="card-text form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                          type="text"
                          name="description"
                          className="form-control"
                          rows="4"
                          cols="50"
                          value={description}
                          onChange={this.onChange}
                          error={errors.description}
                        />
                      </div>
                      <input
                        type="submit"
                        value="Add"
                        className="btn btn-block"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/collection">
                  <button className="btn btn-primary">
                    Back To Collection
                  </button>
                </Link>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddMovie;
