import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div>About</div>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/contact">Contact</Link>
    </>
  );
}

export default About;
