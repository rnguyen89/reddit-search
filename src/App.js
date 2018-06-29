import React, { Component } from 'react';
import {Container} from 'reactstrap';
import axios from 'axios';
import MainBody from './components/dumb/MainBody';
import Form from './components/dumb/Form';
import SearchResults from './components/dumb/SearchResults';
import Footer from './components/dumb/Footer';

import './App.css';

import LandingPage from '../src/components/dumb/LandingPage';
import Axios from 'axios';

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
        <LandingPage />
        <MainBody />
        <Form getRedditData={this.getRedditData} />
        <Container>
        <SearchResults
          redditResults={this.state.redditResults}
        />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
