import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Center from 'react-center';
import './Form.css'

const Form = props => (
  <form onSubmit={props.getRedditData}>
    <FormGroup>
      <FormControl
        type="text"
        name="searchTerm"
        placeholder="enter anything..."
      /><br />

      <Center>
      <label>limit</label>
      <select
        name="searchLimit">
        <option value="5">5</option>
        <option value="10">10</option>
        <option selected value="15">15</option>
        <option value="25">25</option>
      </select>


      <label>Sort by</label>
      <select
        name="sortBy">
        <option value="relevance">relevance</option>
        <option value="hot">hot</option>
        <option selected value="top">top</option>
        <option value="new">new</option>
        <option value="comments">comments</option>
        
      </select>
      </Center>
      <Center>
        <button className="btn btn-primary">Search</button>
      </Center>
    </FormGroup>
  </form>
)

export default Form;
