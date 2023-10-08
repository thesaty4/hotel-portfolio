import React from "react";
import { SlideItem } from "../types/main.type";
import { Box, SxProps } from "@mui/system";
interface AboutType {
  info: SlideItem;
  sx?: SxProps;
}
const About: React.FC<AboutType> = ({ info, sx }) => {
  return (
    <Box className="about-section-box" id="about" sx={sx}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={info.image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <div className="inner-column">
              <h1>
                Welcome To <span>{info.title}</span>
              </h1>
              <h4>Little Story</h4>
              <p>{info.desc}</p>
              <a
                className="btn btn-lg btn-circle btn-outline-new-white"
                href="#"
              >
                Reservation
              </a>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default About;
