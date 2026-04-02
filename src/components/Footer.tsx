import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="logo footer-logo">
            <img src="/logo.png" alt="SILPA Logo" className="logo-icon-img" style={{height: '32px'}} />
            <div className="logo-text">
              <span className="logo-title" style={{color: 'var(--color-white)'}}>SILPA</span>
              <span className="logo-subtitle">Furniture Suppliers & <br/>Designers Limited</span>
            </div>
          </Link>
          <p className="footer-about">
            Crafting elegance and comfort for your spaces. From luxurious bespoke furniture to complete interior design solutions in Kenya.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a> &bull; 
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Portfolio</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Kitchen Units</Link></li>
            <li><Link to="/services">Sitting Room Design</Link></li>
            <li><Link to="/services">Bedroom & Wardrobes</Link></li>
            <li><Link to="/services">Office Partitions</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} />
              <span>Kariobangi South</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+254 723 808 074<br/>+254 20 808 0740</span>
            </li>
            <li>
              <Mail size={18} />
              <span>ssfurnitures2016@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SILPA Furniture Suppliers & Designers Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
