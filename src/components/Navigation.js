import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/swipertest">Swipertest</Link>
      <Link to="/clock">Clock</Link>
      <Link to="/momenttime">Momenttime</Link>
    </div>
  );
}

export default Navigation;
