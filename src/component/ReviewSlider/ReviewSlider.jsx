import React, { useState, useRef } from 'react';
import './ReviewSlider.css';

import images from '../../constants/image';

const ChevronLeft = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const sliderRef = useRef(null);

  const reviews = [
    {
      id: 1,
      text: "Very easy to work with, consistently delivers high-quality results, and maintains amazing turnaround time with clear communication and professionalism throughout.",
      name: "8848 Momo House",
      position: "Business",
      image: images.momo
    },
    {
      id: 2,
      text: "Extremely professional and creative, always delivers on time with impressive attention to detail, smooth communication, and results that exceed expectations.",
      name: "TNC Unscripted",
      position: "Media",
      image: images.tnc
    },
    {
      id: 3,
      text: "Remarkably talented and efficient, communicates clearly, meets every deadline, and consistently transforms ideas into engaging, high-quality video content that stands out.",
      name: "TNC",
      position: "Media",
      image: images.tnc2
    },
    {
      id: 4,
      text: "Always responsive and reliable, delivers polished videos quickly with great creativity, professionalism, and an excellent understanding of project goals and vision.",
      name: "Emily Davis",
      position: "Freelancer",
      image: images.emily
    }
  ];

  const nextSlide = () => {
    setDirection('next');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setDirection('prev');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToSlide = (index) => {
    if (index > currentIndex) {
      setDirection('next');
    } else {
      setDirection('prev');
    }
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const getPositionX = (e) => {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  };

  const touchStart = (e) => {
    setIsDragging(true);
    setStartPos(getPositionX(e));
  };

  const touchMove = (e) => {
    if (!isDragging) return;
    const currentPosition = getPositionX(e);
    setCurrentTranslate(prevTranslate + currentPosition - startPos);
  };

  const touchEnd = () => {
    setIsDragging(false);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -75) {
      nextSlide();
    } else if (movedBy > 75) {
      prevSlide();
    }

    setCurrentTranslate(0);
    setPrevTranslate(0);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button 
          onClick={prevSlide} 
          className="arrow"
          aria-label="Previous review"
        >
          <ChevronLeft />
        </button>

        <div 
          className="review-container"
          ref={sliderRef}
          onMouseDown={touchStart}
          onMouseMove={touchMove}
          onMouseUp={touchEnd}
          onMouseLeave={() => isDragging && touchEnd()}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
        >
          <div 
            className={`review-card ${isAnimating ? 'animating' : ''} ${isAnimating ? direction : ''}`}
          >
            <div className="content">
              <img 
                src={reviews[currentIndex].image} 
                alt={reviews[currentIndex].name}
                className="avatar"
              />
              <div className="text-content">
                <div className="quote-container">
                  <p className="review-text">&quot;{reviews[currentIndex].text}&quot;</p>
                </div>
                <div className="author-info">
                  <h3 className="name">{reviews[currentIndex].name}</h3>
                  <p className="position">{reviews[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={nextSlide} 
          className="arrow"
          aria-label="Next review"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="dots">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider;