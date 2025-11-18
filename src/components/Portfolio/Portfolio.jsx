import React from "react";
import "./Portfolio.css";

// Card images
import card1 from "../../assets/card-1.png";
import card2 from "../../assets/card-2.png";
import card3 from "../../assets/card-3.png";
import card4 from "../../assets/card-4.png";

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <p className="portfolio-subtitle">OUR PORTFOLIO</p>
          <h2 className="portfolio-title">
            We provide the Perfect Solution<br />
            to your business growth
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {/* Card 1 */}
            <div className="col-lg-6">
              <div className="portfolio-card">
                <div className="card-image-wrapper">
                  <img src={card1} alt="Digital Marketing Agency Website" className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Digital Marketing Agency Website</h3>
                  <p className="card-description">
                    This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-6">
              <div className="portfolio-card">
                <div className="card-image-wrapper">
                  <img src={card2} alt="Digital Marketing Agency Website" className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Digital Marketing Agency Website</h3>
                  <p className="card-description">
                    This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-6">
              <div className="portfolio-card">
                <div className="card-image-wrapper">
                  <img src={card3} alt="Digital Marketing Agency Website" className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Digital Marketing Agency Website</h3>
                  <p className="card-description">
                    This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}q
            <div className="col-lg-6 ">
              <div className="portfolio-card">
                <div className="card-image-wrapper">
                  <img src={card4} alt="Digital Marketing Agency Website" className="card-image" />
                </div>
                <div className="card-content">
                  <h3 className="card-title">Digital Marketing Agency Website</h3>
                  <p className="card-description">
                    This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;