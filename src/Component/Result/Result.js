import React from 'react'
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import "./Result.css";
import { useNavigate } from "react-router-dom";


const Result = () => {
    //initializing use navigate
  const navigate = useNavigate();

  //routing to next pages
  const PlusTwoResultPage = () => {
    navigate("/result/+2result");
  };

  const AlevelResultPage=()=>{
    navigate("/result/Alevelresult");
  }

  return (
        <div className="result">
      <Header />
      <div className="result-choice-headline">
        <h1>Choose your Result Platform</h1>
      </div>
      <div className="result-choices">
        <button className="plustwo-result" onClick={PlusTwoResultPage}>
           +2 Result
        </button>
        <button className="Alevel-result" onClick={AlevelResultPage}>
          A-Level Result
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Result