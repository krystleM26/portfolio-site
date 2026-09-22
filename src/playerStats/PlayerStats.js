import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Krystle/1.png';
import '../styles/playerStats.css';

export default function PlayerStats() {
  return (
    <Link to="/" className="brand">
      <span className="brand-mark">
        <img src={logo} alt="" />
      </span>
      <span className="brand-text">
        <span className="brand-name">Krystle Mitchell</span>
        <span className="brand-role">Fullstack Developer</span>
      </span>
    </Link>
  );
}
