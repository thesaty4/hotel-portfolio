import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

interface FooterProps {
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedIn: string;
  };
  hotelName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ socialLinks, hotelName, year }) => {
  return (
    <>
      <footer className="footer-area bg-f">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h3>About Us</h3>
              <p>
                ChhappanBhog Dhaba & Restaurant, led by Shivam and Adarsh Dubey,
                weaves flavors, memories, and hospitality. A culinary journey
                that resonates beyond, blending culture and warmth
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3>Opening hours</h3>
              <p>
                <span className="text-color">Monday: </span>Closed
              </p>
              <p>
                <span className="text-color">Tue-Wed :</span> 9:Am - 10PM
              </p>
              <p>
                <span className="text-color">Thu-Fri :</span> 9:Am - 10PM
              </p>
              <p>
                <span className="text-color">Sat-Sun :</span> 5:PM - 10PM
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <ul className="list-inline f-social">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="company-name">
                  All Rights Reserved. &copy; 2023{" "}
                  <a href="#">Chhappanbhog Dhaba & Restaurant</a> Design By :
                  <a href="https://www.instagram.com/_the.satya/">
                    Satya Mishra
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
