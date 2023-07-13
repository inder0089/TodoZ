import React, { useEffect, useState } from "react";

const StopTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMillisecond] = useState(0);
  const [starttime, setStartTime] = useState(false);

  let timer;
  useEffect(() => {
    if (starttime) {
      start();
    }

    return () => {
      clearInterval(timer); //component will unmount
    };
  });

  const start = () => {
    timer = setInterval(() => {
      console.log(milliseconds + 1);
      setMillisecond(milliseconds + 1);
    }, 10);

    if (milliseconds === 59) {
      setSeconds(seconds + 1);
      setMillisecond(0);
    } else if (seconds === 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
    } else if (minutes === 2) {
      reset();
    }
  };

  const reset = () => {
    setMillisecond(0);
    setSeconds(0);
    setMinutes(0);
    setStartTime(false);
  };

  const stop = () => {
    clearInterval(timer);
    setStartTime(false);
  };

  return (
    <div>
      <h1>
        {/* {minutes}: {seconds}: {milliseconds} */}
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}:
        {milliseconds < 10 ? "0" + milliseconds : milliseconds}
      </h1>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>Stop</button>
      <button onClick={() => setStartTime(true)}>Start</button>
    </div>
  );
};

export default StopTimer;
