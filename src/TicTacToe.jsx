import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export function TicTacToe() {
  const { width, height } = useWindowSize()
  const [board, setboard] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true)
  const handclick = (index) => {
    if(!winner && board[index] === null){
      const boardCopy = [...board];
      boardCopy[index] = isTurn? "X": "O";
      setboard(boardCopy)
      setIsTurn(!isTurn)
    }

  }
  const decidethewinner = (board) => {
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
      for (let i = 0; i < lines.length; i++)  {
        const [a, b, c] = lines[i];
        if (board[a] !=null && board[a]===board[b] && board[b]===board[c]){
          console.log("winner", board[a])
          return board[a];
        }        
      }
      return null;
  }

  const winner = decidethewinner(board);
  const restartGame = () =>{
    setboard(Array(9).fill(null));
    setIsTurn(true)
  }

  return (
    <div className="tic-tac-toe">
    {winner ? <Confetti width={width} height={height} gravity = {0.05} wind ={0.01} /> : null}
      <h2>TicTacToe Game</h2>
      <div className="board">
        {board.map((val, index) => 
        <GameBox val= {val} findindexvalue = {() => handclick(index)}
        /> )}
      </div>
      <Button onClick={restartGame} variant="contained">Restart</Button>
      {winner ? <p>The winner is: {winner}</p> : null}
    </div>
  );
}

function GameBox({val, findindexvalue}){
  // const [val, setval] = useState("")
  const styles = {
    color : val === "X" ? "Green" : "Red", 
  }
  return (
    <div style={styles} onClick = {findindexvalue} className = "game-box">
      
      {val}
    
    </div>
  )
}
