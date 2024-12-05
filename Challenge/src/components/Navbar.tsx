import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/about">
          Maurice Zuniga
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/portfolio' ? 'active' : ''}`}>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/resume' ? 'active' : ''}`}>
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
