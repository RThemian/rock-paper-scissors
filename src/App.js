import { useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown";
import RunGame from "./components/RunGame";
import VolumeBanner from "./components/VolumeBanner";

const App = () => {
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);
  const choices = ["rock", "paper", "scissors"];
  const [isSelected, setIsSelected] = useState(false);

  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const handleClick = (value) => {
    setUserChoice(value);
    setIsSelected(true);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    setComputerChoice(randomChoice);
  };

  const reset = () => {
    window.location.reload();
  };

  const [count, setCount] = useState(5);

  //need to add component that controls the flow of the game here

  return (
    <>
      <VolumeBanner />
      <div className="title container">
        <h1 className="display-1">Rock-Paper-Scissors</h1>
      </div>
      <div className="App">
        <div className="choice container">
          <div className="choice-computer">
            <h2>COMPUTER {computerChoice ? computerChoice : ""}</h2>
            <div className="button-div-computer">
              {choices.map((choice, index) => (
                //bring this button code to the images instead, can I map to those images this way?

                <button
                  key={index}
                  className="m-4 bg-primary rounded-3"
                  onClick={() => handleClick(choice)}
                  disabled={true}
                >
                  {choice === "rock" ? (
                    <img
                      className={
                        computerChoice === "rock" ? "button-highlighted" : ""
                      }
                      src={`/images/rock.png`}
                      alt=""
                    />
                  ) : choice === "paper" ? (
                    <img
                      className={
                        computerChoice === "paper" ? "button-highlighted" : ""
                      }
                      src={`/images/paper.png`}
                      alt=""
                    />
                  ) : (
                    <img
                      className={
                        computerChoice === "scissors"
                          ? "button-highlighted"
                          : ""
                      }
                      src={`/images/scissors.png`}
                      alt=""
                    ></img>
                  )}
                </button>
              ))}
            </div>
          </div>

          <RunGame
            count={count}
            userChoice={userChoice}
            computerChoice={computerChoice}
            userPoints={userPoints}
            computerPoints={computerPoints}
            setUserPoints={setUserPoints}
            turnResult={turnResult}
            setTurnResult={setTurnResult}
            result={result}
            setResult={setResult}
            setGameOver={setGameOver}
            setComputerPoints={setComputerPoints}
          />
          <Countdown count={count} setCount={setCount} />

          <div class="container">
            <div class="row">
              <h2>USER {userChoice ? userChoice : ""}</h2>
              <div className="button-div-user">
                {choices.map((choice, index) => (
                  //bring this button code to the images instead, can I map to those images this way?

                  <button
                    className="m-4 bg-primary rounded-3"
                    key={index}
                    onClick={() => handleClick(choice)}
                    disabled={gameOver}
                  >
                    {choice === "rock" ? (
                      <img
                        className={
                          userChoice === "rock"
                            ? "button-highlighted"
                            : "button-div-user"
                        }
                        src={`/images/rock.png`}
                        alt=""
                      />
                    ) : choice === "paper" ? (
                      <img
                        className={
                          userChoice === "paper"
                            ? "button-highlighted"
                            : "button-div-user"
                        }
                        src={`/images/paper.png`}
                        alt=""
                      />
                    ) : (
                      <img
                        className={
                          userChoice === "scissors"
                            ? "button-highlighted"
                            : "button-div-user"
                        }
                        src={`/images/scissors.png`}
                        alt=""
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="button-div">
          {gameOver && (
            <button
              type="button"
              className="btn btn-warning font-weight-bold"
              onClick={() => reset()}
            >
              Restart Game?
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
