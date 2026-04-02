import { FlipCard } from '../components/FlipCard';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Modern Riverside Villa',
      description: 'Complete interior overhaul focusing on open-plan living and bespoke kitchen fitted with smart storage solutions.',
      imageSrc: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Kilimani Executive Offices',
      description: 'Sound-proof glass partitioning and ergonomic furniture supply for a tech startup in Nairobi.',
      imageSrc: 'https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Elegant Master Suite',
      description: 'Custom walk-in wardrobes, a floating bed design, and ambient lighting for ultimate relaxation.',
      imageSrc: 'https://images.pexels.com/photos/5712133/pexels-photo-5712133.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Lavington Luxury Kitchen',
      description: 'A contemporary minimalist kitchen featuring matte navy cabinets, marble countertops, and island seating.',
      imageSrc: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Westlands Co-Working Space',
      description: 'Modular desks, privacy booths, and vibrant lounge furniture crafted to inspire creativity and collaboration.',
      imageSrc: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Muthaiga Family Room',
      description: 'A warm, tan-accented family room with a custom-built entertainment center and plush sectional seating.',
      imageSrc: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="page-container" style={{ paddingTop: '100px', paddingBottom: '4rem', backgroundColor: 'var(--color-navy)', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header text-center" style={{ color: 'var(--color-white)' }}>
          <h1 style={{ color: 'var(--color-white)' }}>Our Portfolio</h1>
          <p style={{ color: 'var(--color-tan-light)' }}>Explore our recent projects. Hover over an image to learn more.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projects.map((project) => (
            <FlipCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
