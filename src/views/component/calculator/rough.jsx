import React, { Component } from "react";
import "./calculatorApp.css";

const TicTac = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const switchPlayer = () => {
    setPlayer(player === 'X' ? 'O' : 'X');
  }

  const handleClick = (index) => {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      switchPlayer();
      checkWinner(newBoard, player);
    } else {
      alert("Try another field");
    }
  }

  const checkWinner = (board, currentPlayer) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        board[a] === currentPlayer &&
        board[b] === currentPlayer &&
        board[c] === currentPlayer
      ) {
        setWinner(currentPlayer);
        alert(`Player ${currentPlayer} wins!`);
        return;
      }
    }
  }

  return (
    <div className='tic-tac-toe'>
      <div className="grid-buttons">
        <input className='one' name='one' type="button" value={board[0]} onClick={() => handleClick(0)} />
        <input className='two' name='two' type="button" value={board[1]} onClick={() => handleClick(1)} />
        <input className='three' name='three' type="button" value={board[2]} onClick={() => handleClick(2)} />
        <input className='four' name='four' type="button" value={board[3]} onClick={() => handleClick(3)} />
        <input className='five' name='five' type="button" value={board[4]} onClick={() => handleClick(4)} />
        <input className='six' name='six' type="button" value={board[5]} onClick={() => handleClick(5)} />
        <input className='seven' name='seven' type="button" value={board[6]} onClick={() => handleClick(6)} />
        <input className='eight' name='eight' type="button" value={board[7]} onClick={() => handleClick(7)} />
        <input className='nine' name='nine' type="button" value={board[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  )
}

export default TicTac;