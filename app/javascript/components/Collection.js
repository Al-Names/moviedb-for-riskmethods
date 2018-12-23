import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../context";

import CollectionItem from "./CollectionItem";

class Collection extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { collectionItems } = value;
          return (
            <div className="dashboardWrapper">
              <h2>dashboard here</h2>
              <div>
                <Link to="/collection/add">
                  <button className="btn btn-primary">Add To Collection</button>
                </Link>
              </div>
              <div>
                <h3>Collection Here</h3>
                <div className="card-columns">
                  {collectionItems.map(collectionItem => (
                    <CollectionItem
                      key={collectionItem.id}
                      collectionItem={collectionItem}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Collection;
