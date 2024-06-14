import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Form";
import ThankYou from "./ThankYou";
function NavForm() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default NavForm;
