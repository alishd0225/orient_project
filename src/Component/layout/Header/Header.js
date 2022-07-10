import React, { Component, useState } from "react";
import "./Header.css";
import orient from "./orient.png";
import { Link, useNavigate } from "react-router-dom";
import { faRupiahSign } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";
import plant from "./plant.jpg";
import loggedinImage from "./loggedIn-image.jpg";

export default function () {
  const navigation = useNavigate(); // extract navigation prop here
  const { currentUser, logout } = useAuth();

  return (
    <Header navigation={navigation} logout={logout} currentUser={currentUser} />
  ); //pass to your component.
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
              to="/academicProgram/"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              Academic Program
            </Link>
          </li>
          <li className="nav-item"></li>
          <li>
            <Link
              to="/learning/"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              E-learning
            </Link>
          </li>
          <li>
            <Link
              to="/result/"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              Result
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus/"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            {!this.props.currentUser && (
              <Link to="/signup" className="nav-links">
                <div className="profile">
                  <img
                    src={plant}
                    alt="Profile Picture"
                    className="profile-image"
                  />
                </div>
              </Link>
            )}
          </li>
          {this.props.currentUser && (
            <li className="nav-item">
              <div className="nav-links">
                <div className="logIn">
                  <img
                    src={loggedinImage}
                    alt="Profile Picture"
                    className="loggedIn-image"
                    onClick={async (e) => {
                      e.preventDefault();
                      this.props.navigation("/profile");
                    }}
                  />
                </div>
              </div>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}
