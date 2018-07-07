import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import Center from 'react-center';
import { Jumbotron } from 'react-bootstrap';

import './Form.css'

const Form = props => (
  <Jumbotron>
  <form onSubmit={props.getRedditData}>
    <FormGroup>
      <FormControl
        type="text"
        name="searchTerm"
        placeholder="enter anything..."
        required
      /><br />

      <Center>
      <label>
      <span className="inputTitle">Limit</span>
      <select
        name="searchLimit">
        <option value="5">5</option>
        <option value="10">10</option>
        <option defaultValue value="15">15</option>
        <option value="25">25</option>
      </select>
      </label>


      <label>
      <span className="inputTitle">Sort by</span>
      <select
        name="sortBy">
        <option value="relevance">relevance</option>
        <option value="hot">hot</option>
        <option defaultValue value="top">top</option>
        <option value="new">new</option>
        <option value="comments">comments</option>
        
      </select>
      </label>
      </Center>
      <Center>
        <button className="btn btn-primary">Search</button>
      </Center>
    </FormGroup>
  </form>
  </Jumbotron>
)

export default Form;
