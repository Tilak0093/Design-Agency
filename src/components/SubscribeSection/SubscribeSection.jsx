import React, { useState } from 'react';
import './SubscribeSection.css';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing email:', email);
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <p className="subscribe-label">SUBSCRIBE</p>
        <h2 className="subscribe-title">
          Subscribe To Get The Latest<br />News About Us
        </h2>
        <p className="subscribe-description">
          Please Drop Your Email Below To Get Daily Update About What We Do
        </p>

        <div className="subscribe-input-wrapper">
          <input
            type="email"
            className="email-input"
            placeholder="Enter Your Email Adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSubscribe} className="subscribe-button">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;