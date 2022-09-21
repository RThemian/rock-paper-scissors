import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import gameMusicElectric from "../../sounds/gameMusicElectric.mp3";
import VolumeBanner from "./../../components/VolumeBanner";

const Home = () => {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate("/app");
    // play();
  };

  return (
    <>
      <VolumeBanner />

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
