import React from "react";
import "./Provide.css";

// card images 
import business from "../../assets/business.png";
import loyalty from "../../assets/loyalty.png";
import model from "../../assets/model.png";

// down images 
import project from "../../assets/project.png";
import satisfaction from "../../assets/satisfaction.png";
import clients from "../../assets/clients.png";
import buinessyears from "../../assets/businessyears.png";

const Provide = () => {
  return (
    <section className="provide-section">
      <div className="provide-container">
        {/* Header */}
        <div className="provide-header">
          <p className="provide-subtitle">WHAT WE DO</p>
          <h2 className="provide-title">
            We provide the Perfect Solution<br />
            to your business growth
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="provide-cards">
          {/* Card 1 */}
          <div className="provide-card">
            <div className="card-icon-box">
              <img src={business} alt="Grow Your Business" />
            </div>
            <h3 className="provide-card-title">Grow Your Business</h3>
            <p className="provide-card-text">We help identify the best ways to improve your business</p>
            <a href="#" className="card-link">
              Learn More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Card 2 */}
          <div className="provide-card">
            <div className="card-icon-box">
              <img src={loyalty} alt="Improve brand loyalty" />
            </div>
            <h3 className="provide-card-title">Improve brand loyalty</h3>
            <p className="provide-card-text">We help identify the best ways to improve your business</p>
            <a href="#" className="card-link">
              Learn More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Card 3 */}
          <div className="provide-card">
            <div className="card-icon-box">
              <img src={model} alt="Improve Business Model" />
            </div>
            <h3 className="provide-card-title">Improve Business Model</h3>
            <p className="provide-card-text">We help identify the best ways to improve your business</p>
            <a href="#" className="card-link">
              Learn More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="provide-stats">
          {/* Stat 1 */}
          <div className="stat-box">
            <div className="stat-icon">
              <img src={project} alt="Completed Projects" />
            </div>
            <p className="stat-label">Completed Projects</p>
            <p className="stat-number">100 +</p>
          </div>

          {/* Divider */}
          <div className="stat-line"></div>

          {/* Stat 2 */}
          <div className="stat-box">
            <div className="stat-icon">
              <img src={satisfaction} alt="Customer Satisfaction" />
            </div>
            <p className="stat-label">Customer Satisfaction</p>
            <p className="stat-number">20 %</p>
          </div>

          {/* Divider */}
          <div className="stat-line"></div>

          {/* Stat 3 */}
          <div className="stat-box">
            <div className="stat-icon">
              <img src={clients} alt="Raised by Clients" />
            </div>
            <p className="stat-label">Raised by Clients</p>
            <p className="stat-number">$10M</p>
          </div>

          {/* Divider */}
          <div className="stat-line"></div>

          {/* Stat 4 */}
          <div className="stat-box">
            <div className="stat-icon">
              <img src={buinessyears} alt="Years in Business" />
            </div>
            <p className="stat-label">Years in Business</p>
            <p className="stat-number">2 yrs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;