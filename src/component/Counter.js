import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} disabled={count === 0}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
