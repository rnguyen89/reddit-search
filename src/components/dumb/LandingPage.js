import React from 'react';
import Header from './Header';
import MainBody from './MainBody';
import Form from './Form';

import Footer from './Footer';
import './LandingPage.css';


const LandingPage = () => (
  <div className="main-bg">
    <Header />
    <MainBody />
    <Form />
    <Footer />
  </div>
)

export default LandingPage;