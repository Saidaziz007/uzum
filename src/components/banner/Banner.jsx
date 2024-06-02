import React, { useRef } from "react";
import { FaStar } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
import banner5 from "../../assets/banner-5.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 500)}s`;
  };
  return (
    <div className="hero-all">
      <div className="hero-bottom">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-1">
              <div className="swiper-right">
                <img src={banner4} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-2">
              <div className="swiper-right">
                <img src={banner2} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-3">
              <div className="swiper-right">
                <img src={banner3} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-4">
              <div className="swiper-right">
                <img src={banner1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-4">
              <div className="swiper-right">
                <img src={banner5} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
