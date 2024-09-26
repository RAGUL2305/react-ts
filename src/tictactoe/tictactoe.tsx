import React, { SetStateAction, useState } from "react";
import "./tictactoe.css";
import _ from "lodash";

function Game() {
  const [option, setOption] = useState<null[] | string[]>(Array(9).fill(null));
  const [value, setValue] = useState<boolean>(true);
  const [winner, setWinner] = useState<null | string>(null);

  const handleClick = (index: number): void => {
    if (option[index] || winner) {
      return;
    }
    const newBoard = option;
    newBoard[index] = value ? "X" : "O";
    setOption(newBoard);
    setValue(!value);

    const selecetdWinner: React.SetStateAction<string | null> =
      finalWinner(newBoard);
    setWinner(selecetdWinner);
  };

  const finalWinner = (
    option: string[] | null[]
  ): SetStateAction<string | null> => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (option[a] && option[a] === option[b] && option[a] === option[c]) {
        return option[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setOption(Array(9).fill(null));
    setValue(true);
    setWinner(null);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="inputbutton">
        {option.map((item, index) => (
          <button
            className="game-button"
            key={index}
            onClick={() => handleClick(index)}
          >
            {option[index]}
          </button>
        ))}
      </div>
      <div>
        <h2>
          {winner
            ? `Winner: ${winner}`
            : _.without(option, null).length === 9
            ? "MATCH IS DRAW"
            : null}
        </h2>
      </div>
      <div>
        <button className="resetbutton" onClick={resetGame}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Game;
