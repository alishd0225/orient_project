import React from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import orient from "../../images/orient.jpg";
import tempImg1 from "./templateImage/tempImg1.jpg";
import tempImg2 from "./templateImage/tempImg2.jpg";
import tempImg3 from "./templateImage/tempImg3.jpg";
import tempImg4 from "./templateImage/tempImg4.jpg";
import tempImg5 from "./templateImage/tempImg5.jpg";
import tempImg6 from "./templateImage/tempImg6.jpg";
import "./NewsEvent.css";

const NewsEvent = () => {
  return (
    <>
      <Header />
      <div className="newsevent-header">
        <img src={orient} className="orient" alt="Orient" />
        <h4>News &#38; Events</h4>
      </div>
      <div className="news-event-align1">
        <div className="template-1">
          <img src={tempImg1} alt="Template Image" className="tempImg1" />
          <div className="textTemp">
            <h4>A-Level Foundation Course</h4>
            <hr />
            <p>
              Foundation programme are for school-leavers who have studied a
              non-British curriculum but wish to pursue a degree at a UK
              university. The foundation course acts as a bridge between your
              current qualifications and UK university undergraduate entry
              requirements and is designed to plug academic gaps, improve your
              English and familiarises you with UK life and culture in
              preparation for university.
            </p>

            <div className="template-footer">
              <div className="calendar-temp">
                <i className="fa fa-calendar"></i>
                <p>6th Baisakh onwards</p>
              </div>
              <div className="clock-temp">
                <i class="fa fa-clock-o"></i>
                <p>11:00 AM - 1:00 PM</p>
              </div>
              <div className="envelope-temp">
                <i class="fa fa-envelope"></i>
                <p>info@orientcollege.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="template-2">
          <img src={tempImg2} alt="Template Image" className="tempImg2" />
          <div className="textTemp">
            <h4>Holi Celebration</h4>
            <hr />
            <p>
              Kindly be informed that the college will remain closed on March 17
              and March 18 (Thursday and Friday) for the occasion of HOLI
              Festival. Regular classes will resume from March 20 (Sunday)
              onwards.An event will be conducted on the occasion of holi at
              orient college, please bring your college ID card along with you.
            </p>

            <div className="template-footer">
              <div className="calendar-temp">
                <i className="fa fa-calendar"></i>
                <p>6th Baisakh onwards</p>
              </div>
              <div className="clock-temp">
                <i class="fa fa-clock-o"></i>
                <p>11:00 AM - 1:00 PM</p>
              </div>
              <div className="envelope-temp">
                <i class="fa fa-envelope"></i>
                <p>info@orientcollege.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="news-event-align2">
        <div className="template-3">
          <img src={tempImg3} alt="Template Image" className="tempImg3" />
          <div className="textTemp">
            <h4>A-Level Foundation Course</h4>
            <hr />
            <p>
              Foundation programme are for school-leavers who have studied a
              non-British curriculum but wish to pursue a degree at a UK
              university. The foundation course acts as a bridge between your
              current qualifications and UK university undergraduate entry
              requirements and is designed to plug academic gaps, improve your
              English and familiarises you with UK life and culture in
              preparation for university.
            </p>
            <div className="template-footer">
              <div className="calendar-temp">
                <i className="fa fa-calendar"></i>
                <p>6th Baisakh onwards</p>
              </div>
              <div className="clock-temp">
                <i class="fa fa-clock-o"></i>
                <p>11:00 AM - 1:00 PM</p>
              </div>
              <div className="envelope-temp">
                <i class="fa fa-envelope"></i>
                <p>info@orientcollege.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="template-4">
          <img src={tempImg4} alt="Template Image" className="tempImg4" />
          <div className="textTemp">
            <h4>Holi Celebration</h4>
            <hr />
            <p>
              Kindly be informed that the college will remain closed on March 17
              and March 18 (Thursday and Friday) for the occasion of HOLI
              Festival. Regular classes will resume from March 20 (Sunday)
              onwards.An event will be conducted on the occasion of holi at
              orient college, please bring your college ID card along with you.
            </p>

            <div className="template-footer">
              <div className="calendar-temp">
                <i className="fa fa-calendar"></i>
                <p>6th Baisakh onwards</p>
              </div>
              <div className="clock-temp">
                <i class="fa fa-clock-o"></i>
                <p>11:00 AM - 1:00 PM</p>
              </div>
              <div className="envelope-temp">
                <i class="fa fa-envelope"></i>
                <p>info@orientcollege.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="news-event-align3">
        <div className="template-5">
          <img src={tempImg5} alt="Template Image" className="tempImg5" />
          <div className="textTemp">
            <h4>A-Level Foundation Course</h4>
            <hr />
            <p>
              Foundation programme are for school-leavers who have studied a
              non-British curriculum but wish to pursue a degree at a UK
              university. The foundation course acts as a bridge between your
              current qualifications and UK university undergraduate entry
              requirements and is designed to plug academic gaps, improve your
              English and familiarises you with UK life and culture in
              preparation for university.
            </p>

            <div className="template-footer">
              <div className="calendar-temp">
                <i className="fa fa-calendar"></i>
                <p>6th Baisakh onwards</p>
              </div>
              <div className="clock-temp">
                <i class="fa fa-clock-o"></i>
                <p>11:00 AM - 1:00 PM</p>
              </div>
              <div className="envelope-temp">
                <i class="fa fa-envelope"></i>
                <p>info@orientcollege.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="template-6">
          <img src={tempImg6} alt="Template Image" className="tempImg6" />
          <div className="textTemp">
            <h4>Holi Celebration</h4>
            <hr />
            <p>
              Kindly be informed that the college will remain closed on March 17
              and March 18 (Thursday and Friday) for the occasion of HOLI
              Festival. Regular classes will resume from March 20 (Sunday)
              onwards.An event will be conducted on the occasion of holi at
              orient college, please bring your college ID card along with you.
            </p>

            <div className="template-footer">
              <div className="calendar-temp">
                <i className="fa fa-calendar"></i>
                <p>6th Baisakh onwards</p>
              </div>
              <div className="clock-temp">
                <i class="fa fa-clock-o"></i>
                <p>11:00 AM - 1:00 PM</p>
              </div>
              <div className="envelope-temp">
                <i class="fa fa-envelope"></i>
                <p>info@orientcollege.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="news-event-align4">
        <div className="template-7">
          <img src={tempImg1} alt="Template Image" className="tempImg7" />
          <div className="textTemp">
            <h4>A-Level Foundation Course</h4>
            <hr />
            <p>
              Foundation programme are for school-leavers who have studied a
              non-British curriculum but wish to pursue a degree at a UK
              university. The foundation course acts as a bridge between your
              current qualifications and UK university undergraduate entry
              requirements and is designed to plug academic gaps, improve your
              English and familiarises you with UK life and culture in
              preparation for university.
            </p>

            <div className="template-footer">
              <div className="calendar-temp">
                <i className="fa fa-calendar"></i>
                <p>6th Baisakh onwards</p>
              </div>
              <div className="clock-temp">
                <i class="fa fa-clock-o"></i>
                <p>11:00 AM - 1:00 PM</p>
              </div>
              <div className="envelope-temp">
                <i class="fa fa-envelope"></i>
                <p>info@orientcollege.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="template-8">
          <img src={tempImg2} alt="Template Image" className="tempImg8" />
          <div className="textTemp">
            <h4>Holi Celebration</h4>
            <hr />
            <p>
              Kindly be informed that the college will remain closed on March 17
              and March 18 (Thursday and Friday) for the occasion of HOLI
              Festival. Regular classes will resume from March 20 (Sunday)
              onwards.An event will be conducted on the occasion of holi at
              orient college, please bring your college ID card along with you.
            </p>

            <div className="template-footer">
              <div className="calendar-temp">
                <i className="fa fa-calendar"></i>
                <p>6th Baisakh onwards</p>
              </div>
              <div className="clock-temp">
                <i class="fa fa-clock-o"></i>
                <p>11:00 AM - 1:00 PM</p>
              </div>
              <div className="envelope-temp">
                <i class="fa fa-envelope"></i>
                <p>info@orientcollege.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewsEvent;
