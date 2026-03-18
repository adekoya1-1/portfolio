import { FiTwitter, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo">Precious<span>.</span></div>
            <p>Full-stack developer based in Lagos, Nigeria. Building production-ready web products for brands that mean business.</p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/web-development">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#" aria-label="Twitter"><FiTwitter size={18} /></a>
              <a href="#" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
              <a href="#" aria-label="GitHub"><FiGithub size={18} /></a>
              <a href="mailto:hello@precious.dev" aria-label="Email"><FiMail size={18} /></a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2025 Precious. All rights reserved.</p>
          <p>Built with <span className="footer-accent">React + Vite</span></p>
        </div>
      </div>
    </footer>
  );
}
