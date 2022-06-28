import React from "react";
import Box from "@mui/material/Box";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import "./PlusTwoap.css";
import orientLogo from "../../../images/orient.jpg";
import trophy from "../../../images/trophy.png";

const PlusTwoap = () => {
  return (
    <>
      <Header />
      <div className="plusTwo-academic-page">
        <div className="plusTwoBox">
          <Box component="div" className="box1">
            <img src={orientLogo} alt="Orient Logo" className="orientLogo" />
            <p className="header-text">
              Get the best education for the best of you{" "}
            </p>
            <ul>
              <li>Academic excellence at it's Peak</li>
              <li>Get to learn from the very best teacher of the fied</li>
              <li>Physics,Chemistry and Biology lab facility</li>
              <li>
                Learn to undertake individual projects and to work as part of
                them
              </li>
              <li>Events and sports help every year for students</li>
            </ul>
            <button>Register now</button>
          </Box>
        </div>

        <div className="plusTwoTexts">
          <div className="plusTwoProgramText">
            <h3>+2 Program</h3>
            <p>
              Orient College is an advanced+2 institution affiliated to HSEB,
              offering +2 programs in Science, Management and Humanities in
              separate blocks for each stream. We have morning and day shifts
              run with adequate physical and academic facilities.
            </p>
          </div>

          <div className="plusTwoCourses">
            <h3>Courses</h3>
            <div className="faculty">
              <div className="science">
                <i class="fas fa-atom"></i>
                <h4>Science</h4>
              </div>
              <div className="management">
                <ion-icon name="medal"></ion-icon>
                <h4>Management</h4>
              </div>
              <div className="humanities">
                <ion-icon name="ios-people"></ion-icon>
                <h4>Humanities</h4>
              </div>
            </div>
          </div>

          <div className="requirements">
            <h4>Requirements</h4>
            <p>
              General requirement for +2 is SEE or equivalent. But Admission
              Committee reserves the decision of eligibility in all streams
              based upon secondary level scores/grades and performance in the
              entrance examination. Students from boards and universities out of
              Nepal are accepted only when the documents are convincing
              regarding recognition and equivalence.
            </p>
          </div>
          <div className="scheme-awards">
            <div className="scholarship-scheme">
              <h4>Scholarship Scheme</h4>
              <div className="scholarship-table">
                <h5 className="percentage">100%</h5>
                <p className="gpa">GPA 3.8 or above</p>
                <p className="seats">10 seats</p>
              </div>
              <hr />
              <div className="scholarship-table">
                <h5 className="percentage">75%</h5>
                <p className="gpa">GPA 3.60 to 3.75</p>
                <p className="seats">15 seats</p>
              </div>
              <hr />
              <div className="scholarship-table">
                <h5 className="percentage">50%</h5>
                <p className="gpa">GPA 3.4 to 3.55</p>
                <p className="seats">20 seats</p>
              </div>
              <hr />
              <div className="scholarship-table">
                <h5 className="percentage">25%</h5>
                <p className="gpa">GPA 3.20 to 3.35</p>
                <p className="seats">25 seats</p>
              </div>
              <hr />
              <div className="scholarship-table">
                <h5 className="percentage">10%</h5>
                <p className="gpa">GPA 3.00 to 3.15</p>
                <p className="seats">30 seats</p>
              </div>
            </div>
            <div className="excellence-award">
              <h4>Orient Excellence Award</h4>
              <img src={trophy} alt="Trophy" />
              <p>
                One outstanding student is awarded with Rs. 10,000/- cash, medal
                and certificate on the judgment of overall performance every
                year.
              </p>
            </div>
          </div>

          <div className="financial">
            <div className="financial-aid">
              <h4>Financial AID</h4>
              <p>
                Orient Relief Fund (ORF), under the initiation of Orient
                Teacher\'s Club, is the foundation of financial aid. The
                Admission Committee is fully entitled to propose the names of
                prospective students who could be benefitted by ORF.
              </p>
              <div className="financial-table">
                <h5 className="diff-able">Differently able</h5>
                <p className="discount1">50% off</p>
                <p className="seats1">2 seats</p>
              </div>
              <hr />
              <div className="financial-table">
                <h5 className="under-priv">Underpriviledge</h5>
                <p className="discount2">50% off</p>
                <p className="seats2">2 seats</p>
              </div>
              <hr />
              <div className="financial-table">
                <h5 className="remote-students">Students from Remote Districts</h5>
                <p className="discount3">50% off</p>
                <p className="seats3">2 seats</p>
              </div>
              <hr />
              <div className="financial-table">
                <h5 className="eca-background">Excellent ECA Background</h5>
                <p className="discount4">50% off</p>
                <p className="seats4">2 seats</p>
              </div>
            </div>
          </div>

          <div className="financial-aspects">

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlusTwoap;
