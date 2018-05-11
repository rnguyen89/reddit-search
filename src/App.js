import React, { Component } from 'react';
import MainBody from './components/dumb/MainBody';
import Form from './components/dumb/Form';
import Footer from './components/dumb/Footer';

import './App.css';

import LandingPage from '../src/components/dumb/LandingPage';

const API_KEY = 'k7D9kBkFB-oSQlLXIrAdzNzuWI8';


class App extends Component {

  state = {
    searchTerm: '',
    sortBy: 'relevance',
    searchLimit: 25
  }

  getRedditData = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value
    const sortBy = e.target.elements.sortBy.value
    const searchLimit = e.target.elements.searchLimit.value

    const api_call = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`);
    const data = await api_call.json();

    console.log(data);
  }

  render() {
    return (
      <div>
        <LandingPage />
        <MainBody />
        <Form getRedditData={this.getRedditData} />
        <Footer />
      </div>
    );
  }
}

export default App;
