import React, { useEffect, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  let timer;
  useEffect(() => {
    if (startTimer) {
      handleTime();
    }

    return () => {
      clearInterval(timer);
    };
  }, [startTimer, seconds]);

  const handleTime = () => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    if (seconds === 59) {
      setMinutes(minutes + 1);
      setSeconds(0);
    } else if (minutes === 1) {
      stop();
    }
  };
  const reset = () => {
    setMinutes(0);
    setSeconds(0);
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
