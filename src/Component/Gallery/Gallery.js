import React, { Fragment } from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import orient from "../../images/orient.jpg";
import holi1 from "./HoliGallery/holi1.jpg";
import holi2 from "./HoliGallery/holi2.jpg";
import holi3 from "./HoliGallery/holi3.jpg";
import holi4 from "./HoliGallery/holi4.jpg";
import holi5 from "./HoliGallery/holi5.jpg";
import holi6 from "./HoliGallery/holi6.jpg";
import holi7 from "./HoliGallery/holi7.jpg";
import holi8 from "./HoliGallery/holi8.jpg";
import womenD1 from "./WomensDayGallery/womensDay1.jpg";
import womenD2 from "./WomensDayGallery/womensDay2.jpg";
import womenD3 from "./WomensDayGallery/womensDay3.jpg";
import womenD4 from "./WomensDayGallery/womensDay4.jpg";
import womenD5 from "./WomensDayGallery/womensDay5.jpg";
import womenD6 from "./WomensDayGallery/womensDay6.jpg";
import womenD7 from "./WomensDayGallery/womensDay7.jpg";
import womenD8 from "./WomensDayGallery/womensDay8.jpg";
import ubuntu1 from "./UbuntuProgramGallery/ubuntu1.jpg";
import ubuntu2 from "./UbuntuProgramGallery/ubuntu2.jpg";
import ubuntu3 from "./UbuntuProgramGallery/ubuntu3.jpg";
import ubuntu4 from "./UbuntuProgramGallery/ubuntu4.jpg";
import ubuntu5 from "./UbuntuProgramGallery/ubuntu5.jpg";
import ubuntu6 from "./UbuntuProgramGallery/ubuntu6.jpg";
import ubuntu7 from "./UbuntuProgramGallery/ubuntu7.jpg";
import ubuntu8 from "./UbuntuProgramGallery/ubuntu8.jpg";

import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <Header />
      <div className="gallery-header">
        <img src={orient} className="orient" alt="Orient" />
        <h4>Gallery</h4>
      </div>

      <div className="holiCelebration">
        <h3>Holi Celebration</h3>
        <div className="holi-pictures">
          <div className="holi-first-align">
            <img src={holi1} alt="Holi Pictures" className="holi1" />
            <img src={holi2} alt="Holi Pictures" className="holi2" />
          </div>
          <div className="holi-second-align">
            <img src={holi3} alt="Holi Pictures" className="holi3" />
          </div>
          <div className="holi-third-align">
            <img src={holi4} alt="Holi Pictures" className="holi4" />
            <img src={holi5} alt="Holi Pictures" className="holi5" />
            <img src={holi6} alt="Holi Pictures" className="holi6" />
          </div>
          <div className="holi-fourth-align">
            <img src={holi7} alt="Holi Pictures" className="holi7" />
            <img src={holi8} alt="Holi Pictures" className="holi8" />
          </div>
        </div>
      </div>

      <div className="womensDay">
        <h3>International Women's Day</h3>
        <div className="WomensDay-Pictures">
          <div className="womenD-first-align">
            <img src={womenD1} alt="Women's Day Pictures" className="womenD1" />
            <img src={womenD2} alt="Women's Day Pictures" className="womenD2" />
          </div>
          <div className="womenD-second-align">
            <img src={womenD3} alt="Women's Day Pictures" className="womenD3" />
          </div>
          <div className="womenD-third-align">
            <img src={womenD4} alt="Women's Day Pictures" className="womenD4" />
            <img src={womenD5} alt="Women's Day Pictures" className="womenD5" />
            <img src={womenD6} alt="Women's Day Pictures" className="womenD6" />
          </div>
          <div className="womenD-fourth-align">
            <img src={womenD7} alt="Women's Day Pictures" className="womenD7" />
            <img src={womenD8} alt="Women's Day Pictures" className="womenD8" />
          </div>
        </div>
      </div>

      <div className="ubuntuProgram">
        <h3>Ubuntu Program</h3>
        <div className="ubuntu-pictures">
          <div className="ubuntuP-first-align">
            <img src={ubuntu1} alt="Ubuntu Program Pictures" className="ubuntu1"/>
            <img src={ubuntu2} alt="Ubuntu Program Pictures" className="ubuntu2"/>
          </div>
          <div className="ubuntuP-second-align">
            <img src={ubuntu3} alt="Ubuntu Program Pictures" className="ubuntu3"/>
          </div>
          <div className="ubuntuP-third-align">
            <img src={ubuntu4} alt="Ubuntu Program Pictures" className="ubuntu4"/>
            <img src={ubuntu5} alt="Ubuntu Program Pictures" className="ubuntu5"/>
            <img src={ubuntu6} alt="Ubuntu Program Pictures" className="ubuntu6"/>
          </div>
          <div className="ubuntuP-fourth-align">
            <img src={ubuntu7} alt="Ubuntu Program Pictures" className="ubuntu7"/>
            <img src={ubuntu8} alt="Ubuntu Program Pictures" className="ubuntu8"/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
