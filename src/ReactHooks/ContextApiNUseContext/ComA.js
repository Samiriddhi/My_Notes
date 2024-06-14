import React, { createContext } from 'react'
import ComB from './ComB'

let fName= createContext();
let lName=createContext();
let email=createContext();
let profession=createContext();

function ComA() {
  return (
    <div>
      <fName.Provider value={"Samriddhi"}>
        <lName.Provider value={"Shreyasee"}>
          <email.Provider value={"samridhi3512@gmail.com"}>
            <profession.Provider value={"Software developer"}>
            <ComB/>
            </profession.Provider>
          </email.Provider>
        </lName.Provider> 
      </fName.Provider>
    </div>
  )
}

export default ComA
export { fName , lName ,email ,profession};

//here i declered useContext hook and Context api which is used to pass data from parent component to child component directly because when we use propdriling for passinng data the code become very unmanagiable and difficult  to read