import React, { useState } from 'react'
import ticTacToe from '../../../styles/component/tictactoe/ticTacToe.css'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''))  
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
    [2, 4, 5]
  ];

  const switchPlayer = () => {
    setPlayer((prevPlayer) => (prevPlayer === 'X' ? 'O' : 'X'));
}

  const handleClick = (index) => {
    if (board[index] === '') {
      const updatedBoard = [...board];
      updatedBoard[index] = player;
      setBoard(updatedBoard);
      checkWinner(updatedBoard, player);
      switchPlayer();
    } else {
      alert('Try another field');
    }
  };

  const checkWinner = (currentBoard, currentPlayer) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;

      if (
        currentBoard[a] === currentPlayer &&
        currentBoard[b] === currentPlayer &&
        currentBoard[c] === currentPlayer
      ) {
        setWinner(currentPlayer);
        alert(`Player ${currentPlayer} wins!`);
        break;
      }
    }
  };


  return (
    <div className='tic-tac-toe'>
      <div className="grid-buttons">
        <input 
        className='one' 
        name='one' 
        type="button" 
        onClick={() => handleClick(0)} 
        value={board[0]}
        />
        <input 
        className='two' 
        name='two' 
        type="button"  
        onClick={() => handleClick(1)}  
        value={board[1]}
        />
        <input 
        className='three' 
        name='three' 
        type="button"  
        onClick={() => handleClick(2)}  
        value={board[2]}
        />
        <input 
        className='four' 
        name='four' 
        type="button" 
        onClick={() => handleClick(3)}  
        value={board[3]}
        />
        <input 
        className='five' 
        name='five' 
        type="button" 
        onClick={() => handleClick(4)}  
        value={board[4]}
        />
        <input 
        className='six' 
        name='six' 
        type="button"  
        onClick={() => handleClick(5)}  
        value={board[5]}
        />
        <input 
        className='seven' 
        name='seven' 
        type="button" 
        onClick={handleClick(6)}  
        value={board[6]}
        />
        <input 
        className='eight' 
        name='eight' 
        type="button" 
        onClick={() => handleClick(7)}  
        value={board[7]}
        />
        <input 
        className='nine' 
        name='nine' 
        type="button" 
        onClick={() => handleClick(8)}  
        value={board[8]}
        />
      </div>
      
    </div>
  )
}

export default TicTacToe


