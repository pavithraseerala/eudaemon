import React, {Component} from 'react';

export default class Intro extends Component{
    render(){
        return(
        <div>
        <img
          src="logo.png"
          alt="Eudaemon"
          width="100"
          height="100"
          style={{float: "left"}}
        />
        <h1 style={{float: "left"}}>Probation Officer</h1>
        </div>
        )
    }
}