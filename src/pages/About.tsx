import { Link } from 'react-router-dom';
import aboutUsImg from '../assets/about_us.jpg';

export function About() {
  return (
    <div className="page-container" style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="section-header text-center">
          <h1>About Us</h1>
          <p>The story behind SILPA Furniture Suppliers & Designers Limited.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img 
              src={aboutUsImg} 
              alt="Beautiful interior design" 
              style={{ borderRadius: '8px', boxShadow: 'var(--shadow-lg)', width: '100%' }}
            />
          </div>
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Crafting Excellence in Kenya</h2>
            <p style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
              SILPA Furniture Suppliers & Designers Limited was founded with a passion for excellence in interior spaces. Based in Kenya, we have grown into a premier provider of bespoke furniture and holistic interior design solutions.
            </p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
              Our expertise spans across residential and commercial projects. From the warmth of a custom kitchen to the productivity-enhancing layout of an office partition, our team of skilled craftsmen and designers brings dedication to every detail.
            </p>
            <Link to="/contact" className="btn btn-primary">Work With Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
