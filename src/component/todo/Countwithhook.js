import { React, useState } from "react";

const useCount = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(initialValue);
  };
  return { count, increment, decrement, reset };
};

const Countwithhook = () => {
  const { count, increment, decrement, reset } = useCount(0);
  return (
    <div>
      <h1>Count</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={reset} disabled={count === 0}>
        Reset
      </button>
    </div>
  );
};

export default Countwithhook;
