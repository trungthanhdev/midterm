import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`); 
  };


  if (!movie) return null;

  return (
    <div className="card shadow-sm" onClick={handleClick}>
      {movie.image ? (
        <img
          src={movie.image} 
          alt={movie.title}
          className="card-img-top"
          loading="lazy"
        />
      ) : (
        <div className="text-center p-5 bg-light">No Image</div>
      )}
      <div className="card-body">
        <h5 className="card-title">{movie.title || 'Unknown Title'}</h5>
        <p className="card-text text-muted">
          Price: {movie.price ? `$${movie.price}` : 'Not available'}
        </p>
        {movie.rating && (
          <p className="card-text">
            Rating: {movie.rating.rate} ({movie.rating.count} reviews)
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
