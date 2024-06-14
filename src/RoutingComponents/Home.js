import React from "react";
import { Link , useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  
  const functionIntro = () => {
    
    navigate("/about");
  };

  return (
    <>
      <div>Home</div>
      <Link to="/about">About</Link>
      <br></br>
      <Link to="/contact">Contact</Link>
      
      <button onClick={functionIntro}>Click</button>
    </>
  );
}

export default Home;
