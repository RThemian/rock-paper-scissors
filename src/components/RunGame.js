import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "./Countdown";

const RunGame = ({
  userChoice,
  computerChoice,
  userPoints,
  computerPoints,
  setUserPoints,
  count,
  setCount,
  result,
  turnResult,
  setTurnResult,
  setResult,
  setGameOver,
  setComputerPoints,
}) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  const countStyleWin = {
    color: "gold",
    fontSize: "30px",
  };
  const countStyleLose = {
    color: "red",
    fontSize: "30px",
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
        setTurnResult("User wins!");
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
        setTurnResult("Computer wins!");
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
        <h4
          style={turnResult === "User wins!" ? countStyleWin : countStyleLose}
        >
          {turnResult}{" "}
        </h4>
        {count !== 0 ? <Countdown count={count} setCount={setCount} /> : ""}
        {turnResult !== null ? (
          <div className="mt-1 text-center">
            <button
              onClick={() => window.location.reload()}
              type="button"
              className="btn btn-danger btn-lg m-2"
            >
              <h4 className="display-6">Play Again?</h4>
            </button>

            <button
              onClick={handleHomeClick}
              type="button"
              className="btn btn-primary btn-lg"
            >
              <h2 className="display-6">Home</h2>
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
