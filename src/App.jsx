import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { FaArrowUp } from "react-icons/fa6";
function App() {
  // Function to scroll to top when button is clicked.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //add/remove display class to btn when screen is scrolled to half vheight
  window.addEventListener("scroll", function () {
    let btntop = document.querySelector(".b2top");
    let scrollThreshold = btntop.offsetTop + window.innerHeight / 2; // 50vh below  position

    if (window.scrollY > scrollThreshold) {
      btntop.classList.add("display-btn");
    } else {
      btntop.classList.remove("display-btn");
    }
  });
  return (
    <div>
      <div className="b2top">
        <a href="#totop" onClick={scrollToTop}>
          <FaArrowUp className="iconsmen" />
        </a>
      </div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
