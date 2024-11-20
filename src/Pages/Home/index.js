import HomeBanner from "../../components/HomeBanner";
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import newsLetterImg from '../../assets/images/coupon.png';
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import ProductItem from "../../components/ProductItem";
import HomeCat from "../../components/HomeCat";
import { IoMailOutline } from "react-icons/io5";




function Home() {
  var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
              <div className="banner">
                <img src={banner1} alt="banner1" className="cursor w-100" />
              </div>
              <div className="banner mt-4">
                <img src={banner2} alt="banner2" className="cursor w-100" />
              </div>
              </div>
            </div>
            <div className="col-md-9 productRow">

              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">Do not miss the current offers...</p>
                </div>
                <Button className="viewAllBtn m-auto">View All <IoIosArrowRoundForward /></Button>
              </div>


              <div className="product_row w-100 mt-4">
              <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-4">
                <div className="info w-75 ">
                  <h3 className="mb-0 hd">New Products </h3>
                  <p className="text-light text-sml mb-0">New Products item list...</p>
                </div>
                <Button className="viewAllBtn m-auto">View All <IoIosArrowRoundForward /></Button>
              </div>


              <div className="product_row productRow2 w-100 mt-4 d-flex">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />

              </div>

              <div className="d-flex mt-4 mb-5 bannerSec">
              <div className="banner mt-4">
                <img src={banner3} alt="banner3" className="cursor w-100" />
              </div>

              <div className="banner mt-4">
                <img src={banner4} alt="banner4" className="cursor w-100" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">$20 discount for your first order.</p>
              <h3 className="text-white">join our newsletter and get...</h3>
              <p className="text-light">Join our email subsecription now and get update on 
                <br/>promotions and coupons.</p>

                <form>
                  <IoMailOutline />
                  <input type="email" placeholder="Your Email Address"/>
                  <Button>Sebsecribe</Button>
                </form>
            </div>
            <div className="col-md-6">
                <img src={newsLetterImg} alt="coupon"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
