import React from "react";
import "./Card5.css";
const Card5kad = (props) => {
  return (
    <div className="card5kad">
      <div>
        <img src={props.img} alt="product" className="card5kad-img" />
      </div>
      <div>
        <p className="text-dark mt-2 text-center">{props.title}</p>
      </div>
      <div>
        <p className="text-grey mt-1">{props.byDate}</p>
      </div>
      <div>
        <p className="text-dark mt-2">{props.content}</p>
      </div>
      <a className="btn btn-info">Read More</a>
    </div>
  );
};

export default Card5kad;
