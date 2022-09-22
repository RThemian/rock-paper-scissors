import React, { useState } from "react";
import useSound from "use-sound";
import gameMusicElectric from "../sounds/gameMusicElectric.mp3";

const VolumeBanner = () => {
  const [play, { stop }] = useSound(gameMusicElectric); //here
  //toggle between play and stop
  const [isPlaying, setIsPlaying] = useState(true);
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
    <div className="bg-secondary d-flex flex-row-reverse">
      <div>
        <button className="bg-secondary rounded-5" onClick={playMusic}>
          <img alt="volume" src="/images/volume.png" className="bg-secondary" />
        </button>
      </div>
    </div>
  );
};

export default VolumeBanner;
