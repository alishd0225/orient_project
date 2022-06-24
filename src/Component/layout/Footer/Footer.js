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
          <p>
            <a
              href="https://www.google.com/maps/place/Orient+College+Basundhara,+Kathmandu/@27.7412606,85.3310473,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb193763412931:0x25a6aab80727c274!8m2!3d27.7412606!4d85.3310473"
              target="_blank"
            >
              Basundhara, Kathmandu Nepal
            </a>
          </p>
          <h3>Contact Info</h3>
          <p>(977)1-4362218, 4362504, 4354056</p>
          <h3>Email</h3>
          <p><a href="mailto:info@orientcollege.com" target="_blank">info@orientcollege.com</a></p>
        </div>
      </div>
      <div className="smallFooter">
        <p>Copyright &copy; Orient College. All right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
