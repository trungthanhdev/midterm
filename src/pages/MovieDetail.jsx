
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Loading details...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-outline-primary mb-3">Back</Link>

      <div className="card shadow-lg border-0">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={movie.image}
              alt={movie.title}
              className="img-fluid rounded-start"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fw-bold">{movie.title}</h2>
              <p className="text-muted fst-italic">Category: {movie.category}</p>
              <p className="card-text">{movie.description}</p>

              <h4 className="text-danger fw-bold">Price: ${movie.price}</h4>

              {movie.rating && (
                <p className="card-text">
                  <span className="text-warning">Rating: {movie.rating.rate}</span> ({movie.rating.count} reviews)
                </p>
              )}

              <button
                className="btn btn-primary mt-3"
                onClick={() => navigate(`/purchase-info/${id}`)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
