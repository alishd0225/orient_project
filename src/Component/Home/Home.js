import React, { Component } from "react";
import "./Home.css";
import landingPageBackground from "../../images/landingPageBackground.png";
import slideShow from "../../images/slideShow.png";
import notice from "../../images/notice.png";
import campbridgeLogo from "../../images/campbridgeLogo.jpg";
import orientLogo from "../../images/orient.jpg";
import basketball from "../../images/basketball.jpg";
import entertainment from "../../images/entertainment.jpg";
import Study from "../../images/Study.jpg";
import Travels from "../../images/Travels.jpg";
import building from "../../images/orientCollegeBuilding.jpg";
import map from "../../images/map.png";
import Dialog from "./Dialog";
import Header from "../layout/Header/Header";
import Box from "@mui/material/Box";
import Footer from "../layout/Footer/Footer";

class Home extends Component {
  //Pop Up function initialization
  state = {
    isOpen: false,
  };
  //Integrating Google map link
  showInMapClicked = () => {
    window.open(
      "https://www.google.com/maps/place/Orient+College+Basundhara,+Kathmandu/@27.7412606,85.3310473,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb193763412931:0x25a6aab80727c274!8m2!3d27.7412606!4d85.3310473"
    );
  };
  render() {
    return (
      <>
        <Header />
        <div className="bg-image">
          <img src={landingPageBackground} alt="landingPage" />
        </div>
        <div className="slideShow">
          <img src={slideShow} alt="slideShow" />
          <blockquote className="blockquote">
            <p>
              Orient college aims to provide the best education for excellence
              of the students{" "}
            </p>
          </blockquote>
          <button>About us</button>
        </div>
        <div className="popUp">
          <img
            src={notice}
            alt="notice"
            onClick={(e) => this.setState({ isOpen: true })}
          />
          <Dialog
            isOpen={this.state.isOpen}
            onClose={(e) => this.setState({ isOpen: false })}
          >
            Pre Registration Open for +2 and A-Levels for academic session
            2078/2079
            <p>
              Orient College announces Pre Registration Open for +2 and A-Levels
              for academic session 2078/079. Orient college is one of the top
              college inside Kathmandu valley focusing mainly on science,
              management and A-Levels faculty.
            </p>
          </Dialog>
        </div>
        <div className="academicProgram">
          <h1>Our Academic Programs</h1>
          <div className="container">
            <div className="plusTwoProgram">
              <Box
                component="div"
                sx={{
                  width: 500,
                  height: 550,
                  boxShadow: 10,
                  borderRadius: 8,
                  backgroundColor: "#1FC32C",
                }}
              >
                <h4>+2 Program</h4>
                <Box
                  component="div"
                  sx={{
                    width: 500,
                    height: 500,
                    boxShadow: 10,
                    marginTop: 5,
                    borderRadius: 8,
                    backgroundColor: "white",
                  }}
                >
                  <img src={orientLogo} alt="Orient Logo" />
                  <p>Get the best education for the best of you </p>
                  <ul>
                    <li>Academic excellence at it's Peak</li>
                    <li>Get to learn from the very best teacher of the fied</li>
                    <li>Physics,Chemistry and Biology lab facility</li>
                    <li>
                      Learn to undertake individual projects and to work as part
                      of them
                    </li>
                    <li>Events and sports help every year for students</li>
                  </ul>
                  <button>Register now</button>
                </Box>
              </Box>
            </div>
            <div className="A_level">
              <Box
                component="div"
                sx={{
                  width: 500,
                  height: 550,
                  boxShadow: 10,
                  borderRadius: 8,
                  backgroundColor: "#E43D4D",
                }}
              >
                <h4>A-Level</h4>
                <Box
                  component="div"
                  sx={{
                    width: 500,
                    height: 500,
                    boxShadow: 10,
                    marginTop: 5,
                    borderRadius: 8,
                    backgroundColor: "white",
                  }}
                >
                  <img src={campbridgeLogo} alt="campbridge logo" />
                  <h5>University Of Campbridge</h5>
                  <p>Get the best education for the best of you </p>
                  <ul>
                    <li>Academic excellence at it's Peak</li>
                    <li>Get to experience Uk gold standard courses</li>
                    <li>Get recognized internationally by your experience</li>
                    <li>
                      Learn to undertake individual projects and to work as part
                      of them
                    </li>
                    <li>
                      Become qualified and accepted as a university student
                    </li>
                  </ul>
                  <button>Register now</button>
                </Box>
              </Box>
            </div>
          </div>
        </div>
        <div className="memoriesOfExcellence">
          <h1>Memories Of Excellence</h1>
          <div className="upDownImage">
            <img
              src={entertainment}
              alt="Entertainment"
              className="entertainment"
            />
            <img src={Travels} alt="Travels" className="travels" />
          </div>
          <img src={Study} alt="Study" className="study" />
          <img src={basketball} alt="Basketball" className="basketball" />
        </div>
        <div className="collegeBuilding">
          <img src={building} alt="Building" className="building" />
          <div className="location">
            <img src={map} alt="Map" className="map" />
            <button onClick={this.showInMapClicked}>View on google map</button>
            <h5>We are Located at:</h5>
            <p className="address">Basundhara, Kathmandu,Nepal</p>
            <p className="phone">(977) 1-4362218, 4362504, 4354056</p>
          </div>
        </div>
        <div className="talkShow">
          <h1>
            Orient Talk<span> Show</span>{" "}
          </h1>
          <div className="youtube-video">
            <iframe
              src="https://www.youtube.com/embed/EE4nlsiPLD0?autoplay=1&mute=1&version=3&loop=1&playlist=EE4nlsiPLD0"
              frameBorder="1"
              allow="autoplay;encrypted-media;"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
