import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [timer , setTimer] = useState(0);
    const IncrementFunc = () =>{
        setTimer(timer+1);
    }

    useEffect(()=>{
        if(timer == 11){
            alert("You reached to 10");
            setTimer(0)
        }
    },[timer])
  return (
    <div>
          <h1>{timer}</h1>
          <button onClick={IncrementFunc}>Click</button>
    </div>
  )
}

export default UseEffect

//we use useEffect hook for managing side effect in components like making alert for clicking on somthing or similar thing also we can use this hook for fetching data from API 
//so here is a simple useEffect example to understand its concept ex 1 for simple alert implementation



  //if we pass empty arr as 2nd parameter then alert will call onlly oncs on refreshing also if we dont pass the 2nd parameter then it will call useeffect every time we refresh the page
  //and if we have more than 1 array then we can pass any partcular array name so when wi work with that partcular array then only  the useeffect will call