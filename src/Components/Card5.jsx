import React, { useState } from "react";
import "./Card5.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Card2kad from "./Card2kad";
import Card5kad from "./Card5kad";
import { Testikad } from "./Testikad";
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
import p15 from "../assets/products/p15.jpg";
import b1 from "../assets/blog-post/b1.jpg";
import b2 from "../assets/blog-post/b2.jpg";
import b3 from "../assets/blog-post/b3.jpg";
import b4 from "../assets/blog-post/b4.jpg";
import b5 from "../assets/blog-post/b5.jpg";
import member1 from "../assets/testimonials/member1.png";
import member2 from "../assets/testimonials/member2.png";
import member3 from "../assets/testimonials/member3.png";
import member4 from "../assets/testimonials/member4.png";

const Card5 = () => {
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
            <div className="hotdeal-top2">
              <div>
                <p className="p-hot small-text">NEWSLETTER</p>
              </div>
              <hr></hr>
              <div>
                <p className="mt-5 mb-3">Sign Up for Our Newsletter!</p>
              </div>
              <div>
                <input
                  type="text"
                  className=""
                  placeholder="Subcribe to our newsletter"
                ></input>
              </div>
              <div>
                <a className="btn btn-info mt-3 mb-5">Subcribe</a>
              </div>
            </div>
          </div>
          <div className="hotdeal">
            <Swiper
              modules={[Navigation]}
              loop={true}
              spaceBetween={10}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              navigation={false} // ❌ turn off default arrows
              onSwiper={(swiper) => setSwiperrRef(swiper)} // ✅ Save swiper instance
            >
              <SwiperSlide>
                <Testikad
                  name="John Doe"
                  role="Web Dev"
                  img={member1}
                  content="Lorem ipsum text is used as a placeholder text."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testikad
                  name="Christina Dawn"
                  role="Datsum & Co"
                  img={member2}
                  content="Lorem ipsum text is used as a placeholder text."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testikad
                  name="Joe West"
                  role="Ui/Ux Designer "
                  img={member3}
                  content="Lorem ipsum text is used as a placeholder text."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testikad
                  name="Harrison Peter"
                  role="Graphic design"
                  img={member4}
                  content="Lorem ipsum text is used as a placeholder text."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex2">
          {/* slider for latest from blog */}
          <div className="vege">
            <div className="hotdeal-top spb">
              <div>
                <p className="p-hot">LATEST FROM BLOG</p>
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
                1024: { slidesPerView: 2 },
              }}
              navigation={false} // ❌ turn off default arrows
              onSwiper={(swiper) => setSwiperrRef(swiper)} // ✅ Save swiper instance
            >
              <SwiperSlide>
                <Card5kad title="New" byDate="Hot" img={b1} content="1" />
              </SwiperSlide>
              <SwiperSlide>
                <Card5kad title="New" byDate="Hot" img={b2} content="2" />
              </SwiperSlide>
              <SwiperSlide>
                <Card5kad title="New" byDate="Hot" img={b3} content="1" />
              </SwiperSlide>
              <SwiperSlide>
                <Card5kad title="New" byDate="Hot" img={b4} content="2" />
              </SwiperSlide>
              <SwiperSlide>
                <Card5kad title="New" byDate="Hot" img={b5} content="1" />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* slider for new arrivals */}
          <div className="vege">
            <div className="hotdeal-top spb">
              <div>
                <p className="p-hot">NEW ARRIVALS</p>
              </div>
              <div className="flex">
                <div className="btn-img">
                  {/* Custom Prev Button for Swiper */}
                  <img
                    src={prev}
                    alt="prev-img"
                    className="smallicon"
                    onClick={goToPrevSliderSlide2} // <-- move to previous slide of swiper
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="btn-img">
                  {/* Custom Next Button for Swiper */}
                  <img
                    src={next}
                    alt="next-img"
                    className="smallicon"
                    onClick={goToNextSliderSlide2} // <-- move to next slide of swiper
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
              onSwiper={(swiper) => setSwiperRef(swiper)} // ✅ Save swiper instance
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

export default Card5;
