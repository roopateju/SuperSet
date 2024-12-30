import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import './App.css';  

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-content">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
