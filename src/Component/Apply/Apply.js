import React from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import orient from "../../images/orient.jpg";
import campbridgeLogo from "../../images/campbridgeLogo.jpg";
import "./Apply.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

export default function Apply() {
  //authentication Ids
  const SERVICE_ID = "service_j9s7qzn";
  const TEMPLATE_ID = "template_uzyb7zb";
  const USER_ID="gYO98vR-1fdAJdh_J";

  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [mobileNumber, setMobilenumber] = useState("");
  const [gname, setGname] = useState("");
  const [gcontact, setGcontact] = useState("");
  const [seePercentage, setSeePercentage] = useState("");

  //Initaialization for navigation to next page
  const navigate = useNavigate();

  // States for checking the errors
  const [error, setError] = useState(false);

  // Handling the name
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Handling the email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the Address
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  // Handling the Phone Number
  const handlePhoneNumber = (e) => {
    setPhonenumber(e.target.value);
  };

  // Handling the Mobile Number
  const handleMobileNumber = (e) => {
    setMobilenumber(e.target.value);
  };
  // Handling the Guardians Name
  const handleGuardianName = (e) => {
    setGname(e.target.value);
  };
  // Handling the Guardian Contact
  const handleGuardianContact = (e) => {
    setGcontact(e.target.value);
  };
  // Handling the SEE Percentage
  const handleSeePercentage = (e) => {
    setSeePercentage(e.target.value);
  };
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phoneNumber === "" ||
      mobileNumber === "" ||
      address === "" ||
      gname === "" ||
      gcontact === "" ||
      seePercentage === ""
    ) {
      setError(true);
    } else {
      //sending mail to email using emailjs
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target,USER_ID).then((result) => {
        console.log(result.text);
      },
      (error)=>{
        console.log(error.text);
      });
      e.target.reset();
      navigate("/apply/applied");
      setError(false);
    }
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h3>Please enter all the fields</h3>
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className="form">
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

        {/* Calling to the method */}
        <div className="messages">{errorMessage()}</div>

        <form onSubmit={handleSubmit}>
          {/* Labels and inputs for form data */}
          <div className="leftSide">
            <label className="label">Full Name</label>
            <input
              onChange={handleName}
              className="input"
              name="fullName"
              value={name}
              type="text"
              required
            />

            <label className="label">Email</label>
            <input
              onChange={handleEmail}
              className="input"
              name="email"
              value={email}
              type="email"
              required
            />

            <label className="label">Phone Number</label>
            <input
              onChange={handlePhoneNumber}
              className="input"
              name="phoneNumber"
              value={phoneNumber}
              type="string"
              required
            />

            <label className="label">Mobile Number</label>
            <input
              onChange={handleMobileNumber}
              className="input"
              name="mobileNumber"
              value={mobileNumber}
              type="string"
              required
            />
          </div>
          <div className="rightSide">
            <label className="label">Address</label>
            <input
              onChange={handleAddress}
              className="input"
              name="address"
              value={address}
              type="text"
              required
            />

            <label className="label">Guardian's Name</label>
            <input
              onChange={handleGuardianName}
              className="input"
              name="guardianName"
              value={gname}
              type="text"
              required
            />
            <label className="label">Guardian's Contact</label>
            <input
              onChange={handleGuardianContact}
              className="input"
              name="guardianContact"
              value={gcontact}
              type="string"
              required
            />
            <label className="label">SEE Percentage</label>
            <input
              onChange={handleSeePercentage}
              className="input"
              name="seePercentage"
              value={seePercentage}
              type="string"
              required
            />
          </div>

          <button className="apply-btn" type="submit">
            Apply
          </button>
        </form>
        <p>Just a bit of information to verify you</p>
      </div>

      <Footer />
    </>
  );
}
