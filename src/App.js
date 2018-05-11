import React, { Component } from 'react';
import MainBody from './components/dumb/MainBody';
import Form from './components/dumb/Form';
import SearchResults from './components/dumb/SearchResults';
import Footer from './components/dumb/Footer';

import './App.css';

import LandingPage from '../src/components/dumb/LandingPage';

const API_KEY = 'k7D9kBkFB-oSQlLXIrAdzNzuWI8';


class App extends Component {

  state = {
    title: undefined,
    created: undefined,
    url: undefined,
    preview: undefined,
    error: undefined
  }

  getRedditData = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value
    const sortBy = e.target.elements.sortBy.value
    const searchLimit = e.target.elements.searchLimit.value


    const api_call = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`);
    const data = await api_call.json();

    if (searchTerm && sortBy && searchLimit) {
      console.log(data);

      this.setState({
        title: data.data.children[0].data.title,
        created: data.data.children[0].data.created,
        url: data.data.children[0].data.url,
        image: data.data.children[0].data.preview.images[0].source.url,
        error: ''
      });
    } else {
      this.setState({
        title: undefined,
        created: undefined,
        url: undefined,
        image: undefined,
        error: 'Enter your search term'
      })
    }
  }


  render() {
    return (
      <div>
        <LandingPage />
        <MainBody />
        <Form getRedditData={this.getRedditData} />
        <SearchResults 
          title={ this.state.title }
          created={ this.state.created }
          url={ this.state.url }
          image={ this.state.image }
          error={ this.state.error }          
        />
        <Footer />
      </div>
    );
  }
}

export default App;
