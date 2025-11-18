import React from "react";
import "./Herosection.css";

// images
import Right from "../../assets/rightimage.png";
import google from "../../assets/google.png";
import trello from "../../assets/trello.png";
import monday from "../../assets/monday.png";
import notion from "../../assets/notion.png";
import slack from "../../assets/slack.png";

const Herosection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Increase Your <br />
            Customers Loyalty <br />
            and Satisfaction
          </h1>
          <p className="hero-subtitle">
            We help businesses like yours earn more customers, <br />
            standout from competitors, make more money
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="hero-image-container">
          <img src={Right} alt="Woman holding laptop" className="main-image" />
        </div>
      </div>
      
      {/* Logos section */}
      <div className="logos-section">
        <div className="logo-item">
          <img src={google} alt="Google" className="logo" />
        </div>
        <div className="logo-item">
          <img src={trello} alt="Trello" className="logo" />
        </div>
        <div className="logo-item">
          <img src={monday} alt="Monday.com" className="logo" />
        </div>
        <div className="logo-item">
          <img src={notion} alt="Notion" className="logo" />
        </div>
        <div className="logo-item">
          <img src={slack} alt="Slack" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;