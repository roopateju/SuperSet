import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';

const Home = () => {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem('user');
  //   navigate('/login');
  // };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <h2>Welcome to the Home Page</h2>
        {/* <p>Thank you for logging in! You can now explore the app.</p> */}
        {/* <button className="logout-btn" onClick={handleLogout}>Logout</button> */}
      </div>
    </div>
  );
};

export default Home;
