import { useState, createContext, useContext } from "react";

const themeCtx = createContext();
export function ThemeMode() {
  const [mode, setMode] = useState("light");
  const styles = {
    background: mode === "light" ? "white":"black"  
  };
  return (
    <themeCtx.Provider value={[mode, setMode]}>
      <div style={styles} className="Appsd">
        <List />
      </div>
    </themeCtx.Provider>
  );
}
// List, ListItem - free from props
const List = () => (
  <ul>
    <ListItem value="Light 💡" />
    <ListItem value="Dark 🌙" />
  </ul>
);
const ListItem = ({ value }) => (
  <li>
    <Button value={value} />
  </li>
);
const Button = ({ value }) => {
  const [mode, setMode] = useContext(themeCtx);

  const styles = {
    background: mode === "light" ? "black" : "white",
    color: mode === "light" ?  "white" : "black"
  };

  return (
    <button
      style={styles}
      onClick={() => setMode(value === "Light 💡" ? "light" : "dark")}
    >
      {value}
    </button>
  );
};
