import React from "react";
import "./Footer.css";

// images 
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">WEB LOGO</h2>
          <p className="footer-description">
            Some footer text about the Agency. Just a little description to help people understand you better
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#" className="social-icon">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#" className="social-icon">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="#" className="social-icon">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="footer-middle">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3 className="footer-title">Address</h3>
          <address className="footer-address">
            Design Agency Head Office.<br />
            Airport Road<br />
            United Arab Emirate
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">Copyright Design Agency 2022</p>
      </div>
    </footer>
  );
};

export default Footer;