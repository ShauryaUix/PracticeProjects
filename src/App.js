import React, { useEffect, useState } from "react";
import DisplayTime from "./components/DisplayTime";
import './index.css';

const App = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval = null;
    if (!isPaused)
      interval = setInterval(() => setTimer((timer) => timer + 10), 10);
    else clearInterval(interval);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleStart = () => {
    setIsPaused(false);
  };
  const handleResume = () => {
    setIsPaused(true);
  };
  const handleReset = () => {
    setIsPaused(true);
    setTimer(0);
  };

  return (
    <div className="watch-wrapper">
      <DisplayTime timer={timer} />

      <div className="options">
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
        {!isPaused ? (
          <button className="resume" onClick={handleResume}>
            pause
          </button>
        ) : (
          <button className="resume" onClick={handleStart}>
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
