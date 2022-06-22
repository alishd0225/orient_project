import React from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import orient from "../../images/orient.jpg";
import campbridgeLogo from "../../images/campbridgeLogo.jpg";
import "./Applied.css";
import { useNavigate } from "react-router-dom";

const Applied = () => {
    //Initializing the useNavigate
    const navigate=useNavigate();

  return (
    <div>
      <Header />
      <div className="bg-form">
        <div className="first-alignment">
          <img
            src={campbridgeLogo}
            alt="Campbridge Logo"
            className="campbridgeLogo"
          />{" "}
          <h2>University of Campbridge</h2>
          <span>&#124;</span>
          <img src={orient} alt="Orient" className="orient" />
        </div>
        <h2>Thank You For Applying</h2>
        <p>
          We will notify you after you have been approved and
          entrance examination schedule will also be given to you
        </p>
        <button onClick={()=>navigate("/")} className="okay-btn" type="submit">
          Okay
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Applied;
