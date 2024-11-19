import HomeBanner from "../../components/HomeBanner";
import banner1 from '../../assets/images/banner1.png';
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import ProductItem from "../../components/ProductItem";



function Home() {

  return (
    <>
      <HomeBanner />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner1} alt="banner1" className="cursor w-100" />
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
              <div className="product-row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
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

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">New Products</h3>
                  <p className="text-light text-sml mb-0">Here are our new products...</p>
                </div>
                <Button className="viewAllBtn m-auto">View All <IoIosArrowRoundForward /></Button>
              </div>
              <div className="product-row w-100 mt-4">
                
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
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

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
