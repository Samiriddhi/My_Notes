import React, { useContext } from 'react'
import { fName, lName , email ,profession} from './ComA'
import ComC from './ComC';



//Uses here useContext which Simplifi the problems which Arrives due to Context Api
function ComB() {
    const fname= useContext(fName);
    const lname= useContext(lName);
    const Email= useContext(email);
    const Profession = useContext(profession)

  return (
    <div>
       <h1>My Name is {fname} {lname} I am a {Profession} and Contect Me on {Email} for furthue details Thank You</h1> 
       <ComC/>
    </div>
  )
}

export default ComB 