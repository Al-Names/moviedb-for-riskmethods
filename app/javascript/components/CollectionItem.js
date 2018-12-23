import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Consumer } from "../context";

import axios from "axios";

class CollectionItem extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  render() {
    const { id, title, rating, description } = this.props.collectionItem;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div
              className="card"
              style={{
                width: "250px",
                borderRadius: "10px",
                padding: "10px",
                color: "black"
              }}
            >
              <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <i
                  className="fas fa-times fa-2x"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`collection/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      marginRight: "1rem",
                      float: "right",
                      cursor: "pointer"
                    }}
                  />
                </Link>
                <hr />
                <h4>{rating} &#x270b;</h4>
                <p className="card-text">{description}</p>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
CollectionItem.propTypes = {
  collectionItem: PropTypes.object.isRequired
};
export default CollectionItem;
