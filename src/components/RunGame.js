import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RunGame = ({
  userChoice,
  computerChoice,
  userPoints,
  computerPoints,
  setUserPoints,
  count,
  result,
  turnResult,
  setTurnResult,
  setResult,
  setGameOver,
  setComputerPoints,
}) => {
  const [controlTurn, setControlTurn] = useState(false);
  const navigate = useNavigate();
  const handlePlayAgain = () => {
    navigate("/app");
  };
  const handleClickRound = () => {
    setInterval(() => {
      setControlTurn(true);
    }, 500);
    setControlTurn(false);
  };

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4 && count === 0) {
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
      <div>
        <h3>Turn Result: {turnResult} </h3>
        {turnResult !== null ? (
          <div className="mt-5 text-center">
            <button
              onClick={() => window.location.reload()}
              type="button"
              className="btn btn-danger btn-lg"
            >
              <h2 className="display-1">Play Again?</h2>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default RunGame;
