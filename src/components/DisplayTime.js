import React from "react";

const DisplayTime = ({ timer }) => {
  let seconds = Math.floor((timer / 1000) % 60);
  let minutes = Math.floor((timer / (1000 * 60)) % 60);
  let hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
  let milliseconds = Math.floor((timer % 1000) / 10);

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;
  milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

  return (
    <div className="timer">
      {hours}:{minutes}:{seconds}:{milliseconds}
    </div>
  );
};

export default DisplayTime;
