import React from "react";
import "../assets/scss/style.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { sliderContent } from "../constant/hotel-feature-data.const";
import { SlideItem } from "../types/main.type";

interface RestaurantSlider {
  slides: SlideItem[];
}

const RestaurantSlider: React.FC<RestaurantSlider> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="slider_wrapper">
        <Carousel useKeyboardArrows={true}>
          {slides.map((item, index) => (
            <div className="slide">
              <img alt="sample_file" src={item.image} key={index} />
              <div className="content__wrapper">
                <div className="title">{item.title}</div>
                <div className="description">
                  <span>{item.desc}</span>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default RestaurantSlider;
