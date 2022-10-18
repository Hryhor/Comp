import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import imgSlide from '../../../assets/img/main/slide-1.webp';
import imgSlideTwo from '../../../assets/img/main/slide-2.jpg';
import imgSlideThree from '../../../assets/img/main/slide-3.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={imgSlide} alt='slide 1' width="1145" height="400" />
          </div>
          <div>
            <img src={imgSlideTwo} alt='slide 1' width="1145" height="400"/>
          </div>
          <div>
            <img src={imgSlideThree} alt='slide 1' width="1145" height="400"/>
          </div>
          <div>
            <img src={imgSlide} alt='slide 1' width="1145" height="400"/>
          </div>
          <div>
            <img src={imgSlideTwo} alt='slide 2'width="1145" height="400"/>
          </div>
          <div>
            <img src={imgSlideThree} alt='slide 3' width="1145" height="400"/>
          </div>
        </Slider>
      </div>
    );
  }
};