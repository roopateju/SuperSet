import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email</label>
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

        <button type="submit" className="submit-btn">Login</button>
      </form>

      <p className="signup-link">Don't have an account? <Link to="/signup">Signup here</Link></p>
    </div>
  );
};

export default Login;
