import React, { useRef, useState } from "react";
import Card2kad from "./Card2kad";
import "./Card2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaShoppingCart } from "react-icons/fa";
import staron from "../assets/star-on.png";
import staroff from "../assets/star-off.png";
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
import p10 from "../assets/products/p10.jpg";
import p11 from "../assets/products/p11.jpg";
import p12 from "../assets/products/p12.jpg";
import p15 from "../assets/products/p15.jpg";
import p25 from "../assets/hot-deals/p25.jpg";
import ban1 from "../assets/ban1.jpg";
import ban2 from "../assets/ban2.jpg";

const Card2 = () => {
  const [hotSwiperRef, setHotSwiperRef] = useState(null);
  const [productSwiperRef, setProductSwiperRef] = useState(null);

  // Control Hot Deals Swiper
  const goPrevHot = () => hotSwiperRef?.slidePrev();
  const goNextHot = () => hotSwiperRef?.slideNext();

  // Control Product Swiper
  const goPrevProduct = () => productSwiperRef?.slidePrev();
  const goNextProduct = () => productSwiperRef?.slideNext();

  return (
    <div className="car">
      <div className="flex-container">
        {/* Hot Deals Section */}
        <div className="flex1">
          <div className="hotdeal">
            <div className="hotdeal-top spb">
              <p className="p-hot">HOT DEALS</p>
              <div className="flex">
                <div className="btn-img">
                  <img
                    src={prev}
                    alt="prev"
                    className="smallicon"
                    onClick={goPrevHot}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="btn-img">
                  <img
                    src={next}
                    alt="next"
                    className="smallicon"
                    onClick={goNextHot}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="hotdeal-middle">
              <div>
                <p className="cir bg-info">
                  35% <br /> OFF
                </p>
              </div>
              <div className="flex2-carosel">
                <Swiper
                  modules={[Navigation]}
                  onSwiper={setHotSwiperRef}
                  spaceBetween={10}
                  loop={true}
                  slidesPerView={1}
                  navigation={false}
                >
                  {/* Swiper Slides without array */}
                  <SwiperSlide>
                    <div className="caro-height">
                      <img
                        src={p5}
                        className="d-block w-100 product-img2"
                        alt="New Collections"
                      />
                      <div className="boxy"></div>
                      <div className="carousel-caption capcaro">
                        <h5 className="caroh5 text-dark">NEW COLLECTIONS</h5>
                        <p className="carop text-dark">
                          Check out our new collections
                        </p>
                        <a className="btn-info btn caroa" href="#learn">
                          SHOP NOW
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="caro-height">
                      <img
                        src={p10}
                        className="d-block w-100 product-img2"
                        alt="Women Fashion"
                      />
                      <div className="boxy"></div>
                      <div className="carousel-caption capcaro">
                        <h5 className="caroh5 text-dark">WOMEN FASHION</h5>
                        <p className="carop text-dark">
                          Experience our collection for women that will make you
                          stand out
                        </p>
                        <a className="btn-info btn caroa" href="#learn">
                          SHOP NOW
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="caro-height">
                      <img
                        src={p25}
                        className="d-block w-100 product-img2"
                        alt="Women Fashion"
                      />
                      <div className="boxy"></div>
                      <div className="carousel-caption capcaro">
                        <h5 className="caroh5 text-dark">WOMEN FASHION</h5>
                        <p className="carop text-dark">
                          Experience our collection for women that will make you
                          stand out
                        </p>
                        <a className="btn-info btn caroa" href="#learn">
                          SHOP NOW
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="hotdeal-bottom">
              <div>
                <img src={staron} alt="star" className="staricon" />
                <img src={staron} alt="star" className="staricon" />
                <img src={staron} alt="star" className="staricon" />
                <img src={staron} alt="star" className="staricon" />
                <img src={staroff} alt="star" className="staricon" />
              </div>
              <div>
                <p className="text-dark">
                  $600.00 <span className="text-grey">$700.00</span>
                </p>
                <div className="flex">
                  <a className="btn btn-warning">
                    <FaShoppingCart className="me-2" />
                  </a>
                  <a className="btn btn-info">Add To CART</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Products Section */}
        <div className="flex2">
          <div className="vege">
            <div className="hotdeal-topz">
              <div>
                <p className="p-hot">NEW PRODUCTS</p>
              </div>
              <div>
                <ol className="spb text-dark">
                  <li>ALL</li>
                  <li>Clothing</li>
                  <li>Electronics</li>
                  <li>Shoes</li>
                </ol>
              </div>
              <div className="flex">
                <div className="btn-img">
                  <img
                    src={prev}
                    alt="prev"
                    className="smallicon "
                    onClick={goPrevProduct}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="btn-img">
                  <img
                    src={next}
                    alt="next"
                    className="smallicon"
                    onClick={goNextProduct}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <hr />
            <Swiper
              modules={[Navigation]}
              onSwiper={setProductSwiperRef}
              loop={true}
              spaceBetween={10}
              navigation={false}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {/* Swiper Slides without array */}
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

          {/* Bottom Banners */}
          <div className="flex3 flex-container">
            <img src={ban1} alt="banner" className="banimg" />
            <img src={ban2} alt="banner" className="ban2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
