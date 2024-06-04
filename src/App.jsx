import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Signin from "./assets/pages/Signin";
import Profile from "./assets/pages/Profile";
import About from "./assets/pages/About";
import Signup from "./assets/pages/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
