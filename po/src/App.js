import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import NewChild from './NewChild';
import ChildEdit from './ChildEdit';
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
          <Route path='/newchild' component={NewChild} exact />
          <Route path='/childedit' component={ChildEdit} exact />
        </Switch>

      </BrowserRouter>
      </div>
    );
    }
}
