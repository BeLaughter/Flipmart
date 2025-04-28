import React from "react";
import "./Card5.css";
export const Testikad = (props) => {
  return (
    <div className="card5kad">
      <div>
        <img src={props.img} alt="product" className="card5kad-img" />
      </div>
      <div>
        <p className=" mt-4">"{props.content}"</p>
      </div>
      <div>
        <p className="text-dark mt-3">{props.name}</p>
        <p className="text-grey">{props.role}</p>
      </div>
    </div>
  );
};
