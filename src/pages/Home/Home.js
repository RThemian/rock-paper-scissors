import React from "react";

const Home = () => {
  return (
    <>
      <div className="bg-secondary d-flex flex-row-reverse">
        <div className="rounded m-4">
          <img alt="volume" src="/images/volume.png" />
        </div>
      </div>

      <div className="container text-white text-center mt-4">
        <h1 className="display-1">ROCK PAPER SCISSORS</h1>
        <div>
          <img alt="" src="/images/rock" />
          <img alt="" src="/images/paper" />
          <img alt="" src="/images/scissors" />
        </div>
      </div>
    </>
  );
};

export default Home;
