import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
// import Center from "react-center";
// import { Jumbotron } from 'react-bootstrap';

import "./Form.css";

const Form = props => (
  <form onSubmit={props.getRedditData}>
    <FormGroup>
      <FormControl
        type="text"
        name="searchTerm"
        placeholder="enter anything..."
        required
      />
      <br />

      {/* <Center> */}
      <label>
        <span className="inputTitle">Limit</span>
        <select name="searchLimit" defaultValue="15">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
      </label>

      <label>
        <span className="inputTitle">Sort by</span>
        <select name="sortBy" defaultValue="hot">
          <option value="relevance">relevance</option>
          <option value="hot">hot</option>
          <option value="top">top</option>
          <option value="new">new</option>
          <option value="comments">comments</option>
        </select>
      </label>
      {/* </Center> */}
      {/* <Center> */}
      <button className="btn">Search</button>
      {/* </Center> */}
    </FormGroup>
  </form>
);

export default Form;
