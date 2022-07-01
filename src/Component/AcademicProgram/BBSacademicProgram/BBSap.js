import React from "react";
import Box from "@mui/material/Box";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import "./BBSap.css";
import orientLogo from "../../../images/orient.jpg";
import trophy from "../../../images/trophy.png";
import { useNavigate } from "react-router-dom";

const BBSap = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="BBS-academic-page">
        <div className="BBSBox">
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
            <button
              onClick={() => {
                navigate("/apply");
              }}
            >
              Register now
            </button>
          </Box>
        </div>
        <div className="BBSTexts">
          <div className="BBSProgramText">
            <h3>BBS Program</h3>
            <p>
              The college is adding BBA programme’s form forthcoming session.
              All Bachelor programme’s are run in the separate Bachelor Block in
              the morning shift from 6:30 a.m. to 11.00a.m Popular subjects
              like, Sociology, Social Work and Major English are introduced in
              Humanities.
            </p>
          </div>

          <div className="BBSCourses">
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
              General requirement for BBS is +2 or equivalent. But Admission
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
              <table>
                <thead>
                  <tr>
                    <td className="percentage">100%</td>
                    <td className="marks">80% and above</td>
                    <td className="seats">10 seats</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td className="percentage">100%/50%</td>
                    <td className="marks">75% to 79.99%</td>
                    <td className="seats">15 seats</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <td className="percentage">50%</td>
                    <td className="marks">70% to 74.99%</td>
                    <td className="seats">20 seats</td>
                  </tr>
                </thead>
                <tr>
                  <td className="percentage">50%</td>
                  <td className="marks">60% to 69.99%</td>
                  <td className="seats">25 seats</td>
                </tr>
              </table>
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
            <p>Fee Structure for BBS Level</p>
            <div className="fee-table">
              <table>
                <thead>
                  <tr>
                    <td></td>
                    <th scope="col" className="col-header">
                      Fees
                    </th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="row">Admission Fee</th>
                    <td>10,000</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="row">Internal Exams</th>
                    <td>5,500</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="row">Security Deposit</th>
                    <td>4,000</td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th scope="row">Form Charge</th>
                    <td>4,000</td>
                  </tr>
                </thead>
                <tr>
                  <th scope="row">Monthly Fee</th>
                  <td>5,000</td>
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

export default BBSap;
