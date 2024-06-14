import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRouter;

//just import this MyRouter to App.js to see result its react router to navigate through diffrent components without refreshing which is basically callled single page application
