import './FlipCard.css';

interface FlipCardProps {
  imageSrc: string;
  title: string;
  description: string;
  altText?: string;
}

export function FlipCard({ imageSrc, title, description, altText }: FlipCardProps) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt={altText || title} className="flip-card-img" />
          <div className="flip-card-front-content">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="flip-card-back">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="btn btn-tan flip-card-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}
