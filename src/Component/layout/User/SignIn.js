import React, { Component, useState } from "react";
import "./SignIn.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import fire from "../../fire";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
          }).catch((error)=>{
            console.log(error);
          });
  };

  render() {
    return (
      <div>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit} className="signin-form">
            <h5 className="signin-text">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="signin-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
