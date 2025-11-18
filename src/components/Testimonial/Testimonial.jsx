import React, { useState } from "react";
import "./Testimonial.css";

// Import assets (assuming paths are correct as per your structure)
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import avatar from "../../assets/card-icon.png";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      name: "Emily Stones",
      title: "CEO, Marketing Guru",
      avatar: avatar,
    },
    {
      id: 2,
      text: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      name: "Emily Stones",
      title: "CEO, Marketing Guru",
      avatar: avatar,
    },
    {
      id: 3,
      text: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      name: "Emily Stones",
      title: "CEO, Marketing Guru",
      avatar: avatar,
    },
    {
      id: 4,
      text: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      name: "Emily Stones",
      title: "CEO, Marketing Guru",
      avatar: avatar,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Header Section */}
        <div className="testimonial-header">
          <div className="header-content">
            <p className="section-title">TESTIMONIALS</p>
            <h2 className="section-subtitle">
              See What Our Customer<br />Say About Us
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="nav-buttons">
            <button onClick={handlePrev} className="nav-button prev">
              <img src={leftArrow} alt="Previous" />
            </button>
            <button onClick={handleNext} className="nav-button next">
              <img src={rightArrow} alt="Next" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="testimonial-cards">
          {[0, 1, 2].map((offset) => {
            const cardIndex = (currentIndex + offset) % testimonials.length;
            const testimonial = testimonials[cardIndex];

            return (
              <div key={`${testimonial.id}-${offset}`} className="testimonial-card">
                <p className="testimonial-text">{testimonial.text}</p>
                
                <div className="testimonial-footer">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="avatar"
                  />
                  <div className="user-info">
                    <h4 className="user-name">{testimonial.name}</h4>
                    <p className="user-title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;