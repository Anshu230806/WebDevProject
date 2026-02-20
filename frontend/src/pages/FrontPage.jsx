import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div className="frontpage-container">
      <div className="hero-section">
        <h1>🩸 Blood Donation</h1>
        <p>Save Lives by Donating Blood</p>
        <button 
          onClick={() => navigate('/login-as-donor')}
          className="donor-btn"
        >
          Register as Donor
        </button>
      </div>
    </div>
  );
};

export default FrontPage;