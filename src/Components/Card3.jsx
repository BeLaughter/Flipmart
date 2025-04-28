import React, { useState } from "react";
import "./Card3.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card2kad from "./Card2kad";
import Card3kad from "./Card3kad";
import next from "../assets/next.png";
import prev from "../assets/prev.png";
import p1 from "../assets/products/p1.jpg";
import p2 from "../assets/products/p2.jpg";
import p3 from "../assets/products/p3.jpg";
import p4 from "../assets/products/p4.jpg";
import p5 from "../assets/products/p5.jpg";
import p6 from "../assets/products/p6.jpg";
import p7 from "../assets/products/p7.jpg";
import p8 from "../assets/products/p8.jpg";
import p9 from "../assets/products/p9.jpg";
import p11 from "../assets/products/p11.jpg";
import p12 from "../assets/products/p12.jpg";
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

const Card3 = () => {
  const [sswiperRef, setSwiperRef] = useState(null);
  const [zswiperRef, setSwiperrRef] = useState(null);

  const goToPrevSliderSlide2 = () => {
    sswiperRef?.slidePrev();
  };

  const goToNextSliderSlide2 = () => {
    sswiperRef?.slideNext();
  };

  const goToPrevSliderSlide3 = () => {
    zswiperRef?.slidePrev();
  };

  const goToNextSliderSlide3 = () => {
    zswiperRef?.slideNext();
  };

  return (
    <div className="car">
      <div className="flex-container">
        <div className="flex1">
          <div className="hotdeal">
            <div className="hotdeal-top spb">
              <div>
                <p className="p-hot small-text">SPECIAL OFFER</p>
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
          <div className="vege">
            <div className="hotdeal-top spb">
              <div>
                <p className="p-hot">FEATURED PRODUCTS</p>
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
                1024: { slidesPerView: 4 },
              }}
              navigation={false} // ❌ turn off default arrows
              onSwiper={(swiper) => setSwiperrRef(swiper)} // ✅ Save swiper instance
            >
              <SwiperSlide>
                <Card2kad text="New" text1="Hot" img={p1} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2kad text="Hot" text1="Green Beans" img={p2} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2kad text="Sale" text1="Tomatoes" img={p3} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2kad text="Sale" text1="Lemon" img={p4} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2kad text="New" text1="Hot" img={p5} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2kad text="Hot" text1="Strawberry" img={p6} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2kad text="Sale" text1="Lettus" img={p7} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2kad text="Sale" text1="Berry" img={p8} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2kad text="New" text1="Maize" img={p9} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2kad text="Hot" text1="Hot" img={p15} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2kad text="Sale" text1="Pawpaw" img={p11} />
              </SwiperSlide>
              <SwiperSlide>
                <Card2kad text="Sale" text1="Blueberry" img={p12} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
