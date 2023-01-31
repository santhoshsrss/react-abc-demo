import { useState, createContext, useContext } from "react";

const creatCtx = createContext();
export function Parent() {
  const [count, setcount] = useState(0);

  return (
    <creatCtx.Provider value={[count, setcount]}>
      <div>
        <h1>I am parent</h1>
        <Child />
      </div>
    </creatCtx.Provider>
  );
}
function Child() {
  return (
    <div>
      <h1>I am Child</h1>
      <GrandChild />
    </div>
  );
}
function GrandChild() {
  const [count, setcount] = useContext(creatCtx);
  return (
    <div>
      <h1>I am GrandChild</h1>
      <button onClick={() => { setcount(count + 1); }}>+</button>
      count : {count}
      <button onClick={() => { setcount(count - 1); }}>-</button>
    </div>
  );
}
