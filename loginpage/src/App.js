import React, { Component } from "react";
import Router from "react-router-dom";
import "./App.css";

const response = {
  "cwc": [
      "cwc@gmail.com",
      "chennai-cwc1"
  ],
  "cci": [
      "cci@gmail.com",
      "chennai-cci1"
  ],
  "dcpu": [
      "dcpu@gmail.com",
      "chennai-dcpu1"
  ]
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      organisation: "",
      role: "",
      loginErrors: "",
      checkemail:""
    };
    

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  handleSubmit(event) {
      if((this.state.password===response[this.state.role][1]) && (this.state.email===response[this.state.role][0]) ){
      this.setState(state => ({
        checkemail: "Logged in"
      }));
    }
    else{
      this.setState(state => ({
        checkemail: "Invalid email and password"
      }));
    }
      event.preventDefault();

  }  
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  render() {
    
    return (
      <div>
      <div>
      <img
        src="logo.png"
        alt="Eudaemon"
        width="100"
        height="100"
        style={{float: "left"}}
      />
      <h1 style={{float: "left"}}>Eudaemon</h1>
      </div>
        <div className="container">
        <h1 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <lable>Email</lable>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />
          <lable>Password</lable>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />

          <lable>Organisation</lable>
          <br />
          <input
            type="text"
            name="organisation"
            placeholder="Organisation"
            value={this.state.organisation}
            onChange={this.handleChange}
          />
          <br />

          <lable>Role</lable>
          <br />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={this.state.role}
            onChange={this.handleChange}
            required
          />
          <br />

          <button type="submit">Login</button>
        </form>
        <p>{this.state.checkemail}</p>
        </div>
      </div>
    );
    }
  }
