import React from "react";
import "./Provide.css";

// Card images
import business from "../../assets/business.png";
import loyalty from "../../assets/loyalty.png";
import model from "../../assets/model.png";

// Optional: Remove unused imports (or fix typo if used later)
// import project from "../../assets/project.png";
// import satisfaction from "../../assets/satisfaction.png";
// import clients from "../../assets/clients.png";
// import businessyears from "../../assets/businessyears.png"; // Fixed name

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
            <p className="provide-card-text">
              We help identify the best ways to improve your business
            </p>
            <a href="#" className="card-link">
              Learn More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Card 2 */}
          <div className="provide-card">
            <div className="card-icon-box">
              <img src={loyalty} alt="Improve Brand Loyalty" />
            </div>
            <h3 className="provide-card-title">Improve Brand Loyalty</h3>
            <p className="provide-card-text">
              We help identify the best ways to improve your business
            </p>
            <a href="#" className="card-link">
              Learn More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Card 3 */}
          <div className="provide-card">
            <div className="card-icon-box">
              <img src={model} alt="Improve Business Model" />
            </div>
            <h3 className="provide-card-title">Improve Business Model</h3>
            <p className="provide-card-text">
              We help identify the best ways to improve your business
            </p>
            <a href="#" className="card-link">
              Learn More
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* ✅ Only two divs opened inside "provide-container":
             → provide-header
             → provide-cards
             So only two need closing — done above.
        */}
      </div>
    </section>
  );
};

export default Provide;