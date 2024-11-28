import React, { useContext, useRef, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoMdClose } from "react-icons/io";
import Rating from '@mui/material/Rating';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import InnerImageZoom from "react-inner-image-zoom";


function ProductModel(props) {

    const [sliderIndex, setSliderIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    const context = useContext(MyContext);

    function goto(index) {
        setSliderIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    return (
        <>
            <Dialog open={true} className="productModel" onClose={() => context.setIsOpenProductModel(false)}>

                <Button onClick={() => context.setIsOpenProductModel(false)} className='close_'><IoMdClose /></Button>
                <h4 className="mb-2 font-weight-bold">All Natural italian style chicken meatballs</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brand:</span>
                        <span className="ml-2"><b>Salloum</b></span>
                    </div>
                    <Rating name="read-only" value={3} precision={0.5} readOnly size="small" />
                </div>
                <hr />
                <div className="row mt-2 productDetailsModel">
                    <div className="col-md-5">
                        <div className="productZoom">
                            <div className="badge badge-primary">28%</div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                navigation={false}
                                slidesPerGroup={1}
                                modules={[Navigation]}
                                className="zoomSliderBig"
                                ref={zoomSliderBig}
                            >
                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={1}
                                            src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        >
                                        </InnerImageZoom>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={1}
                                            src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        >
                                        </InnerImageZoom>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom
                                            zoomType="hover"
                                            zoomScale={1}
                                            src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        >
                                        </InnerImageZoom>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={0}
                            navigation={true}
                            slidesPerGroup={1}
                            modules={[Navigation]}
                            className="zoomSlider"
                            ref={zoomSlider}
                        >
                            <SwiperSlide>
                                <div className={`item ${sliderIndex === 0 && 'item_active'}`}>
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        className="w-100" onClick={() => goto(0)} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${sliderIndex === 1 && 'item_active'}`}>
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        className="w-100" onClick={() => goto(1)} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${sliderIndex === 2 && 'item_active'}`}>
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        className="w-100" onClick={() => goto(2)} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${sliderIndex === 3 && 'item_active'}`}>
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        className="w-100" onClick={() => goto(3)} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${sliderIndex === 4 && 'item_active'}`}>
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        className="w-100" onClick={() => goto(4)} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${sliderIndex === 5 && 'item_active'}`}>
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        className="w-100" onClick={() => goto(5)} alt="" />
                                </div>
                            </SwiperSlide>


                        </Swiper>

                    </div>
                    <div className="col-md-7">
                        <div className="d-flex info align-items-center mb-3">
                            <span className="oldPrice lg mr-2">$20.00</span>
                            <span className="newPrice text-danger lg">$20.00</span>
                        </div>
                        <span className="badge bg-success">IN STOCK</span>
                        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                        <div className="d-flex align-items-center">
                            <QuantityBox />
                            <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                                Add to Cart</Button>
                        </div>

                        <div className="d-flex align-items-center mt-5 actions">
                            <Button className="btn-round btn-sml" variant="outlined">
                                <IoIosHeartEmpty /> &nbsp; Add To Wishlist</Button>
                            <Button className="btn-round btn-sml ml-3" variant="outlined">
                                <MdOutlineCompareArrows /> &nbsp; Compare</Button>
                        </div>

                    </div>
                </div>
            </Dialog>
        </>
    );
}


export default ProductModel;