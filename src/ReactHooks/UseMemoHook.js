import React, { useMemo, useState } from "react";

function UseMemoHook() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const addFunc = () => {
    setAdd(add + 1);
  };

  const subtractFunc = () => {
    setMinus(minus - 1);
  };


  const multiplication = useMemo(function multiply(){
    console.log("*****************")
     return add*10;
  },[add])
  return (
    <div>
      <h2> UseMemoHook </h2>
      <p>{multiplication}</p>
      <h1>{add}</h1>
      <button onClick={addFunc}>Addition</button>
      <h1>{minus}</h1>
      <button onClick={subtractFunc}>Substraction</button>
    </div>
  );
}

export default UseMemoHook;

//useMemo hook is used to enhance the performance of react app
// it returned memoized value
