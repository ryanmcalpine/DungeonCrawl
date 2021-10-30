import React from "react";

export default function Sprite({ image, data }) {
    const { x, y, w, h } = data;
    return (
      <div
          style={{
              display: "inline-block",
              width: `${w}px`,
              height: `${h}px`,
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: `-${x}px -${y}px`
          }}
      />
    );
}