import { useState } from "react";


export function Welcome({ name, pic }) {
  return (
    <div>
      <img className="user-img" src={pic} alt={name} />
      <h3 className="user-name">Hello, {name} 🤩</h3>
      <Dlike />
    </div>
  );
}
function Dlike(){
  const[like, setlike] = useState(0);
  const[dislike, setdislike] = useState(0);
  return(
    <div className="likdis">
      <button onClick={() => setlike(like+1) }>👍{like}</button>
      <button onClick={() => setdislike(dislike+1) }>👎{dislike}</button>
    </div>
  )
}
