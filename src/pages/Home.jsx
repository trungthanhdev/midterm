import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = "https://fakestoreapi.com/products";

    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies
    .filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (searchTerm ? a.price - b.price : 0));

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center fw-bold">Popular Clothes</h1>

    
      <div className="input-group mb-4">
        <span className="input-group-text">🔍</span>
        <input
          type="text"
          className="form-control"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Hiển thị trạng thái loading */}
      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-2">Loading movies...</p>
        </div>
      ) : (
        <div className="row">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <MovieCard movie={movie} />
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No movies found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
