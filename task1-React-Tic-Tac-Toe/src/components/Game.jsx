import React, { useState } from "react";
import { calculateWinner } from "../Helpers";
import Board from "./Board";

const style = {
    width: "200px",
    margin: "20px auto",
};
const game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));

    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    };

    const jumpTo = () => {};

    const renderMoves = () => {
        return (
            <button onClick={() => setBoard(Array(9).fill(null))}>
                Start Game
            </button>
        );
    };

    return (
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board squares={board} onclick={handleClick} />
            <div style={style}>
                <p>
                    {winner
                        ? "Winner: " + winner
                        : "Next player: " + (xIsNext ? "X" : "0")}
                </p>
                {renderMoves()}
            </div>
        </div>
    );
};

export default game;
