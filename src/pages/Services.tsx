import { FlipCard } from '../components/FlipCard';

export function Services() {
  const services = [
    {
      id: 1,
      title: 'Kitchen Units',
      description: 'Custom-built kitchen cabinets and islands tailored to your space, optimizing both functionality and premium aesthetics.',
      imageSrc: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Sitting Room Design',
      description: 'Elegant seating arrangements, bespoke TV units, and comprehensive spatial planning for an inviting living area.',
      imageSrc: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Bedroom Wardrobes',
      description: 'Spacious, custom-fitted wardrobes and bedroom furniture crafted from high-quality materials for your sanctuary.',
      imageSrc: 'https://images.pexels.com/photos/5712133/pexels-photo-5712133.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Office Partitions',
      description: 'Modern glass and wood office partitions that enhance privacy while maintaining an open, collaborative environment.',
      imageSrc: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Dining Sets',
      description: 'Exquisite dining tables and comfortable chairs designed to bring family and friends together in style.',
      imageSrc: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Interior Design Consulting',
      description: 'Full-service interior design from conceptualization to execution, ensuring your vision becomes a reality.',
      imageSrc: 'https://images.pexels.com/photos/7061320/pexels-photo-7061320.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="page-container" style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <div className="section-header text-center">
          <h1>Our Services</h1>
          <p>Hover over our domains to discover how we can elevate your lifestyle.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((service) => (
            <FlipCard 
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
