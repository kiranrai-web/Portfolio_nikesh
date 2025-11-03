import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import "./Navbar.css";
import images from "../../constants/image";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app logo" />
      </div>
      <ul className="app__navbar-navlinks">
        <li className="p__roboto">
          <a href="#home">Home</a>
        </li>
        <li className="p__roboto">
          <a href="#about">About me</a>
        </li>
        <li className="p__roboto">
          <a href="#service">Services</a>
        </li>
        <li className="p__roboto">
          <a href="#project">Project</a>
        </li>
        <li className="p__roboto">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="p__roboto">
          <a href="#contact">Contact</a>
        </li>
        <li className="p__roboto">
          <a href="/nikeshResume.pdf" download="nikeshResume.pdf">
            <button className="custom__button">Download CV</button>
          </a>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#3B82F6"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <ImCross
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__roboto">
                <a href="#home">Home</a>
              </li>
              <li className="p__roboto">
                <a href="#about">About me</a>
              </li>
              <li className="p__roboto">
                <a href="#service">Services</a>
              </li>
              <li className="p__roboto">
                <a href="#project">Project</a>
              </li>
              <li className="p__roboto">
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="p__roboto">
                <a href="#contact">Contact</a>
              </li>
              <li className="p__roboto">
                <a href="/nikeshResume.pdf" download="nikeshResume.pdf">
                  <button className="custom__button">Download CV</button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
