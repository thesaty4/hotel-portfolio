import React from "react";
import "../assets/scss/style.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const content = [
  {
    image: "/images/slider-01.jpg",
    title: "Welcome To Chhappanbhog Dhaba & Restaurant ",
    desc: ` See how your users experience your website in realtime or view
            trends to see any changes in performance over time.`,
  },
  {
    image: "/images/slider-02.jpg",
    title: "Welcome To Chhappanbhog Dhaba & Restaurant ",
    desc: ` See how your users experience your website in realtime or view
            trends to see any changes in performance over time.`,
  },
  {
    image: "/images/slider-03.jpg",
    title: "Welcome To Chhappanbhog Dhaba & Restaurant ",
    desc: ` See how your users experience your website in realtime or view
            trends to see any changes in performance over time.`,
  },
];
interface SlideItem {
  imageUrl: string;
  title: string;
  description: string;
  action: {
    label: string;
    link: string;
  };
}

interface RestaurantSliderProps {
  slides: SlideItem[];
}

const RestaurantSlider: React.FC<RestaurantSliderProps> = ({ slides }) => {
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
          {content.map((item, index) => (
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
