import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { SwiperSlide, Swiper } from "swiper/react";

import CarouselSlider from './effect-carousel';


//styles from swiper;
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/virtual';

//styles from local;
import "./Carousel.css";



const Carousel = ({images}) => {
  return images ? (
    <div id='carousel-container'>
      <div className='swiper'>
    <Swiper 
      modules={[Autoplay, Navigation, Pagination, CarouselSlider]} 
      autoplay={{delay: 2000}}
      effect="carousel"
      loop={true}
      grabCursor={true}
      loopedSlides={2}
      navigation={{nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}}
      pagination={{el: ".swiper-pagination"}}
      className="swiper-wrapper"
      watchSlidesProgress={true}
      slidesPerView={2}
      spaceBetween={-150}
      centeredSlides={true}
      
      
      
    >
      {images?.map(image => {
        return( 
          <SwiperSlide className='swiper-slide' key={image?._id}>
              <img className='swiper-carousel-animate-opacity' src={image?.url} />
          </SwiperSlide>
        );
      })}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
    </Swiper>
    </div>
    </div>
  ) : ("");
}

export default Carousel;