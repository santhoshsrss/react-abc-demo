import { AddColor } from "./AddColor";
import "./App.css";
import { Counter } from "./Counter";
import { MovieList } from "./MovieList";
import { TicTacToe } from "./TicTacToe";
import { Photos } from "./Photos";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { useState,createContext, useContext, useEffect } from "react";
import { MovieDetails } from "./MovieDetails";
import { Notapage } from "./Notapage";
import { Home } from "./Home";
import { Parent } from "./Parent";
import { ThemeMode } from "./ThemeMode";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Margin } from "@mui/icons-material";
import { AddMovie } from "./AddMovie";
function App() {
  
  const navigate = useNavigate();
  const [mode, setmode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const bgstyles = {
          borderRadius : '0px',
          minHeight : "100vh"
  }
  const [movieList, setmovieList] = useState([]);



return (
  <ThemeProvider theme={darkTheme}>
    <Paper sx = {bgstyles} elevation={4}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Button onClick={() => navigate("/")} color="inherit">HomePage</Button>
            <Button onClick={() => navigate("/TicTacToe")} color="inherit">TicTacToe Game</Button>
            <Button onClick={() => navigate("/Movie")} color="inherit">Movies</Button>
            <Button onClick={() => navigate("/AddColor")} color="inherit">Color Game</Button>
            <Button onClick={() => navigate("/Movie/addmovie")} color="inherit">Add Movies</Button>
            <Button
                sx = { {marginLeft: "auto"}} 
                onClick={() => setmode(mode === "light" ? "dark" : "light" )} 
                color="inherit"
                startIcon = {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}   
            >   
               {mode === "light" ? "dark" : "light"} Mode         
            </Button>
           
          </Toolbar>
        </AppBar>
        {/* <Counter /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/films" element={<Navigate replace to = "/Movie" /> } />
          <Route path="/Movie" element={<MovieList movieList = {movieList} setmovieList = {setmovieList} />} />
          <Route path="/Movie/:san" element={<MovieDetails movieList = {movieList} />} />
          <Route path="/Movie/addmovie" element={<AddMovie movieList = {movieList} setmovieList = {setmovieList}/>} />
          <Route path="/AddColor" element={<AddColor />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/theme" element={<ThemeMode />} />
          <Route path="/*" element={<Notapage />} />
      
        </Routes>
        {/* <Parent /> */}
      </div>
    </Paper>
  </ThemeProvider>
  );
}





export default App; //! default export