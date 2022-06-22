import React from "react";
import "./AlevelResult.css";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import university from "../../../images/university.png";

export const AlevelResult = () => {
  const search=()=>{
    console.log("This is your result");
  }
  return (
    <>
      <Header />
      <div className="Alevel-header">
        <img src={university} className="university" alt="University Of Campbridge" />
        <h4>A-Level</h4>
      </div>

      <form className="Alevel-result-search">
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
        <div className="Alevel-search-icon">
          <i className="fa fa-search" onClick={search}></i>
        </div>
      </form>
      <div className="Alevel-search-button">
        <button className="search-btn">Search</button>
      </div>
      <div className="right-side-wrap">
        <div className="Alevel-side-btn">
          <button className="download">Download</button>
          <button className="share">Share</button>
          <button className="contact">Contact Us</button>
        </div>
      </div>

      <Footer />
    </>
  );
};
