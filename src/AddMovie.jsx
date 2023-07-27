import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import {API} from './global';


const formvalidation = yup.object({
  name: yup.string().required(),

  poster: yup.string().required().min(4),

  rating: yup.number().required().min(1).max(10),

  summary: yup.string().required().min(20),

  trailer: yup.string().required().min(5).url(),
});

export function AddMovie() {
  const { handleSubmit, touched, errors, values, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        summary: "",
        rating: "",
        trailer: "",
      },
      validationSchema: formvalidation,
      onSubmit: (newmovie) => {
        console.log("Form Values: ", newmovie);
        addMovie(newmovie);
      },
    });

  const navigate = useNavigate();
  const addMovie = async (newmovie) => {
    console.log(newmovie);
    await fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newmovie),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/Movie");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-movie-form">
        <TextField
          name="name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.name}
          label="Name"
          variant="outlined"
          type="text"
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : null}
        />

        <TextField
          name="poster"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.poster}
          label="Poster"
          variant="outlined"
          type="text"
          error={touched.poster && errors.poster}
          helperText={touched.poster && errors.poster ? errors.poster : null}
        />

        <TextField
          name="rating"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.rating}
          label="Rating"
          variant="outlined"
          type="text"
          error={touched.rating && errors.rating}
          helperText={touched.rating && errors.rating ? errors.rating : null}
        />

        <TextField
          name="summary"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.summary}
          label="Summary"
          variant="outlined"
          type="text"
          error={touched.summary && errors.summary}
          helperText={touched.summary && errors.summary ? errors.summary : null}
        />

        <TextField
          name="trailer"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.trailer}
          label="trailer"
          variant="outlined"
          type="text"
          error={touched.trailer && errors.trailer}
          helperText={touched.trailer && errors.trailer ? errors.trailer : null}
        />

        <Button variant="contained" type="submit">
          Add Movie
        </Button>
      </form>
    </div>
  );
}
