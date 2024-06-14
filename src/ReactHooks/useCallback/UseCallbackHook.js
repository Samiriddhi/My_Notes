import React, { useCallback, useState } from "react";
import ChildA from "./ChildA";

function UseCallbackHook() {
  const [add, setAdd] = useState(0);

  const[count, setCount] = useState(0);
  const addFunc = () => {
    setAdd(add + 1);
  };

  const Learning = useCallback( () => {
    //some operation
  },[count])

  
  return (
    <div>
      <h3>UseCallBack React Hook</h3>
      <ChildA Learning={Learning} count={count} />
      <h2>{add}</h2>
      <button onClick={addFunc}>Addition</button>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count+2)}>Subtract</button>
    </div>
  );
}

export default UseCallbackHook;
