import React from "react";
import "./PlusTwoResult.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import orient from "../../../images/orient.jpg";

const PlusTwoReslt = () => {
  return (
    <>
      <Header />
      <div className="plustwo-header">
        <img src={orient} className="orient" alt="Orient" />
        <h4>+2 Result</h4>
      </div>

      <form className="plustwo-result-search">
        <div className="left-form-name">
          <input
            className="input"
            name="Name"
            placeholder="Enter Your Name"
            type="text"
            required
          />
        </div>
        <div className="middle-form-faculty">
          <input
            className="input"
            name="faculty"
            type="text"
            placeholder="Enter Your Faculty"
            required
          />
        </div>
        <div className="right-form-studentId">
          <input
            className="input"
            name="StudentId"
            placeholder="Your Student Id"
            type="string"
            required
          />
        </div>
        <div className="plustwo-search-icon">
          <i className="fa fa-search"></i>
        </div>
      </form>
      <div className="plustwo-search-button">
        <button className="search-btn">Search</button>
      </div>
      <div className="right-side-wrap">
        <div className="plustwo-side-btn">
          <button className="download">Download</button>
          <button className="share">Share</button>
          <button className="contact">Contact Us</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PlusTwoReslt;
