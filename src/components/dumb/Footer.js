import React from 'react';
import './Footer.css';
import { Jumbotron } from 'react-bootstrap';
import Center from 'react-center';

const Footer = () => (
  <Center>
    <footer>
      <div className="center-align">
        <ul className="social-btn">
          <li>
            <a href="mailto:rnguyen89@gmail.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-envelope fa-3x"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/rnguyen89/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github fa-3x"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ricky-nguyen-72218898/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square fa-3x"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </Center>
)

export default Footer;