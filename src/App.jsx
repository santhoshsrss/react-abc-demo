import { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { MovieList } from "./MovieList";
import { TicTacToe } from "./TicTacToe";
import { Welcome } from "./Welcome";
function App() {
  
//   const napic = [

//     {name : "santhosh", 
//     pic : "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
//     },
//    { name : "sanjayan",
//     pic : "https://wallpapers.com/images/featured/qzytdg8xliuaelun.jpg"
//     },
//     {name : "Sakthivel",
//     pic : "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/10/20/16662224157675.jpg"
//     },
//     {name : "Renuka",
//     pic : "https://assets-prd.ignimgs.com/2021/03/23/black-widow-button-1616528351974.jpg"
//     },
// ];
return (
    <div className="App">
      {/* <Counter /> */}
      {/* {napic.map((nm) => {
      return <Welcome 
      name = {nm.name}
      pic = {nm.pic}
      />})} */}
      {/* <Dlike /> */}
      {/* <TicTacToe /> */}
      <MovieList />
    </div>
  );
}
export default App