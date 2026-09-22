import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';
import PlayerStats from '../playerStats/PlayerStats';

const links = [
  { to: '/', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="header">
      <div className="header-inner">
        <PlayerStats />
        <nav className="nav">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                isActive ? 'nav-link current' : 'nav-link'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
