import React from "react";
import Box from "@mui/material/Box";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import "./PlusTwoap.css";
import orientLogo from "../../../images/orient.jpg";
import trophy from "../../../images/trophy.png";
import { useNavigate } from "react-router-dom";

const PlusTwoap = () => {
  const navigate=useNavigate();
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
              <li>Physics, Chemistry and Biology lab facility</li>
              <li>
                Learn to undertake individual projects and to work as part of
                them
              </li>
              <li>Events and sports help every year for students</li>
            </ul>

            <button onClick={()=>{
              navigate("/apply");
            }}>Register now</button>

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
                <table>
                  <thead>
                    <tr>
                      <td className="title">Differently able</td>
                      <td className="discount">50% off</td>
                      <td className="seats">2 seats</td>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <td className="title">Underprivileged</td>
                      <td className="discount">50% off</td>
                      <td className="seats">2 seats</td>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <td className="title">Students from Remote Districts</td>
                      <td className="discount">50% off</td>
                      <td className="seats">2 seats</td>
                    </tr>
                  </thead>
                  <tr>
                    <td className="title">Excellent ECA Background</td>
                    <td className="discount">50% off</td>
                    <td className="seats">2 seats</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div className="financial-aspects">
            <h4>Financial Aspects</h4>
            <p>Fee Structure for: New Admission XI</p>
            <div className="fee-table">
              <table>
                <thead>
                  <tr>
                    <th scope="row">Fee</th>
                    <th scope="col" className="col-header">Admission</th>
                    <th scope="col" className="col-header">Annual</th>
                    <th scope="col" className="col-header">Monthly</th>
                    <th scope="col" className="col-header">Total</th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="row">Science</th>
                    <td>10,000</td>
                    <td>15,000</td>
                    <td>7,500</td>
                    <td>1,15,000</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="row">Management</th>
                    <td>10,000</td>
                    <td>15,000</td>
                    <td>5,500</td>
                    <td>91,000</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="row">Humanities</th>
                    <td>10,000</td>
                    <td>15,000</td>
                    <td>4,00</td>
                    <td>73,000</td>
                  </tr>
                </thead>

                <tr>
                  <th scope="row">Law</th>
                  <td>10,000</td>
                  <td>15,000</td>
                  <td>5,000</td>
                  <td>85,000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlusTwoap;
