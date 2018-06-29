import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
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

  // state = {
  //   title: undefined,
  //   created: undefined,
  //   url: undefined,
  //   preview: undefined,
  //   error: undefined
  // }

  state = {
    redditResults: []
  }

  // componentDidMount() {
  //   this.getRedditData();
  // }

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
        {this.state.redditResults.map((redditResult) => {
          return (
            <div key={redditResult.data.id}>
            <Card>
              <CardImg top width={redditResult.data.thumbnail_width
} src={redditResult.data.thumbnail} alt="Card image cap" />
              <CardBody>
                <CardTitle>{redditResult.data.title}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>click</Button>
              </CardBody>
            </Card>
          </div>
          )
        })}
        <SearchResults
          getRedditData={this.getRedditData}
          title={this.state.title}
          created={this.state.created}
          url={this.state.url}
          image={this.state.image}
          error={this.state.error}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
