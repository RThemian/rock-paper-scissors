import React, { useEffect, useState } from "react";

const RunGame = ({
  userChoice,
  computerChoice,
  userPoints,
  computerPoints,
  setUserPoints,
  result,
  turnResult,
  setTurnResult,
  setResult,
  setGameOver,
  setComputerPoints,
}) => {
  const [controlTurn, setControlTurn] = useState(false);
  const handleClickRound = () => {
    setInterval(() => {
      setControlTurn(true);
    }, 500);
    setControlTurn(false);
  };

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4 && controlTurn) {
      if (
        comboMoves === "scissorspaper" ||
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock"
      ) {
        const updatedUserPoints = userPoints + 1;
        setUserPoints(updatedUserPoints);
        setTurnResult("User gets the point!");
        if (updatedUserPoints === 5) {
          setResult("User Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        const updatedComputerPoints = computerPoints + 1;
        setComputerPoints(updatedComputerPoints);
        setTurnResult("Computer gets the point!");
        if (updatedComputerPoints === 5) {
          setResult("Computer Wins");
          const gameOff = true;
          setGameOver(gameOff);
        }
      }

      if (
        comboMoves === "paperpaper" ||
        comboMoves === "rockrock" ||
        comboMoves === "scissorsscissors"
      ) {
        setTurnResult("No one gets a point!");
      }
    }
  }, [computerChoice, userChoice]);

  return (
    <>
      <div className="score">
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>
      <div className="result">
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickRound}
        >
          Check who wins
        </button>
      </div>
    </>
  );
};

export default RunGame;
