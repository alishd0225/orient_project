import React, { Component } from "react";
import "./SignUp.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class SignUp extends Component {
  state = { userName: "", email: "", password: "" };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit} className="signin-form">
          <h5 className="signin-text">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="userName">UserName</label>
            <input type="text" id="userName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="signup-btn">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
