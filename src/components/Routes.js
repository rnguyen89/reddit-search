import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from './About';
import NotFound from './NotFound';

export default () =>
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>