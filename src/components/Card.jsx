
import '../components/Card.css';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
