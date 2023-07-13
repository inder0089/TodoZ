import React, { useEffect, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(59);
  const [startTimer, setStartTimer] = useState(false);

  let timer;

  useEffect(() => {
    if (startTimer) {
      handleTime();
    }

    return () => {
      clearInterval(timer);
    };
  });

  const handleTime = () => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds === 1) {
      setMinutes(minutes - 1);
      setSeconds(59);
    } else if (minutes === 0 && seconds === 59) {
      reset();
    }
  };
  const reset = () => {
    setMinutes(5);
    setSeconds(59);
    setStartTimer(false);
  };

  const stop = () => {
    clearInterval(timer);
    setStartTimer(false);
  };

  return (
    <div className="timer-body">
      <div className="container">
        <div className="timer">
          <h1>Timer</h1>
          <h1>
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>

          <button onClick={reset}>Reset</button>
          <button onClick={stop}>Stop</button>
          <button onClick={() => setStartTimer(true)}>start</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
