// import { useState } from "react";
// export  function Photos(){
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
//   return(
//     <div>
//       {napic.map((nm) => {
//           return <Welcome 
//           name = {nm.name}
//           pic = {nm.pic}
//       />})}
//     </div>
//   )
// }

// function Welcome({ name, pic }) {
//   return (
//     <div>
//       <img className="user-img" src={pic} alt={name} />
//       <h3 className="user-name">Hello, {name} 🤩</h3>
//       <Dlike />
//     </div>
//   );
// }
// function Dlike(){
//   const[like, setlike] = useState(0);
//   const[dislike, setdislike] = useState(0);
//   return(
//     <div className="likdis">
//       <button onClick={() => setlike(like+1) }>👍{like}</button>
//       <button onClick={() => setdislike(dislike+1) }>👎{dislike}</button>
//     </div>
//   )
// }
