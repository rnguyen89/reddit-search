import React from "react";
import "./NotFound.css";

import { Jumbotron } from 'react-bootstrap';
import Center from 'react-center';

export default () =>
  <div className="NotFound">
    <Jumbotron>
      <Center>
        <h1>Sorry, page not found!</h1>
      </Center>
    </Jumbotron>
  </div>;