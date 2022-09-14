import { useEffect, useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown";

const App = () => {
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);
  const choices = ["rock", "paper", "scissors"];

  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  const reset = () => {
    window.location.reload();
  };

  const [count, setCount] = useState(3);

  useEffect(() => {
    const comboMoves = userChoice + computerChoice;
    if (userPoints <= 4 && computerPoints <= 4) {
      if (
        comboMoves === "scissorspaper" ||
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock"
      ) {
        // userPoints.current += 1
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
    <div className="App">
      <h1 className="heading">Rock-Paper-Scissors</h1>
      <div className="score">
        <h1>User Points: {userPoints}</h1>
        <h1>Computer Points: {computerPoints}</h1>
      </div>

      <div className="choice container">
        <div className="choice-computer">
          <h2>COMPUTER</h2>
          <img
            className="computer-hand"
            src={`/images/${computerChoice}.png`}
            alt=""
          />
        </div>

        <Countdown count={count} setCount={setCount} />

        <div class="container">
          <div class="row">
            <h2>USER</h2>
            <div className="button-div">
              {choices.map((choice, index) => (
                <button
                  className="button"
                  key={index}
                  onClick={() => handleClick(choice)}
                  disabled={gameOver}
                >
                  {choice}
                </button>
              ))}
            </div>
            <div class="col-sm">
              <button>
                <img className="user-hand" src={`/images/rock.png`} alt="" />
              </button>
            </div>
            <div class="col-sm">
              <button>
                <img className="user-hand" src={`/images/paper.png`} alt="" />
              </button>
            </div>
            <div class="col-sm">
              <button>
                <img
                  className="user-hand"
                  src={`/images/scissors.png`}
                  alt=""
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="button-div">
        {choices.map((choice, index) => (
          <button
            className="button"
            key={index}
            onClick={() => handleClick(choice)}
            disabled={gameOver}
          >
            {choice}
          </button>
        ))}
      </div>

      <div className="result">
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>

      <div className="button-div">
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Restart Game?
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
