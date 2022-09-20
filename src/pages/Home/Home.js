import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import gameMusicElectric from "../../sounds/gameMusicElectric.mp3";

// const BoopButton = () => {
//   const [play] = useSound(boopSfx); //here
//   return <button onClick={play}>Boop!</button>;//here === ()=>{play()}
// };

const Home = () => {
  const navigate = useNavigate();
  const [play, { stop }] = useSound(gameMusicElectric); //here

  const handlePlay = () => {
    navigate("/app");
    // play();
  };
  //toggle between play and stop
  const [isPlaying, setIsPlaying] = useState(false);
  const playMusic = () => {
    // const [playCorrect] = useSound(correctSound
    setIsPlaying((isPlaying) => !isPlaying);
    if (isPlaying) {
      play();
    } else {
      stop();
    }
    //const [playIncorrect] = useSound(incorrectSound, { volume: 0.5 });
  };

  return (
    <>
      <div className="bg-secondary d-flex flex-row-reverse">
        <div className="rounded m-4">
          <button className="rounded" onClick={playMusic}>
            <img alt="volume" src="/images/volume.png" />
          </button>
        </div>
      </div>

      <div className="container text-white text-center mt-4 mb-5">
        <h1 className="display-1 fw-bold">ROCK PAPER SCISSORS</h1>
        <div>
          <img alt="rock" src="/images/rock.png" />
          <img alt="paper" src="/images/paper.png" />
          <img alt="scissors" src="/images/scissors.png" />
        </div>
      </div>
      <div className="mt-5 text-center">
        <button
          onClick={handlePlay}
          type="button"
          className="btn btn-primary btn-lg"
        >
          <h2 className="display-5">Play</h2>
        </button>
      </div>
    </>
  );
};

export default Home;
