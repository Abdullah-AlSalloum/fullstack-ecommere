import React from "react";
import Slider from "react-slick";

function HomeBanner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            className="w-100"
            src="https://images.hepsiburada.net/banners/s/1/819-357/gra-181034-appbanner133749325542340375.jpg/format:webp"
          />
        </div>
        <div className="item">
          <img
            className="w-100"
            src="https://images.hepsiburada.net/banners/s/1/819-357/category-bilg-efsane11hplaptophero-04-11133751946388243358.jpg/format:webp"
          />
        </div>
        <div className="item">
          <img
            className="w-100"
            src="https://images.hepsiburada.net/banners/s/1/819-357/gra-181061-appbanner133749398453639762.jpg/format:webp"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HomeBanner;
