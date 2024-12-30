import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
