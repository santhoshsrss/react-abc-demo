import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setmovieList }) {
  const [name, setname] = useState("");
  const [poster, setposter] = useState("");
  const [rating, setrating] = useState("");
  const [summary, setsummary] = useState("");
  const [trailer, settrailer] = useState("");
  return (
    <div>
      <div className="add-movie-form">
        <TextField id="outlined-basic" label="Movie Name" variant="outlined"
          onChange={(event) => setname(event.target.value)}
          type="text" />
        <TextField id="outlined-basic" label="Poster" variant="outlined"
          onChange={(event) => setposter(event.target.value)}
          type="text" />
        <TextField id="outlined-basic" label="Rating" variant="outlined"
          onChange={(event) => setrating(event.target.value)}
          type="text" />
        <TextField id="outlined-basic" label="Summary" variant="outlined"
          onChange={(event) => setsummary(event.target.value)}
          type="text" />
        <TextField id="outlined-basic" label="trailer" variant="outlined"
          onChange={(event) => settrailer(event.target.value)}
          type="text" />
        <Button variant="contained"
          onClick={() => {
            const newmovie = {
              name: name,
              poster: poster,
              summary: summary,
              rating: rating,
              trailer: trailer,
            };
            setmovieList([...movieList, newmovie]);
          }}
        >
          Add Movie
        </Button>

      </div>
    </div>
  );
}

