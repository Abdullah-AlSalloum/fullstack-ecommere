import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";

function HomeCat() {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f3fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ])
    return (
        <section className="homeCat">
            <div className="container">
                <h3 class="mb-4 hd">Feature Categories</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={10}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >

                    {
                        itemBg?.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className="item text-center cursor" style={{background:item}}>
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/034/917/109/small_2x/ai-generated-isolated-single-wet-yellow-apple-png.png" alt="" />
                                        <h6>Yellow Apple</h6>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }


                </Swiper>
            </div>
        </section>
    );
}

export default HomeCat;