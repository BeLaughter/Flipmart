import React from "react";
import staron from "../assets/star-on.png";
import staroff from "../assets/star-off.png";
import { FaHeart, FaShoppingCart, FaSignal } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Card2kad = (props) => {
  return (
    <div className="card2kad">
      <p className="cir">{props.text}</p>
      <div className="imgcon">
        <img src={props.img} alt="prev-img" className="product-img" />
        <div className="boxbt">
          <div className="flex justify-content-center bib">
            <div className="flex-item">
              <a className="btn btn-warning">
                <FaShoppingCart className="me-2" />
              </a>
            </div>
            <div className="flex-item">
              <a className="btn btn-info">
                <FaHeart className="me-2" />
              </a>
            </div>
            <div className="flex-item">
              <a className="btn btn-info">
                <FaSignal className="me-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="hotdeal-bottom">
          <p className="text-dark mt-3">{props.text1}</p>
          <div>
            <img src={staron} alt="prev-img" className="staricon" />
            <img src={staron} alt="prev-img" className="staricon" />
            <img src={staron} alt="prev-img" className="staricon" />
            <img src={staron} alt="prev-img" className="staricon" />
            <img src={staroff} alt="prev-img" className="staricon" />
          </div>
          <div>
            <p className="text-dark">
              $600.00<span className="text-grey">$700.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2kad;
