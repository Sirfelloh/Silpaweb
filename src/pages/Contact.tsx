import { Mail, Phone, MapPin } from 'lucide-react';
import './Contact.css';

export function Contact() {
  return (
    <div className="contact-page" style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h1>Get in Touch</h1>
            <p className="contact-lead">
              Ready to transform your space? We are here to bring your vision to life with our premium furniture and design services.
            </p>
            
            <div className="info-cards">
              <div className="info-card">
                <div className="icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3>Our Showroom</h3>
                  <p>Kariobangi South<br/>Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="icon-wrapper">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Call Us</h3>
                  <p>+254 723 808 074<br/>+254 20 808 0740</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="icon-wrapper">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>ssfurnitures2016@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="quote-form-container">
            <h2>Request a Quote</h2>
            <form className="quote-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your full name" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Enter your phone number" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select id="service" required>
                  <option value="">Select a service</option>
                  <option value="kitchen">Kitchen Units</option>
                  <option value="bedroom">Bedroom & Wardrobes</option>
                  <option value="sitting-room">Sitting Room Design</option>
                  <option value="office">Office Partitions</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" rows={5} placeholder="Tell us more about your project requirements..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">Send Request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
