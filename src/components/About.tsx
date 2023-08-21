import React from "react";
import AboutProps from "../types/main.type";

const About: React.FC<any> = ({ imageSrc, restaurantName, description }) => {
  return (
    <div className="about-section-box">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="images/about-img.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <div className="inner-column">
              <h1>
                Welcome To{" "}
                <span>
                  ChhappanBhog <br /> Dhaba & Restaurant
                </span>
              </h1>
              <h4>Little Story</h4>
              <p>
                ChhappanBhog Dhaba & Restaurant, founded by brothers Shivam and
                Adarsh Dubey, is more than just a place to dine. It is a
                tapestry being woven with the threads of community, culture, and
                culinary passion. Every bite is a journey, every visit is a
                memory to cherish. And as travelers continue on their way, they
                are carrying with them not just the flavors of the village, but
                also the warmth and hospitality that is embracing them at
                ChhappanBhog.
              </p>
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
    </div>
  );
};

export default About;
