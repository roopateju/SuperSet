import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Navbar.css';


const Navbar = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
    
        <Link to="/" className="navbar-logo">
          <img src="/img/Logo.jpg" alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="navbar-links">
        <ul className="navbar-main-links">
          <li><Link to="/universities">Universities</Link></li>
          <li><Link to="/employers">Employers</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>

        <ul className="navbar-secondary-links">
          <li><Link to="/contact">Contact Sales</Link></li>
          <li><Link to="/security">Security</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
