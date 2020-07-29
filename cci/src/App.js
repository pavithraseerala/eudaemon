import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import ChildDetails from './Child';
import Navigation from './Nav';
import Intro from './Intro'

export default class App extends Component{
  render(){
    return (
      <div>
      <BrowserRouter>
      <Intro />
      <Navigation />
        <Switch>
          <Route path='/' component ={Home} exact />
          <Route path='/childdetails' component={ChildDetails} exact />
        </Switch>

      </BrowserRouter>
      </div>
    );
    }
}


