import React from "react";
import Box from "@mui/material/Box";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import "./Alevelap.css";
import university from "../../../images/university.png";
import trophy from "../../../images/trophy.png";
import { useNavigate } from "react-router-dom";

const Alevelap = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="Alevel-academic-page">
        <div className="AlevelBox">
          <Box component="div" className="box1">
            <img src={university} alt="University" className="university" />
            <p className="header-text">
              Get the best education for the best of you{" "}
            </p>
            <ul>
              <li>Academic excellence at it's Peak</li>
              <li>Get to experience the UK gold standard courses</li>
              <li>Get recognized internationally by your excellence</li>
              <li>
                Learn to undertake individual projects and to work as part of
                them
              </li>
              <li>Become qualified and accepted as university student</li>
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

        <div className="AlevelTexts">
          <div className="AlevelProgramText">
            <h3>A-Level Program</h3>
            <p>
              Orient has been running the programme in international standard in
              its separate A Level Block since 2003 A.D. Orient is proud of its
              A Level students for their outstanding performance. Nepal Top in
              Business Studies and 100% pass result with 75% A grades in past
              years and Nepal Top in Chemistry and 100% pass results in 2010
              exams are some examples of our success. In nine years journey, we
              possess a luminous history of glory and achievement in terms of
              overall performance.
            </p>
          </div>

          <div className="AlevelCourses">
            <h3>Courses</h3>
            <div className="faculty">
              <div className="science">
                <i class="fas fa-atom"></i>
                <h4>Science</h4>
              </div>
              <div className="management-humanities">
                <ion-icon name="medal"></ion-icon>
                <h4 className="m">Management/</h4>
                <h4 className="h">Humanities</h4>
              </div>
              <div className="optional">
                <ion-icon name="ios-people"></ion-icon>
                <h4>Optional</h4>
              </div>
            </div>
          </div>

          <div className="scheme-awards">
            <div className="scholarship-scheme">
              <h4>Scholarship Scheme</h4>
              <div className="scholarship-table">
                <h5 className="percentage">100%</h5>
                <p className="marks">90% or above</p>
              </div>
              <hr />
              <div className="scholarship-table">
                <h5 className="percentage">75%</h5>
                <p className="marks">87.5% to 89.99%</p>
              </div>
              <hr />
              <div className="scholarship-table">
                <h5 className="percentage">50%</h5>
                <p className="marks">85% to 87.49%</p>
              </div>
              <hr />
              <div className="scholarship-table">
                <h5 className="percentage">50%</h5>
                <p className="marks">80% to 84.99%</p>
              </div>
              <hr />
              <div className="scholarship-table">
                <h5 className="percentage">50%</h5>
                <p className="marks">ECA Performance</p>
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

          <div className="financial-aspects">
            <h4>Financial Aspects</h4>
            <p>Fee Structure for A Level</p>
            <div className="fee-table">
              <table>
                <tr>
                  <th scope="col" className="col-header">
                    Admission 
                  </th>
                  <th scope="col" className="col-header">
                    Annual 
                  </th>
                  <th scope="col" className="col-header">
                    Books
                  </th>
                  <th scope="col" className="col-header">
                    Materials
                  </th>
                  <th scope="col" className="col-header">
                    Monthly 
                  </th>
                </tr>
                <tr>
                  <td>50,000</td>
                  <td>15,000</td>
                  <td>7,000</td>
                  <td>5,000</td>
                  <td>10,500</td>
                </tr>
              </table>
            </div>
              <p>Particular Fee (Per Year)</p>
              <div className="particular-fee-table">
                <table>
                  <tr>
                    <th scope="col" className="col-header">
                      Physics{" "}
                    </th>
                    <th scope="col" className="col-header">
                      Chemistry
                    </th>
                    <th scope="col" className="col-header">
                      Biology
                    </th>
                    <th scope="col" className="col-header">
                      Computer
                    </th>
                    <th scope="col" className="col-header">
                      Total(for any 3 subjects)
                    </th>
                  </tr>
                  <tr>
                    <td>7,000</td>
                    <td>9,000</td>
                    <td>7,000</td>
                    <td>7,000</td>
                    <td>20,000</td>
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

export default Alevelap;
