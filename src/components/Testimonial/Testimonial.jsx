import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css";

// Import assets (assuming paths are correct as per your structure)
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import avatar from "../../assets/card-icon.png";

const Testimonial = () => {
  const swiperRef = useRef(null);

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
      name: "John Smith",
      title: "Founder, Tech Solutions",
      avatar: avatar,
    },
    {
      id: 3,
      text: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      name: "Sarah Johnson",
      title: "Director, Creative Agency",
      avatar: avatar,
    },
    {
      id: 4,
      text: "Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service",
      name: "Michael Brown",
      title: "CEO, Digital Marketing",
      avatar: avatar,
    },
  ];

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
            <button 
              onClick={() => swiperRef.current?.slidePrev()} 
              className="nav-button prev"
              aria-label="Previous testimonial"
            >
              <img src={leftArrow} alt="Previous" />
            </button>
            <button 
              onClick={() => swiperRef.current?.slideNext()} 
              className="nav-button next"
              aria-label="Next testimonial"
            >
              <img src={rightArrow} alt="Next" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards with Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;