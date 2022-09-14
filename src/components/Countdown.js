import React, { useEffect } from "react";

const Countdown = ({ count, setCount }) => {
  useEffect(() => {
    if (count === 0) return; //undefined to break useEffect
    const interval = setInterval(() => {
      console.log("This will run every second!");
      setCount((count) => count - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Countdown;
