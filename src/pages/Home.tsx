import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import aboutUsImg from '../assets/about_us.jpg';
import './Home.css';

export function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Crafting Your Ideal Space</h1>
          <p>Premium bespoke furniture and interior design tailored for the modern Kenyan lifestyle.</p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-tan">View Portfolio</Link>
            <Link to="/contact" className="btn btn-secondary" style={{color: 'white', borderColor: 'white'}}>Request Quote</Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-light">
        <div className="container intro-container">
          <div className="intro-text">
            <h2>Welcome to SILPA Furniture Suppliers & Designers Limited</h2>
            <p className="lead">
              We specialize in creating breathtaking environments through expertly crafted furniture
              and state-of-the-art interior design.
            </p>
            <p>
              Whether you are looking for custom kitchen units, a cozy bedroom makeover, 
              or professional office partitions, our team of dedicated craftsmen and designers 
              ensure every detail is perfect. Experience elegance, function, and comfort combined.
            </p>
            <ul className="feature-list">
              <li><CheckCircle size={20} className="feature-icon" /> Custom Kitchen Units</li>
              <li><CheckCircle size={20} className="feature-icon" /> Premium Wardrobes & Bedroom Sets</li>
              <li><CheckCircle size={20} className="feature-icon" /> Luxurious Sitting Room Designs</li>
              <li><CheckCircle size={20} className="feature-icon" /> Modern Office Partitions</li>
            </ul>
            <Link to="/about" className="btn btn-primary" style={{marginTop: '2rem'}}>Learn More About Us</Link>
          </div>
          <div className="intro-image-wrapper">
            <img 
              src={aboutUsImg} 
              alt="Beautiful interior design" 
              className="intro-image"
            />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="text">Years of<br/>Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Expertise</h2>
            <p>Comprehensive interior solutions under one roof.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Kitchen Design" />
              <div className="service-content">
                <h3>Bespoke Kitchens</h3>
                <p>Functional, modern, and aesthetically pleasing kitchen units fabricated to fit your culinary needs perfectly.</p>
                <Link to="/services" className="service-link">Discover More <ArrowRight size={16} /></Link>
              </div>
            </div>
            
            <div className="service-card">
              <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sitting Room" />
              <div className="service-content">
                <h3>Sitting Rooms</h3>
                <p>Luxurious seating, entertainment centers, and ambient setups that make your living room the heart of the home.</p>
                <Link to="/services" className="service-link">Discover More <ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="service-card">
              <img src="https://images.pexels.com/photos/5712133/pexels-photo-5712133.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Bedroom Wardrobes" />
              <div className="service-content">
                <h3>Bedrooms & Wardrobes</h3>
                <p>Cozy sanctuaries built with custom wardrobes, beds, and nightstands for maximum comfort and storage.</p>
                <Link to="/services" className="service-link">Discover More <ArrowRight size={16} /></Link>
              </div>
            </div>
            
            <div className="service-card">
              <img src="https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Office Partition" />
              <div className="service-content">
                <h3>Office Partitions</h3>
                <p>Professional, sleek, and sound-optimized partitioned spaces designed for maximum productivity.</p>
                <Link to="/services" className="service-link">Discover More <ArrowRight size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to Transform Your Space?</h2>
          <p>Get in touch with us today for a free consultation and bring your vision to life.</p>
          <Link to="/contact" className="btn btn-tan">Request a Quote</Link>
        </div>
      </section>
    </div>
  );
}
