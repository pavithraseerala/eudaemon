import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



export default class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      value1:"",
      message:[]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value)
    event.preventDefault();
  }
  fetchMessage = () =>{
    this.setState(state => ({
      message:["This is the message1","This is message2"]
    }));
  }
  

  render(){

    let mesList=this.state.message.map(mess1 => (<p>{mess1}</p>));


    return(
      <div style={{textAlign:"center"}}>
        <h1>Messaging System</h1>
        <button onClick={this.fetchMessage}>Fetch Message</button>
        <br />
        {mesList}
        <br />
        <form onSubmit={this.handleSubmit}>
          <textarea rows="10" cols="50" placeholder="Enter text here" value={this.state.value1} onChange={this.handleChange} required/>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
    
}