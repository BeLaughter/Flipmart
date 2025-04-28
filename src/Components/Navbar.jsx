import React from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import ban3 from "../assets/ban3.jpg";
import ban4 from "../assets/ban4.png";
import { FaCheck, FaHeart, FaLock, FaUser } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="nav">
      <div className="navbar">
        {/* TOP NAV */}
        <div className="top">
          <ul className="top-ui">
            <li className="dropdown hover-dropdown">
              <a href="#link" className="top-a" id="clothingsDropdown">
                Usd
              </a>
              <ul className="dropdown-menu" aria-labelledby="clothingsDropdown">
                {["USD", "INR", "GBP"].map((item, index) => (
                  <li key={index}>
                    <a
                      className="dropdown-item"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="dropdown hover-dropdown">
              <a href="#link" className="top-a" id="clothingsDropdown">
                English
              </a>
              <ul className="dropdown-menu" aria-labelledby="clothingsDropdown">
                {["English", "French", "German"].map((item, index) => (
                  <li key={index}>
                    <a
                      className="dropdown-item"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="#link" className="top-a">
                <FaUser /> My Account
              </a>
            </li>
            <li>
              <a href="#link" className="top-a">
                <FaHeart /> Wishlist
              </a>
            </li>
            <li>
              <a href="#link" className="top-a">
                <FaShoppingCart /> My Cart
              </a>
            </li>
            <li>
              <a href="#link" className="top-a">
                <FaCheck /> Checkout
              </a>
            </li>
            <li>
              <a href="#link" className="top-a">
                <FaLock /> Login
              </a>
            </li>
          </ul>
        </div>

        {/* MIDDLE NAV */}
        <div className="middle flex-container justify-content-between align-items-center w-100 px-4">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="smallimage" />
          </div>

          {/* Search bar */}
          <div className="flex-container align-items-center">
            <div className="dropdown">
              <button
                className="dropdown-toggle p8 cat"
                type="button"
                id="categoryDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORY
              </button>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                {[
                  "Computer",
                  "Clothings",
                  "Electronics",
                  "Shoes",
                  "Watches",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      className="dropdown-item"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <input
              type="text"
              className="input p8"
              placeholder="Search here..."
            />
            <button className="p8 bg-warning">
              <IoSearch />
            </button>
          </div>

          {/* Cart */}
          <div className="cart text-white d-flex align-items-center">
            <FaShoppingCart className="me-2" />
            <span className="cart-count bg-warning text-white rounded-circle text-center me-2 px-2">
              2
            </span>
            <span className="hell">CART - $600.00</span>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV using table (desktop only) */}
      <div className="bottom hiddenonmobile">
        <table className="w-100">
          <tbody>
            <tr>
              <td>
                <a href="#home">HOME</a>
              </td>

              <td className="nav-item dropdown hover-dropdown">
                <a href="#clothings" id="clothingsDropdown">
                  CLOTHINGS
                </a>
                <ul
                  id="width"
                  className="dropdown-menu"
                  aria-labelledby="clothingsDropdown"
                >
                  <div>
                    {[
                      "Men",
                      "Dresses",
                      "Shoes",
                      "Jackets",
                      "Sunglasses",
                      "Sport Wear",
                      "Blazers",
                      "Shirts",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          className="dropdown-item"
                          href={`#${item.toLowerCase()}`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </div>
                  <div>
                    {[
                      "Women",
                      "Handbags",
                      "Jwellery",
                      "Swimwear",
                      "Tops",
                      "Flats",
                      "Shoes",
                      "Winter Wear",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          className="dropdown-item"
                          href={`#${item.toLowerCase()}`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </div>
                  <div>
                    {[
                      "Boys",
                      "Toys & Games",
                      "Jeans",
                      "Shirts",
                      "Shoes",
                      "School Bags",
                      "Lunch Box",
                      "Footwear",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          className="dropdown-item"
                          href={`#${item.toLowerCase()}`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </div>
                  <div>
                    {[
                      "Girls",
                      "Sandals",
                      "Shorts",
                      "Dresses",
                      "Jwellery",
                      "Bags",
                      "Night Dress",
                      "Swim Wear",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          className="dropdown-item"
                          href={`#${item.toLowerCase()}`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </div>
                  <div>
                    <img src={ban3} alt="prev-img" className="smallimage" />
                  </div>
                </ul>
              </td>

              <td className="nav-item dropdown hover-dropdown">
                <a href="#electronics" id="electronicsDropdown">
                  ELECTRONICS
                </a>
                <ul
                  id="width"
                  className="dropdown-menu flex-container"
                  aria-labelledby="electronicsDropdown"
                >
                  <div>
                    {[
                      "Laptops",
                      "Gaming",
                      "Laptop Skins",
                      "Apple",
                      "Dell",
                      "Lenovo",
                      "Microsoft",
                      "Asus",
                      "Adapters",
                      "Batteries",
                      "Cooling Pads",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          className="dropdown-item"
                          href={`#${item.toLowerCase()}`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </div>
                  <div>
                    {[
                      "Desktops",
                      "Routers & Modems",
                      "CPUs, Processors",
                      "PC Gaming Store",
                      "Graphics Cards",
                      "Components",
                      "Webcam",
                      "Memory (RAM)",
                      "Motherboards",
                      "Keyboards",
                      "Headphones",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          className="dropdown-item"
                          href={`#${item.toLowerCase()}`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </div>
                  <div>
                    {[
                      "Cameras",
                      "Accessories",
                      "Binoculars",
                      "Telescopes",
                      "Camcorders",
                      "Digital",
                      "Film Cameras",
                      "Flashes",
                      "Lenses",
                      "Surveillance",
                      "Tripods",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          className="dropdown-item"
                          href={`#${item.toLowerCase()}`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </div>
                  <div>
                    {[
                      "Mobile Phones",
                      "Apple",
                      "Samsung",
                      "Lenovo",
                      "Motorola",
                      "LeEco",
                      "Asus",
                      "Acer",
                      "Accessories",
                      "Headphones",
                      "Memory Cards",
                    ].map((item, index) => (
                      <li key={index}>
                        <a
                          className="dropdown-item"
                          href={`#${item.toLowerCase()}`}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </div>
                  <div>
                    <img src={ban4} alt="prev-img" className="smallimage" />
                  </div>
                </ul>
              </td>

              <td>
                <a href="#health">HEALTH & BEAUTY</a>
              </td>
              <td>
                <a href="#watches">WATCHES</a>
              </td>
              <td>
                <a href="#jewellery">JEWELLERY</a>
              </td>
              <td>
                <a href="#shoes">SHOES</a>
              </td>
              <td>
                <a href="#kids">KIDS & GIRLS</a>
              </td>

              <td className="nav-item dropdown hover-dropdown">
                <a href="#pages" id="pagesDropdown">
                  PAGES
                </a>
                <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                  {[
                    "Home",
                    "Category",
                    "Details",
                    "Shopping Cart summary",
                    "Checkout",
                    "Blog",
                    "Blog Details",
                    "Contact",
                    "Sign-in",
                    "Wishlist",
                    "Terms and Condition",
                    "Track Orders",
                    "Product Comparison",
                    "FAQ",
                    "404",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        className="dropdown-item"
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </td>

              <td className="ps-3">
                <a href="#offers" className="text-warning">
                  TODAY'S OFFER
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bottom for mobile view only */}
      <nav className="navbar navbar-expand-lg navbar-warning bg d-lg-none">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Navbar Toggle Button */}
          <button
            className="navbar-toggler btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileNavbar"
            aria-controls="mobileNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="mobileNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  Clothings
                </a>
              </li>
              <li className="nav-item">
                <a href="#class" className="nav-link">
                  Electronics
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  HEALTH & BEAUTY
                </a>
              </li>
              <li className="nav-item hiddenonlap">
                <a href="#login" className="nav-link">
                  Watches
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  JEWELLERY
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  Shoes
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  KIDS & GIRLS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
