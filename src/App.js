import { useState } from "react";
import "./App.css";
import classnames from "classnames";
import RunGame from "./components/RunGame";
import VolumeBanner from "./components/VolumeBanner";

const App = () => {
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");

  const choices = ["rock", "paper", "scissors"];

  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  const handleClick = (value) => {
    setUserChoice(value);

    generateComputerChoice();
  };
  const [count, setCount] = useState(3);

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    setComputerChoice(randomChoice);
  };

  //need to add component that controls the flow of the game here

  return (
    <>
      <VolumeBanner />
      <div className="title container">
        <h1>Rock-Paper-Scissors</h1>
      </div>
      <div className="App">
        <div className="choice container">
          <div className="choice-computer">
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
                      className={classnames(
                        computerChoice === "rock" && "button-highlighted",
                        computerChoice === "paper" ||
                          computerChoice === "scissors"
                          ? "button-dark"
                          : ""
                      )}
                      src={`/images/rock.png`}
                      alt="rock"
                      height="142"
                      width="242"
                    />
                  ) : choice === "paper" ? (
                    <img
                      className={classnames(
                        computerChoice === "paper" && "button-highlighted",
                        computerChoice === "rock" ||
                          computerChoice === "scissors"
                          ? "button-dark"
                          : ""
                      )}
                      src={`/images/paper.png`}
                      alt="paper"
                      height="142"
                      width="242"
                    />
                  ) : (
                    <img
                      className={classnames(
                        computerChoice === "scissors" && "button-highlighted",
                        computerChoice === "paper" || computerChoice === "rock"
                          ? "button-dark"
                          : ""
                      )}
                      src={`/images/scissors.png`}
                      alt="scissors"
                      height="142"
                      width="242"
                    ></img>
                  )}
                </button>
              ))}
            </div>
          </div>

          <RunGame
            userChoice={userChoice}
            setUserChoice={setUserChoice}
            computerChoice={computerChoice}
            setComputerChoice={setComputerChoice}
            count={count}
            setCount={setCount}
            userPoints={userPoints}
            computerPoints={computerPoints}
            setUserPoints={setUserPoints}
            turnResult={turnResult}
            setTurnResult={setTurnResult}
            result={result}
            setResult={setResult}
            setComputerPoints={setComputerPoints}
          />

          <div class="container">
            <div class="row">
              <div className="button-div-user">
                {choices.map((choice, index) => (
                  //bring this button code to the images instead, can I map to those images this way?

                  <button
                    className="m-4 bg-primary rounded-3"
                    key={index}
                    onClick={() => handleClick(choice)}
                    disabled={turnResult !== null || count > 0}
                  >
                    {choice === "rock" ? (
                      <img
                        className={classnames(
                          userChoice === "rock" && "button-highlighted",
                          userChoice === "paper" || userChoice === "scissors"
                            ? "button-dark"
                            : ""
                        )}
                        src={`/images/rock.png`}
                        alt="rock"
                        height="142"
                        width="242"
                      />
                    ) : choice === "paper" ? (
                      <img
                        className={classnames(
                          userChoice === "paper" && "button-highlighted",
                          userChoice === "rock" || userChoice === "scissors"
                            ? "button-dark"
                            : ""
                        )}
                        src={`/images/paper.png`}
                        alt="paper"
                        height="142"
                        width="242"
                      />
                    ) : (
                      <img
                        className={classnames(
                          userChoice === "scissors" && "button-highlighted",
                          userChoice === "rock" || userChoice === "paper"
                            ? "button-dark"
                            : ""
                        )}
                        src={`/images/scissors.png`}
                        alt="scissors"
                        height="142"
                        width="242"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
