import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InfoIcon from '@mui/icons-material/Info';
import { Navigate, useNavigate } from "react-router-dom";
export function MovieList({movieList, setmovieList}) {
 
  return (

      <div className="movie-list">
        
          {movieList.map((mv, index) => (
            <Movie key ={index}  movie={mv} id = {index} />
          ))}
      
      </div>
  );
}
function Movie({ movie, id }) {
  const styles = {
    color: movie.rating >= 8.5 ? "green" :"crimson"
  }
  const[show, setshow]= useState(true)
  const navigate = useNavigate()
  // const summarystyle = {
  //   display: show ? 'block':'none'
  // }
  return (
    <Card className="movie-container">
          <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <CardContent>
        <div className="movie-specs">
            <h2 className="movie-name">{movie.name}
                <IconButton onClick={() => setshow(!show)}
                aria-label="Movie summary"
                color = "primary"
              >
                { show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
              <IconButton
              onClick={() => navigate(`/movie/${id}`)}
                aria-label="Movie Trailer"
                color = "primary"
              >
                <InfoIcon />
              </IconButton>
              
              
          </h2>
              <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
        </div>
        {/* conditional styling - only update the styles */}
        {/* <p style={summarystyle} className="movie-summary">{movie.summary}</p> */}
        
        {/* conditional rendering - Remove from DOM */}
        { show ? <p className="movie-summary">{movie.summary}</p> : null }
      </CardContent>

      <Dlike />
    </Card>
  );
}

function Dlike(){
  const[like, setlike] = useState(0);
  const[dislike, setdislike] = useState(0);
  useEffect(() => {
    console.log("Like value is updated : ",dislike )
  },[dislike, like])
  return(
    <div className="likdis">
      <CardActions>
        <IconButton
          onClick={() => setlike(like+1)}
          aria-label="delete"
          color="primary"
        >
          <Badge badgeContent={like} color="primary">
            👍
          </Badge>
        </IconButton>
        <IconButton
            onClick={() => setdislike(dislike+1) }
            aria-label="delete"
            color="error"
        >
          <Badge badgeContent={dislike} color="primary">
            👎
          </Badge>
        </IconButton>
      </CardActions>

    </div>
  )
}


