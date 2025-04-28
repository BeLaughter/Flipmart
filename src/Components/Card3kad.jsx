import React from "react";
import "./Card3.css";
import staron from "../assets/star-on.png";
import staroff from "../assets/star-off.png";

const Card3kad = (props) => {
  return (
    <div className="card3kad">
      <div className="flex-a">
        <img src={props.img} alt="product" className="special-img" />
      </div>
      <div className="flex-b">
        <p className="text-dark mt-3">{props.text1}</p>
        <div className="stars">
          <img src={staron} alt="star" className="staricon" />
          <img src={staron} alt="star" className="staricon" />
          <img src={staron} alt="star" className="staricon" />
          <img src={staron} alt="star" className="staricon" />
          <img src={staroff} alt="star" className="staricon" />
        </div>
        <p className="text-dark">$600.00</p>
      </div>
    </div>
  );
};

export default Card3kad;
