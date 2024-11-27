import React, { useContext, useRef } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoMdClose } from "react-icons/io";
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import QuantityBox from "../QuantityBox";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";








function ProductModel(props) {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    const context = useContext(MyContext);
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };


    var settings2 = {
        dots : false,
        infinite : false,
        speed : 700,
        slidesToShow : 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false
    }
    function goto(index){
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
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
                            <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                                <div className="item">
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://ardenmarket.com.tr/media/catalog/product/cache/ce320e98947e5c83f08a8e256dc8423e/n/e/nestle_corn_flakes_m_s_r_gevre_i_450_g.jpg`}
                                    />
                                </div>
                                <div className="item">
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://images.migrosone.com/sanalmarket/product/05039577/05039577-dbd7d9-1650x1650.jpg`}
                                    />
                                </div>
                                <div className="item">
                                    <InnerImageZoom
                                        zoomType="hover" zoomScale={1}
                                        src={`https://ardenmarket.com.tr/media/catalog/product/cache/ce320e98947e5c83f08a8e256dc8423e/n/e/nestle_corn_flakes_m_s_r_gevre_i_450_g.jpg`}
                                    />
                                </div>
                                
                            </Slider>
                        </div>
                        <Slider {...settings} className="zoomSlider" ref={zoomSlider}>

                                <div className="item">
                                    <img src={`https://ardenmarket.com.tr/media/catalog/product/cache/ce320e98947e5c83f08a8e256dc8423e/n/e/nestle_corn_flakes_m_s_r_gevre_i_450_g.jpg`}
                                    className="w-100"
                                   alt="" onClick={() => goto(0)} />
                                </div>
                                
                                <div className="item">
                                    <img src={`https://images.migrosone.com/sanalmarket/product/05039577/05039577-dbd7d9-1650x1650.jpg`}
                                    className="w-100"
                                   alt="" onClick={() => goto(1)} />
                                </div>
                                <div className="item">
                                    <img src={`https://ardenmarket.com.tr/media/catalog/product/cache/ce320e98947e5c83f08a8e256dc8423e/n/e/nestle_corn_flakes_m_s_r_gevre_i_450_g.jpg`}
                                    className="w-100"
                                   alt="" onClick={() => goto(2)} />
                                </div>
                                
                            </Slider>

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