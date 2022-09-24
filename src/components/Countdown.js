import React, { useEffect } from "react";

const Countdown = ({ count, setCount }) => {
  const countStyle = {
    color: "gold",
    fontSize: "70px",
  };

  useEffect(() => {
    if (count === -1) return; //undefined to break useEffect
    const interval = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count, setCount]);

  return (
    <div>
      <h4>
        You have <span style={countStyle}>{count}</span> seconds to decide
      </h4>
    </div>
  );
};

export default Countdown;
