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
      <h1 className="display-1">You have {count} seconds to decide</h1>
    </div>
  );
};

export default Countdown;
