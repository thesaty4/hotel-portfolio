import React from "react";
import "../assets/scss/style.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [
  "/images/slider-01.jpg",
  "/images/slider-02.jpg",
  "/images/slider-03.jpg",
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
          {images.map((URL, index) => (
            <div className="slide">
              <img alt="sample_file" src={URL} key={index} />
            </div>
          ))}
        </Carousel>
      </div>
      {/* <Carousel>
        <div>
          <img src="/images/slider-01.jpg" />
          <div className="carousel-text">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Welcome To <br /> Yamifood Restaurant
                  </strong>
                </h1>
                <p className="m-b-40">
                  See how your users experience your website in realtime or view{" "}
                  <br />
                  trends to see any changes in performance over time.
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-circle btn-outline-new-white"
                    href="#"
                  >
                    Reservation
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/slider-02.jpg" />
          <div className="carousel-text">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Welcome To <br /> Yamifood Restaurant
                  </strong>
                </h1>
                <p className="m-b-40">
                  See how your users experience your website in realtime or view{" "}
                  <br />
                  trends to see any changes in performance over time.
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-circle btn-outline-new-white"
                    href="#"
                  >
                    Reservation
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/slider-03.jpg" />
          <div className="carousel-text">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    Welcome To <br /> Yamifood Restaurant
                  </strong>
                </h1>
                <p className="m-b-40">
                  See how your users experience your website in realtime or view{" "}
                  <br />
                  trends to see any changes in performance over time.
                </p>
                <p>
                  <a
                    className="btn btn-lg btn-circle btn-outline-new-white"
                    href="#"
                  >
                    Reservation
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel> */}
    </>
  );
};

export default RestaurantSlider;
