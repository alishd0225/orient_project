import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="largeFooter">
        <div className="leftFooter">
          <h3>Academic Program</h3>
          <a>+2 Program</a>
          <a>BBS Program</a>
          <a>BA/BWS Program</a>
          <a>A-Level</a>
        </div>
        <div className="midFooter">
          <h3>Information</h3>
          <a>Activities</a>
          <a>Facilities</a>
          <a>Students Voice</a>
        </div>
        <div className="rightFooter">
          <h3>Contact Us</h3>
          <p>Basundhara, Kathmandu Nepal</p>
          <h3>Contact Info</h3>
          <p>(977)1-4362218, 4362504, 4354056</p>
          <h3>Email</h3>
          <a>info@orientcollege.com</a>
        </div>
      </div>
      <div className="smallFooter">
        <p>Copyright &copy; Orient College. All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
