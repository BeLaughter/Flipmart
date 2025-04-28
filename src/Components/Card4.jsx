import React, { useState } from "react";
import "./Card4.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card2kad from "./Card2kad";
import Card3kad from "./Card3kad";
import next from "../assets/next.png";
import prev from "../assets/prev.png";
import p13 from "../assets/products/p13.jpg";
import p14 from "../assets/products/p14.jpg";
import p15 from "../assets/products/p15.jpg";
import p16 from "../assets/products/p16.jpg";
import p17 from "../assets/products/p17.jpg";
import p18 from "../assets/products/p18.jpg";
import p19 from "../assets/products/p19.jpg";
import p20 from "../assets/products/p20.jpg";
import p21 from "../assets/products/p21.jpg";
import p22 from "../assets/products/p22.jpg";
import p23 from "../assets/products/p23.jpg";
import p24 from "../assets/products/p24.jpg";
import hmbanner from "../assets//home-banner.jpg";
import label from "../assets//label.png";
const Card4 = () => {
  const [zswiperRef, setSwiperaRef] = useState(null);
  const [sswiperRef, setSwiperRef] = useState(null);

  const goToPrevSliderSlide3 = () => {
    zswiperRef?.slidePrev();
  };

  const goToNextSliderSlide3 = () => {
    zswiperRef?.slideNext();
  };

  const goToPrevSliderSlide2 = () => {
    sswiperRef?.slidePrev();
  };

  const goToNextSliderSlide2 = () => {
    sswiperRef?.slideNext();
  };
  return (
    <div className="car">
      <div className="flex-container">
        <div className="flex1">
          <div className="hotdeal">
            <div className="hotdeal-top2">
              <div>
                <p className="p-hot small-text">PRODUCT TAGS</p>
              </div>
              <hr></hr>
              <div>
                <div className="flex">
                  <p className="tag-img">Phone</p>
                  <p className="tag-img bg-info">Vest</p>
                </div>
                <div className="flex">
                  <p className="tag-img">Smartphone</p>
                  <p className="tag-img">Furniture</p>
                </div>
                <div className="flex">
                  <p className="tag-img">T-shirt</p>
                  <p className="tag-img">Sweatpants</p>
                </div>
                <div className="flex">
                  <p className="tag-img">Sneaker</p>
                  <p className="tag-img">Toy</p>
                  <p className="tag-img">Rose</p>
                </div>
              </div>
            </div>
            <div className="hotdeal-top spb">
              <div>
                <p className="p-hot small-text">SPECIAL DEALS</p>
              </div>
              <div className="flex">
                <div className="btn-img">
                  <img
                    src={prev}
                    alt="prev-img"
                    className="smallicon"
                    onClick={goToPrevSliderSlide2}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="btn-img">
                  <img
                    src={next}
                    alt="next-img"
                    className="smallicon"
                    onClick={goToNextSliderSlide2}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <hr />
            {/* Slider special offer */}
            <Swiper
              modules={[Navigation]}
              loop={true}
              slidesPerView={1}
              navigation={false}
              onSwiper={(swiper) => setSwiperRef(swiper)}
            >
              <SwiperSlide>
                <div className="slide-vertical">
                  <Card3kad text="New" text1="Hot" img={p13} />
                  <Card3kad text="Hot" text1="Green Beans" img={p14} />
                  <Card3kad text="Sale" text1="Tomatoes" img={p15} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-vertical">
                  <Card3kad text="Sale" text1="Lemon" img={p16} />
                  <Card3kad text="New" text1="Hot" img={p17} />
                  <Card3kad text="Hot" text1="Strawberry" img={p18} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-vertical">
                  <Card3kad text="Sale" text1="Lettuce" img={p19} />
                  <Card3kad text="Sale" text1="Berry" img={p20} />
                  <Card3kad text="New" text1="Maize" img={p21} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-vertical">
                  <Card3kad text="Hot" text1="Hot" img={p22} />
                  <Card3kad text="Sale" text1="Pawpaw" img={p23} />
                  <Card3kad text="Sale" text1="Blueberry" img={p24} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex2">
          <div style={{ position: "relative" }}>
            <img src={hmbanner} alt="banner" className="bann" />

            <div className="bann2-wrapper">
              <img src={label} alt="label" className="bann2" />
              <span className="bann2-text">NEW</span>
            </div>
          </div>
          {/* slide for best seller */}
          <div className="vege">
            <div className="hotdeal-top spb">
              <div>
                <p className="p-hot">BEST SELLER</p>
              </div>
              <div className="flex">
                <div className="btn-img">
                  {/* Custom Prev Button for Swiper */}
                  <img
                    src={prev}
                    alt="prev-img"
                    className="smallicon"
                    onClick={goToPrevSliderSlide3} // <-- move to previous slide of swiper
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="btn-img">
                  {/* Custom Next Button for Swiper */}
                  <img
                    src={next}
                    alt="next-img"
                    className="smallicon"
                    onClick={goToNextSliderSlide3} // <-- move to next slide of swiper
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <hr />
            <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={10}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              navigation={false} // ❌ turn off default arrows
              onSwiper={(swiper) => setSwiperaRef(swiper)} // ✅ Save swiper instance
            >
              <SwiperSlide>
                <div className="slide-vertical">
                  <Card3kad text="New" text1="Hot" img={p13} />
                  <Card3kad text="Hot" text1="Green Beans" img={p14} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-vertical">
                  <Card3kad text="Sale" text1="Tomatoes" img={p15} />
                  <Card3kad text="Sale" text1="Lemon" img={p16} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-vertical">
                  <Card3kad text="New" text1="Hot" img={p17} />
                  <Card3kad text="Hot" text1="Strawberry" img={p18} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-vertical">
                  <Card3kad text="Sale" text1="Lettuce" img={p19} />
                  <Card3kad text="Hot" text1="Hot" img={p22} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-vertical">
                  <Card3kad text="Sale" text1="Berry" img={p20} />
                  <Card3kad text="New" text1="Maize" img={p21} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide-vertical">
                  <Card3kad text="Sale" text1="Pawpaw" img={p23} />
                  <Card3kad text="Sale" text1="Blueberry" img={p24} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
