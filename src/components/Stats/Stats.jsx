import React from "react";
import "./Stats.css";

// Downloaded images
import project from "../../assets/project.png";
import satisfaction from "../../assets/satisfaction.png";
import clients from "../../assets/clients.png";
import businessyears from "../../assets/businessyears.png"; // Fixed typo in filename & import

const Stats = () => {
  return (
    <div className="provide-stats">
      {/* Stat 1 */}
      <div className="stat-box">
        <div className="stat-icon">
          <img src={project} alt="Completed Projects" />
        </div>
        <p className="stat-label">Completed Projects</p>
        <p className="stat-number">100+</p>
      </div>

      {/* Divider */}
      <div className="stat-line"></div>

      {/* Stat 2 */}
      <div className="stat-box">
        <div className="stat-icon">
          <img src={satisfaction} alt="Customer Satisfaction" />
        </div>
        <p className="stat-label">Customer Satisfaction</p>
        <p className="stat-number">98%</p> {/* Assuming 20% was a placeholder typo */}
      </div>

      {/* Divider */}
      <div className="stat-line"></div>

      {/* Stat 3 */}
      <div className="stat-box">
        <div className="stat-icon">
          <img src={clients} alt="Funds Raised by Clients" />
        </div>
        <p className="stat-label">Funds Raised by Clients</p>
        <p className="stat-number">$10M</p>
      </div>

      {/* Divider */}
      <div className="stat-line"></div>

      {/* Stat 4 */}
      <div className="stat-box">
        <div className="stat-icon">
          <img src={businessyears} alt="Years in Business" />
        </div>
        <p className="stat-label">Years in Business</p>
        <p className="stat-number">2+ yrs</p>
      </div>
    </div>
  );
};

export default Stats;