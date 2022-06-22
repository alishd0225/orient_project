import React, { useState } from "react";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Search from "../../layout/Search/Search";
import "./Library.css";

const Library = () => {

    return (
    <div className="library-items">
      <Header />
      <div className="library-icon-text">
        <i className="fas fa-book"></i>
        <h4>Library books</h4>
      </div>
      <Search />
      <Footer />
    </div>
  );
};

export default Library;
