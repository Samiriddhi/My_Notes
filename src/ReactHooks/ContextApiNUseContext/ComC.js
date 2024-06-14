import React from 'react'
import { fName, lName ,email ,profession } from './ComA'

//here i am using contextApi which is little trickier because it is Creating a problem like callback Hell which is hard to manage if someone will go for large aproject but for understanding it is also important to understand it
// so in local hose if you will see the first introduction it is bascially generating from usecontext while thesecond one is generating from Contextapi

function ComC() {
  return (
    <div>
      <fName.Consumer>
        {(fname)=>{
             return(
              <lName.Consumer>
                {
                  (lname)=>{
                    return(
                      <email.Consumer>
                        {
                          (email)=>{
                            return (
                              <profession.Consumer>
                                {
                                  (profession)=>{
                                    return(
                                      <h1>Hi  My FirstName is {fname} ANd My Second Name is {lname} and My Email Id is{email} and I am a {profession} by Profession</h1>
                                    )
                                  }
                                }
                              </profession.Consumer>
                            )
                          }
                        }
                      </email.Consumer>
                    )
                  }
                }
              </lName.Consumer>
             )
        }}
      </fName.Consumer>
       
    </div>
  )
}

export default ComC