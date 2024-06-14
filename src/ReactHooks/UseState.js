import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const IncrementFunc = () => {
    setCount(count + 1);
  };
  const DecrementFunnc = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncrementFunc}>Increment</button>
      <button onClick={DecrementFunnc}>Decrement</button>
    </div>
  );
}

export default UseState;

//i am creating a simple counter component with useState react hook to get the sytax of it
