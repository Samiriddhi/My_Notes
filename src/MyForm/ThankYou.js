import React from "react";
import { Link } from "react-router-dom";
function ThankYou() {
  return (
    <>
      <div>
        <h1> Thanks for the submission of form </h1>
      </div>
      <Link to="/">Form</Link>
    </>
  );
}

export default ThankYou;

//here i just create a react form validation i got asked in my placement redineiss mock so the qsn was basically to create a form and on submission it should nevigate to thanyou page