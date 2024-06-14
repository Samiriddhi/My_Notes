import React, { useState } from "react";

function ToDoReact() {
  const [task, setTask] = useState("");

  const handleTaskInput = (event) => {
    setTask(event.target.value);
  };

  const [tasklist, setTaskList] = useState([]);
  const addTask = () => {
    if (task != "") {
      setTaskList([task, ...tasklist]);
      setReset(true);
      setTask("");
    } else {
      alert("enter your task");
    }
  };

  const deletethisTask = (index) => {
    const updatedItems = tasklist.filter((item, idx) => {
      return idx != index;
    });
    // if (updatedItems.length >= 1) {
    //   setReset(true);
    // }
    setTaskList(updatedItems);
  };

  const [reset, setReset] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Add your Task here"
        value={task}
        onChange={handleTaskInput}
      />
      <button onClick={addTask}>AddTask</button>
      <ul>
        {tasklist.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button
                onClick={() => {
                  deletethisTask(index);
                }}>
                deletetask
              </button>
            </li>
          );
        })}
      </ul>
      {reset ? (
        <>
          <button
            onClick={() => {
              setTaskList([]);
            }}>
            Reset your todo list
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ToDoReact;
