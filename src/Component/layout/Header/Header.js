import React, { Component, useState } from "react";
import "./Header.css";
import orient from "./orient.png";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { faRupiahSign } from "@fortawesome/free-solid-svg-icons";

export default function () {
  const navigation = useNavigate(); // extract navigation prop here

  return <Header navigation={navigation} />; //pass to your component.
}

class Header extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  closeMobileMenu = () => {
    faRupiahSign.setState({ clicked: this.state.false });
  };
  render() {
    return (
      <nav className="NavbarItem">
        <img src={orient} alt="OrientClg" className="orient"></img>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times " : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={this.closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/apply"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              Academic Program
            </Link>
          </li>
          <li className="nav-item"></li>
          <li>
            <Link
              to="/learning"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              E-learning
            </Link>
          </li>
          <li>
            <Link
              to="/result"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              Result
            </Link>
          </li>
          <li>
            <Link
              to="/AboutOrient"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              About Orient
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className="nav-links-mobile"
              onClick={this.closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button
          onClick={() => {
            this.props.navigation("./signin");
          }}
        >
          Sign Up
        </Button>
      </nav>
    );
  }
}
