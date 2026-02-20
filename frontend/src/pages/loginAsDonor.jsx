import React, { useState } from 'react';
import './loginAsDonor.css';
import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
const LoginAsDonor = () => {
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: '',
    city: '',
    phone: '',
    email: '',
    age: '',
    availability: '',
    lastDonated: ''
  });

  const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate(); 
    
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const availabilityOptions = ['Available', 'Not Available', 'Emergency Only'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donor Details:', formData);
    setSubmitted(true);
  };

  return (
    <div className="donor-container">
      <div className="donor-form-card">
        <h1>Blood Donor Registration</h1>
        <p>Please fill your details to register as a donor</p>

        {submitted ? (
          <div className="success-message">
            <h2>Thank You for Registering! 🩸</h2>
            <p>You are now registered as a blood donor.</p>
            <button onClick={() => setSubmitted(false)} className="reset-btn">
              Register Another Donor
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="donor-form">
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Blood Group:</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
              >
                <option value="">Select Blood Group</option>
                {bloodGroups.map(group => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10 digit mobile number"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Your age"
                min="18"
                max="65"
                required
              />
            </div>

            <div className="form-group">
              <label>Availability:</label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
              >
                <option value="">Select Availability</option>
                {availabilityOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Last Donated:</label>
              <input
                type="date"
                name="lastDonated"
                value={formData.lastDonated}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Register as Donor
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginAsDonor;