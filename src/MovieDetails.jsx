import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export function MovieDetails({ movieList }) {
  const { san } = useParams();
  const movie = movieList[san];
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "crimson"
  };
  const navigate = useNavigate(-1);
  return (
    <div>
      <iframe
        width="100%"
        height="650px"
        src={movie.trailer}
        title="Marvel Studios’ Ant-Man and The Wasp: Quantumania | New Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
      </iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name"> {movie.name} </h2>
          <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
        </div>
        {/* conditional styling - only update the styles */}
        <p className="movie-summary">{movie.summary}</p>
      </div>
      <Button
        onClick={() => navigate(-1)}
        variant="contained">
        BACK
      </Button>
    </div>
  );
}
