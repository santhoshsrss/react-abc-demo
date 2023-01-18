import "./App.css";
export default function App() {
  const names = ["santhosh", "sanjayan", "Kumar"];
  const napic = [

      {name : "santhosh", 
      pic : "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
      },
     { name : "sanjayan",
      pic : "https://wallpapers.com/images/featured/qzytdg8xliuaelun.jpg"
      },
      {name : "Ram",
      pic : "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/10/20/16662224157675.jpg"
      },
  ];
  return (
    <div className="App">
    {/* <Msg name = "santhosh" 
    pic = "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
    />
    <Msg name = "sanjayan"
    pic = "https://wallpapers.com/images/featured/qzytdg8xliuaelun.jpg"
    />
    <Msg name = "Ram"
    pic = "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/10/20/16662224157675.jpg"
    /> */}
    {/* //! New function welcome */}
    {/* <Welcome name = {names} /> */}
    {/* //! This methode is used for loop a value n number of times for [DRY] */}
    {napic.map((usr) => <Welcome 
    name = {usr.name}
    pic = {usr.pic}
    />
    )}
    </div>
  );
}
// function Msg({name, pic}) {
//   return(
//     <div>
//       <img className="user-img" src={pic} alt="img" />
//       <h2 className="user-name">Hi, I am {name}</h2>
//     </div>
//   );
// }
function Welcome({name,pic}){

  return(
    <div>
      <img className="user-img" src={pic} alt="img" />
      <h2 className="user-name">Hi, I am {name} </h2>
    </div>
  )
}