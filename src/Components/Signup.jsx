import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    localStorage.setItem('user', JSON.stringify(formData));
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Create an Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>

      <p className="login-link">Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Signup;
