import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import Routes from "./Routes";
import Form from './Form';
import SearchResults from './SearchResults';
import Footer from './Footer';

import './App.css';



const API_KEY = 'k7D9kBkFB-oSQlLXIrAdzNzuWI8';


class App extends Component {

  state = {
    redditResults: []
  }

  getRedditData = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    const sortBy = e.target.elements.sortBy.value;
    const searchLimit = e.target.elements.searchLimit.value;

    const api_call = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`);

    const results = await api_call.json();
    this.setState({
      redditResults: results.data.children
    });
    console.log(this.state.redditResults);

  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">Home</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/about">
                About
              </NavItem>
              <NavItem eventKey={2} href="thread">
                Thread
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
        <Form getRedditData={this.getRedditData} />
        <SearchResults
          redditResults={this.state.redditResults}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

