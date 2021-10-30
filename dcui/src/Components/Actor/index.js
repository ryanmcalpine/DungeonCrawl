import React from "react";
import Sprite from "../Sprite";

export default function Actor({ sprite, data, step = 0}) {
    const { w, h } = data;
    return (
        <Sprite
            image={sprite}
            data={{
                x: 0,
                y: 0,
                w,
                h
            }}
        />
    );
}
