import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Center from 'react-center';
import './Form.css'

const Form = props => (
  <form onSubmit={ props.getWeather }>
  <FormGroup>
    <FormControl 
      type="text" 
      name="searchTerm" 
      placeholder="enter anything..." 
    /><br/>
    <Center>
      <button className="btn btn-primary">Search</button>
    </Center>
  </FormGroup>
  </form>
)

export default Form;