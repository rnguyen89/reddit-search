import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Header.css'


const Header = () => (
  <div>
    <Jumbotron>
      <h1 className="center">Reddit Search</h1>
      <p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, distinctio.</p>
    </Jumbotron>
  </div>
)

export default Header;