import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenus}>
          <span className="logo-text">Precious</span>
          <span className="logo-dot">.</span>
        </Link>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenus} className="nav-link">Home</Link>

          <div className="nav-dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Projects {dropdownOpen ? '▲' : '▼'}
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/web-development" onClick={closeMenus} className="dropdown-item">All Projects</Link>
                <hr className="dropdown-divider" />
                <a href="/web-development#ecommerce" onClick={closeMenus} className="dropdown-item">E-Commerce Platforms</a>
                <a href="/web-development#corporate" onClick={closeMenus} className="dropdown-item">Corporate Sites</a>
                <a href="/web-development#webapps" onClick={closeMenus} className="dropdown-item">Web Applications</a>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={closeMenus} className="nav-link">Contact</Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
    </nav>
  );
}
