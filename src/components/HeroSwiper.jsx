import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "./HeroSwiper.css";

function HeroSwiper({slides, slideChange}) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      loop={true}
      modules={{ Autoplay }}
      className="heroSwiper"
    >
        {
            slides.map(slide=>(
                <SwiperSlide key={slide.id}>
                    <img src={slide.bgImg} alt="image of me and friend" onClick={()=>slideChange(slide.id)}/>
                </SwiperSlide>
            ))
        }
    </Swiper>
  );
}

export default HeroSwiper;
