import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import Layout4 from './Layout4';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Layout1 />
      <Layout2 />
      <Layout3 />
      <Layout4 />
      </div>
  );
};

export default Home;
