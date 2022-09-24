import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Countdown from "./Countdown";

const RunGame = ({
  userChoice,
  setUserChoice,
  computerChoice,
  setComputerChoice,
  userPoints,

  setUserPoints,
  count,
  setCount,
  result,
  turnResult,
  setTurnResult,

  setGameOver,
}) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleReplay = () => {
    setTurnResult(null);
    setUserChoice("");
    setComputerChoice("");
    setCount(3);
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
    if (count === 0) {
      if (
        comboMoves === "scissorspaper" ||
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock"
      ) {
        setTurnResult("User wins!");
      }

      if (
        comboMoves === "paperscissors" ||
        comboMoves === "scissorsrock" ||
        comboMoves === "rockpaper"
      ) {
        setTurnResult("Computer wins!");
      }

      if (
        comboMoves === "paperpaper" ||
        comboMoves === "rockrock" ||
        comboMoves === "scissorsscissors"
      ) {
        setTurnResult("No one gets a point!");
      }
    }
  }, [computerChoice, userChoice, setTurnResult, count]);

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
              onClick={() => handleReplay()}
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
