import React from "react";
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";  
import 'swiper/css/navigation';
import { Navigation , Autoplay } from "swiper/modules";

function HomeBanner() {
 
  return (
   <div className="container mt-3">
     <div className="homeBannerSection">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        navigation={true}
        loop={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Navigation , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="item">
          <img
            className="w-100"
            src="https://images.hepsiburada.net/banners/s/1/819-357/gra-181034-appbanner133749325542340375.jpg/format:webp" alt=""
          />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
          <img
            className="w-100"
            src="https://images.hepsiburada.net/banners/s/1/819-357/category-bilg-efsane11hplaptophero-04-11133751946388243358.jpg/format:webp" alt=""
          />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
          <img
            className="w-100"
            src="https://images.hepsiburada.net/banners/s/1/819-357/gra-181061-appbanner133749398453639762.jpg/format:webp" alt=""
          />
        </div>
        </SwiperSlide>
        </Swiper>
    </div>
   </div>
  );
}

export default HomeBanner;
