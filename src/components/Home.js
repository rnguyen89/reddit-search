import { Jumbotron } from "react-bootstrap";
import Form from "./Form";
import SearchResults from "./SearchResults";

import "./Home.css";

import React, { Component } from "react";

export default class Home extends Component {
  state = {
    redditResults: []
  };

  getRedditData = async e => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    const sortBy = e.target.elements.sortBy.value;
    const searchLimit = e.target.elements.searchLimit.value;

    const api_call = await fetch(
      `https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`
    );

    const results = await api_call.json();
    this.setState({
      redditResults: results.data.children
    });
    console.log(this.state.redditResults);
  };
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="center">
            <span className="border-bottom">Reddit Search</span>
          </h1>
          <Form getRedditData={this.getRedditData} />
          <SearchResults redditResults={this.state.redditResults} />
        </Jumbotron>
      </div>
    );
  }
}
