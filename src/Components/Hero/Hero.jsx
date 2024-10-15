import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from '../assest/Slide1.jpg';
import Slide2 from '../assest/Slide2.jpg';
import Slide3 from '../assest/Slide3.jpg';
import 'swiper/css';
import 'swiper/css/navigation'; 
import style from './Hero.module.css';

const Hero = () => {
  const slides = [
    { id: 1, content: Slide1, heading: 'Make Your Home Better' },
    { id: 2, content: Slide2, heading: 'Design Your Kitchen with Experts' },
    { id: 3, content: Slide3, heading: 'Get Reliable Furniture' },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation 
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {slides.map((slide) => (
        <SwiperSlide  classN
          key={slide.id} 
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.content})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
          className={style.textWrapper}
        >
          <div className='text-center'>
            <h1 className={style.slideHeading}>{slide.heading}</h1>
            <button className={style.button}>Contact Us</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
