export function TicTacToe() {
  return (
    <div>
      <h2>TicTacToe Game</h2>
      <GameBox />
    </div>
  );
}

function GameBox(){
  const val ="X"
  return (
    <div className = "game-box">{val}</div>
  )
}
