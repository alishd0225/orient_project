import React from 'react'
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import "./AcademicProgram.css";
import { useNavigate } from "react-router-dom";


const AcademicProgram = () => {
    //initializing use navigate
  const navigate = useNavigate();

  //routing to next pages
  const PlusTwoAcademicProgramPage = () => {
    navigate("/academicProgram/+2program");
  };

  const AlevelAcademicProgramPage=()=>{
    navigate("/academicProgram/Alevelprogram");
  }
  const BBSAcademicProgramPage=()=>{
    navigate("/academicProgram/BBSporogram");
  } 
  const BABWSAcademicProgramPage=()=>{
    navigate("/academicProgram/BABWSprogram");
  }

  return (
        <div className="academic-program">
      <Header />
      <div className="academicProgram-choice-headline">
        <h1>Choose your Academic Platform</h1>
      </div>
      <div className="academicProgram-choices">
        <button className="plustwo-academicProgram" onClick={PlusTwoAcademicProgramPage}>
           +2 Program
        </button>
        <button className="Alevel-academicProgram" onClick={AlevelAcademicProgramPage}>
          A-Level Program
        </button>
        <button className="BBS-academicProgram" onClick={BBSAcademicProgramPage}>
          BBS Program
        </button>
        <button className="BABWS-academicProgram" onClick={BABWSAcademicProgramPage}>
          BA/BWS Program
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default AcademicProgram;