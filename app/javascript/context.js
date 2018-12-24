import React, { Component } from "react";
import CollectionItem from "./components/CollectionItem";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      return {
        ...state,
        collectionItems: state.collectionItems.filter(
          collectionItem => collectionItem.id !== action.payload
        )
      };
    case "ADD_ITEM":
      return {
        ...state,
        collectionItems: [action.payload, ...state.collectionItems]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    collectionItems: [
      {
        id: 1,
        title: "Title of movie",
        rating: 4,
        description: "Description of movie"
      },
      {
        id: 2,
        title: "High School Musical",
        rating: 4,
        description: "horror"
      },
      {
        id: 3,
        title: "Camp Rock",
        rating: 4,
        description: "The better one tbh."
      }
    ],

    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
