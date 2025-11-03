import React, {useState, useEffect} from "react";

import images from "../../constants/image";
import { HireMe } from "../../component";
import "./Header.css";

const Header = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const handleOpenForm = (e) => {
    e.preventDefault();
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  useEffect(() => {
    if (isFormVisible) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // Reset on unmount
    };
  }, [isFormVisible]);
  ``;

  return (
    <div className="app__wrapper section__padding p__roboto" id="home">
      <div className="app__wrapper-info">
        <p className="app__wrapper-intro">Hi! I am</p>
        <h2 className="app__wrapper-subtitle">Nikesh Thapa</h2>
        <h1>Video Editor</h1>
        <p>
          Passionate about storytelling through video, I have more than 1 years
          of experience in editing and creating engaging content for brands,
          social media, and personal projects. I specialize in turning ideas
          into visually compelling stories.
        </p>
        <button className="custom__button" onClick={handleOpenForm}>Hire me</button>
      </div>
      <div className="app__wrapper-img">
        <img src={images.nikeshProf} alt="profile img" />
      </div>   
       {isFormVisible && (
        <div className="booking-form-overlay" onClick={handleCloseForm}>
          <div
            className="booking-form-popup"
            onClick={(e) => e.stopPropagation()}  // Prevents form close when clicking inside
          >
            <HireMe/>
            <button className="close-form" onClick={handleCloseForm}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>

  );
};

export default Header;
