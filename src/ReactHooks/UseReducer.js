import React, { useReducer } from 'react';


const initialState = 0;

const reducer = (state, action) =>{
    //console.log(state , action )
     if(action.type === "Increment"){
        return state+1;
     }
     if(action.type === "Decrement"){
        if(state>=1){
            return state-1;
        }else{
            return state;  
        }
       
     }
     
}
function UseReducerCounter() {

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
          <h2>{state}</h2>
          <button onClick={()=>{dispatch({type: "Increment"})}}>Increment me</button>
          <button onClick={()=>{dispatch({type: "Decrement"})}}>Decrement me</button>
    </div>
  )
}

export default UseReducerCounter

/*
firstly i defined usereducer func and it is taking two arguments a reducer function and a initial state...reducer is a pure function because it is not giving any side effect
instead of dispatch we can give it a any name but because it is conventional so its good to use as dispatch
*/