import React, { useState } from "react";

const COLORS = ["blue", "gray", "darkgray", "darkblue", "purple"];

function Colors() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onLoli = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="Colors"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onLoli(color)}
          className={backgroundColor === color ? "selected" : ""}
          style={{
            backgroundColor,
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default Colors;
