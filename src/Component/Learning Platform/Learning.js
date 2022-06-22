import React from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import orient from "../../images/orient.jpg";
import "./Learning.css";
import { useNavigate } from "react-router-dom";

const Learning = () => {
  //initializing use navigate
  const navigate = useNavigate();

  //routing to next pages
  const libraryPage = () => {
    navigate("/learning/library");
  };

  const pastPaperPage=()=>{
    navigate("/learning/pastpaper");
  }
  
  return (
    <div className="learning">
      <Header />
      <div className="image-align">
        <img src={orient} alt="Orient" className="orient" />
      </div>
      <div className="learning-choice-headline">
        <h1>Choose your Learning Platform</h1>
      </div>
      <div className="learning-choices">
        <button className="past-paper" onClick={pastPaperPage}>
          <i class="fas fa-paperclip" aria-hidden="true"></i> Past Papers
        </button>
        <button className="library-books" onClick={libraryPage}>
          <i class="fas fa-book"></i> Library Books
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Learning;
