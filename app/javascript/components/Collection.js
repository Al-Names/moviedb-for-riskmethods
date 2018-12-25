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
              <div>
                <Link to="/collection/add">
                  <button className="btn btn-primary">Add To Collection</button>
                </Link>
              </div>
              <h2>My Collection</h2>
              <div>
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
