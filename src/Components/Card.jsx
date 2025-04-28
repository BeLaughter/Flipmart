import React from "react";
import "./Card.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // optional, for arrows
import slide1 from "../assets/sliders/01.jpg";
import slide2 from "../assets/sliders/02.jpg";
const images = [
  {
    src: slide1,
    title: "NEW COLLECTIONS",
    description: "Check out our new collections",
  },
  {
    src: slide2,
    title: "WOMEN FASHION",
    description:
      "Experience our collection for women that will make you stand out",
  },
];

const Card = () => {
  return (
    <div className="car">
      <div className="flex-container">
        {/* Category Table */}
        <div className="flex1">
          <table className="body-table">
            <thead>
              <tr>
                <th>CATEGORIES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#clothing">Clothing</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#electronic">Electronic</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#shoes">Shoes</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#watches">Watches</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#jewllery">Jewllery</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#health-and-beauty">Health and Beauty</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#kids-and-babies">Kids and Babies</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#sports">Sports</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="#home-and-garden">Home and Garden</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Carousel and Info */}
        <div className="flex2">
          <div className="flex2-carosel">
            <div
              id="simpleCarousel"
              className="carousel slide caro-height"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {images.map((item, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={item.src}
                      className="d-block w-100 imgh"
                      alt={`Slide ${index + 1}`}
                    />
                    <div className="boxy"></div>
                    <div className="carousel-caption capcaro">
                      <h5 className="caroh5" data-aos="fade-right">
                        {item.title}
                      </h5>
                      <p className="carop" data-aos="zoom-out-left">
                        {item.description}
                      </p>
                      <div>
                        <a className="btn-info btn caroa" href="#learn">
                          SHOP NOW
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button
                className="carousel-control-prev "
                type="button"
                data-bs-target="#simpleCarousel"
                data-bs-slide="prev"
              >
                <div className="btn-img2">
                  <FaArrowLeft className="iconsmen" />
                  <span className="visually-hidden">Previous</span>
                </div>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#simpleCarousel"
                data-bs-slide="next"
              >
                <div className=" btn-img2">
                  <FaArrowRight className="iconsmen" />
                  <span className="visually-hidden">Next</span>
                </div>
              </button>
            </div>
          </div>

          <div className="flex2-text">
            <div>
              <h6 className="text-center fw-bold">MONEY BACK</h6>
              <p className="text-center">30 Days Money Back Guarantee</p>
            </div>
            <div>
              <h6 className="text-center fw-bold">FREE SHIPPING</h6>
              <p className="text-center">Shipping on orders over $99</p>
            </div>
            <div>
              <h6 className="text-center fw-bold">SPECIAL SALE</h6>
              <p className="text-center">Extra $5 off on all items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
