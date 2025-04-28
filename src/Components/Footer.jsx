import React from "react";
import "./Footer.css"; // Adjust path as needed
import { FaLocationDot, FaWifi } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import payment1 from "../assets/payment/1.png";
import payment2 from "../assets/payment/2.png";
import payment3 from "../assets/payment/3.png";
import payment4 from "../assets/payment/4.png";
import payment5 from "../assets/payment/5.png";
import brand1 from "../assets/brand/brand1.png";
import brand2 from "../assets/brand/brand2.png";
import brand3 from "../assets/brand/brand3.png";
import brand4 from "../assets/brand/brand4.png";
import brand5 from "../assets/brand/brand5.png";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="foot">
      <div className="foot1">
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 3 }, // mobile - show 2 slides
            640: { slidesPerView: 3 }, // tablet small
            768: { slidesPerView: 4 }, // tablet large
            1024: { slidesPerView: 5 }, // desktop
          }}
          navigation={false}
        >
          <SwiperSlide>
            <img src={brand1} alt="Brand 1" className="imagesmall" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand2} alt="Brand 2" className="imagesmall" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand3} alt="Brand 3" className="imagesmall" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand4} alt="Brand 4" className="imagesmall" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={brand5} alt="Brand 5" className="imagesmall" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="crane2">
        <div className="crane2grid flex-container">
          <div className="crane2griditem">
            <ul>
              <li className="crane2ulhead">
                <h5>CONTACT US</h5>
              </li>
              <li className="flex">
                <span>
                  {" "}
                  <FaLocationDot className="icon-ft2" />
                </span>
                <p>
                  ThemesGround, 789 Main rd, <br></br>Anytown, CA 12345 USA
                </p>
              </li>
              <li className="flex">
                <span>
                  <IoMdPhonePortrait className="icon-ft2" />
                </span>
                +(888) 123-4567 <br></br>+(888) 456-7890
              </li>
              <li className="flex">
                <span>
                  <CiMail className="icon-ft2" />{" "}
                </span>
                <a className="email">FlipmartByBlackfire@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="crane2griditem">
            <ul className="crane2ul">
              <li className="crane2ulhead">
                <h5>CUSTOMER SERVICE</h5>
              </li>
              <li>My Account</li>
              <li>Order history</li>
              <li>FAQ</li>
              <li>Specials </li>
              <li>Health center</li>
            </ul>
          </div>
          <div className="crane2griditem">
            <ul className="crane2ul">
              <li className="crane2ulhead">
                <h5>CORPORATION</h5>
              </li>
              <li>About us</li>
              <li>Customer service</li>
              <li>Company</li>
              <li>Investor relations </li>
              <li>Advanced search</li>
            </ul>
          </div>
          <div className="crane2griditem">
            <ul className="crane2ul">
              <li className="crane2ulhead">
                <h5>WHY CHOOSE US</h5>
              </li>
              <li>About us</li>
              <li>Customer service</li>
              <li>Company</li>
              <li>Investor relations </li>
              <li>Advanced search</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="crane3 flex-container">
        <div className="crane3item1">
          <FaFacebookSquare className="icon-ft text-info" />
          <FaTwitterSquare className="icon-ft text-info" />
          <FaGooglePlusSquare className="icon-ft text-danger " />
          <FaWifi className="icon-ft text-danger " />
          <FaPinterestSquare className="icon-ft text-warning" />
          <FaLinkedin className="icon-ft text-danger " />
          <FaYoutubeSquare className="icon-ft text-danger" />
        </div>

        <div>
          <p>© FLIPMART 2025. All Rights Reserved. Design by BlackFire</p>
        </div>
        <div className="crane3item2">
          <img src={payment1} alt="image" className="imageicon" />
          <img src={payment2} alt="image" className="imageicon" />
          <img src={payment3} alt="image" className="imageicon" />
          <img src={payment4} alt="image" className="imageicon" />
          <img src={payment5} alt="image" className="imageicon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
