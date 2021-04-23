import React from "react";
import Square from "./Squares";

const style = {
    border: "4px solid darkblue",
    borderRadius: "15px",
    width: "248px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    overflow: "hidden",
};

const board = ({ squares, onclick }) => {
    return (
        <div>
            <div style={style}>
                {squares.map((square, i) => {
                    return (
                        <Square
                            key={i}
                            value={square}
                            onClick={() => onclick(i)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default board;
