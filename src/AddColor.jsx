import { useState } from "react";

export function AddColor() {
  const [color, setcolor] = useState("");
  const styles = {
    background: color,
  };
  const [colorlist, setcolorlist] = useState(["crimson", "blue", "orange", "yellow", "darkgreen"]);
  return (
    <div>
      <input
        style={styles}
        type="text" placeholder="Enter the color"
        onChange={(event) => setcolor(event.target.value)}
        value={color} />
      <button onClick={() => setcolorlist([...colorlist, color])}>
        Add Color
      </button>
      {colorlist.map((clr) => (
        <Colorbox color={clr} />

      ))}

    </div>
  );
}
function Colorbox({ color }) {
  const styles = {
    width: "250px",
    height: "20px",
    margin: "5px 0px",
    background: color,
  };
  return (
    <div style={styles}></div>
  );
}
