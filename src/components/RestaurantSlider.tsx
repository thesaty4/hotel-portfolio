import React from 'react';
import Slider from 'react-slick';
import { Box, Button, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../assets/scss/style.scss';

interface SlideItem {
  imageUrl: string;
  title: string;
  description: string;
  action: {
    label: string,
    link: string
  }
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
    <div id="slides" className="cover-slides">
		<ul className="slides-container">
			<li className="text-center">
				<img src="/images/slider-01.jpg" alt=""/>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="m-b-20"><strong>Welcome To <br/> Yamifood Restaurant</strong></h1>
							<p className="m-b-40">See how your users experience your website in realtime or view  <br/> 
							trends to see any changes in performance over time.</p>
							<p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
						</div>
					</div>
				</div>
			</li>
			<li className="text-center">
				<img src="/images/slider-02.jpg" alt=""/>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="m-b-20"><strong>Welcome To <br/> Yamifood Restaurant</strong></h1>
							<p className="m-b-40">See how your users experience your website in realtime or view  <br/> 
							trends to see any changes in performance over time.</p>
							<p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
						</div>
					</div>
				</div>
			</li>
			<li className="text-center">
				<img src="/images/slider-03.jpg" alt=""/>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="m-b-20"><strong>Welcome To <br/> Yamifood Restaurant</strong></h1>
							<p className="m-b-40">See how your users experience your website in realtime or view  <br/> 
							trends to see any changes in performance over time.</p>
							<p><a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a></p>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div className="slides-navigation">
			<a href="#" className="next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
			<a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
		</div>
	</div>
  );
};

export default RestaurantSlider;
