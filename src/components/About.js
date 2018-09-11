import React from "react";
import { Jumbotron } from "react-bootstrap";

import "./About.css";

const About = () => (
  <div>
    <Jumbotron>
      <h1>About Page</h1>
      <p>
        A simple Reddit search app inspired by Google. Enter any keywords and
        select the filters to your liking and see Reddit threads appear below.
      </p>
      <p>The app is created using React and Bootstrap.</p>
    </Jumbotron>
  </div>
);

export default About;
