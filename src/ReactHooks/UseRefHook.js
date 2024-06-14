import React, { useState } from "react";
import { useRef } from "react";

const UseRefHook= () => {
  const refElement = useRef("");
  console.log(refElement);

  const [name, setName] = useState("samridhi");

  const Reset = () => {
    setName("");
    refElement.current.focus();
  };

  const handleInput = () => {
    refElement.current.style.backgroundColor = "pink";
  };
  return (
    <div>
      <h1>useRef</h1>
      <input
        ref={refElement}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>HandleInput</button>
    </div>
  );
};

export default UseRefHook;


// What is useRef hook?

// The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
// Reasons to use useRef hook

// The main use of useRef hook is to access the DOM elements in a more efficient way as compared to simple refs. Since useRef hooks preserve value across various re-renders and do not cause re-renders whenever a value is changed they make the application faster and helps in caching and storing previous values

// The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 